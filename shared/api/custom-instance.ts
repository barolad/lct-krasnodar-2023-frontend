import { getJWTCookie } from "@/lib/server-utils";
import { ApiResult } from "@/shared/api/ApiResult";
import { toast } from "@/components/ui/use-toast";
import { ApiError } from "@/shared/api/ApiError";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const catchErrorCodes = (result: ApiResult): void => {
  const errors: Record<number, string> = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
  };

  const error = errors[result.status];
  if (error) {
    toast({
      title: result.body,
      description: "You need to be logged in to do that.",
      variant: "destructive",
    });
    throw new ApiError(result, error);
  }

  if (!result.ok) {
    const errorStatus = result.status ?? "unknown";
    const errorStatusText = result.statusText ?? "unknown";
    const errorBody = (() => {
      try {
        return JSON.stringify(result.body, null, 2);
      } catch (e) {
        return undefined;
      }
    })();

    if (errorStatus === 401) {
      toast({
        title: "Login required.",
        description: "You need to be logged in to do that.",
        variant: "destructive",
      });
    }
    console.log(errorStatusText);
    throw new ApiError(
      result,
      `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`,
    );
  }
};

export const getResponseBody = async (response: Response): Promise<any> => {
  if (response.status !== 204) {
    try {
      const contentType = response.headers.get("Content-Type");
      if (contentType) {
        const jsonTypes = ["application/json", "application/problem+json"];
        const isJSON = jsonTypes.some((type) =>
          contentType.toLowerCase().startsWith(type),
        );
        if (isJSON) {
          return await response.json();
        } else {
          return await response.text();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return undefined;
};

export const customInstance = async <T>(
  {
    url,
    method,
    params,
    headers,
    data,
  }: {
    url: string;
    method: "get" | "post" | "put" | "delete" | "patch";
    params?: Record<string, any>;
    headers?: Record<string, any>;
    data?: BodyType<unknown> | FormData;
    responseType?: string;
  },
  options?: RequestInit,
): Promise<T> => {
  try {
    const token = await getJWTCookie();
    const cookieHeaders = !!token ? { Cookies: "jwt=" + token } : null;
    const response = await fetch(
      `${baseURL}${url}` + new URLSearchParams(params),
      {
        method,
        headers: {
          ...cookieHeaders,
          ...headers,
        },
        ...(data
          ? {
              body:
                typeof data === "object" && data instanceof FormData
                  ? data
                  : JSON.stringify(data),
            }
          : {}),
        credentials: "include",
        ...options,
      },
    );
    const responseBody = await getResponseBody(response);
    const result: ApiResult = {
      url,
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      body: responseBody,
    };

    catchErrorCodes(result);
    return result.body;
  } catch (error) {
    throw error;
  }
};
export default customInstance;

export type ErrorType<ErrorData> = ErrorData;

export type BodyType<BodyData> = BodyData & { headers?: any };
