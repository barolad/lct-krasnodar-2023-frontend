/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * LctKrasnodarWebApi
 * OpenAPI spec version: 1.0
 */
import { customInstance } from "./custom-instance";
import type { BodyType } from "./custom-instance";
export type CheckIfEmailAlreadyExistsParams = {
  email?: string;
};

export type YesNo = (typeof YesNo)[keyof typeof YesNo];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YesNo = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const;

export type WhenConnected = (typeof WhenConnected)[keyof typeof WhenConnected];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const WhenConnected = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const;

export interface UserShortRead {
  grade?: string | null;
  id?: string;
  lastname: string;
  location?: string | null;
  locationCoordinates?: number[] | null;
  name: string;
  surname: string;
}

export interface UserRead {
  email: string;
  id?: string;
  lastname: string;
  name: string;
  surname: string;
}

export interface UserWithTokenRead {
  token: string;
  user: UserRead;
}

export interface UserLoginDto {
  email: string;
  password: string;
}

export interface UserIdDto {
  userId: string;
}

export interface UserCreationDto {
  email: string;
  grade?: Grade;
  lastname: string;
  location?: string | null;
  locationCoordinates?: number[] | null;
  name: string;
  password: string;
  role: Role;
  surname: string;
}

export interface User {
  email: string;
  grade?: Grade;
  id?: string;
  lastname: string;
  location?: string | null;
  locationCoordinates?: number[] | null;
  name: string;
  passwordHash: string;
  role: Role;
  surname: string;
}

export type SolutionReadEndPointsList = { [key: string]: Endpnt };

export interface SolutionRead {
  endPointsList: SolutionReadEndPointsList;
  user: UserShortRead;
}

export interface Solutions {
  solutionList: SolutionRead[];
}

export type Role = (typeof Role)[keyof typeof Role];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Role = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;

export interface PartnerInfoPatchDto {
  areCardsAndMaterialsDelivered?: YesNo;
  daysSinceLastCardIssue?: number | null;
  id?: number;
  numberOfApprovedApplications?: number | null;
  numberOfGivenCards?: number | null;
  whenPointConnected?: WhenConnected;
}

export interface PartnerInfoCreationDto {
  address: string;
  locationCoordinates: number[];
}

export interface PartnerInfo {
  address: string;
  areCardsAndMaterialsDelivered?: YesNo;
  daysSinceLastCardIssue?: number | null;
  id?: number;
  locationCoordinates: number[];
  numberOfApprovedApplications?: number | null;
  numberOfGivenCards?: number | null;
  whenPointConnected?: WhenConnected;
}

export type Grade = (typeof Grade)[keyof typeof Grade];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Grade = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;

export interface UserPatchDto {
  email?: string | null;
  grade?: Grade;
  lastname?: string | null;
  location?: string | null;
  locationCoordinates?: number[] | null;
  name?: string | null;
  password?: string | null;
  role?: Role;
  surname?: string | null;
  userId: string;
}

export interface GeocodeRequest {
  address?: string | null;
}

export interface Endpnt {
  coordinates: number[];
  routeToEndpoint: string;
}

export interface ConstantTaskSize {
  grades: Grade[];
  id: number;
  name: string;
  value: string;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const getAssignmentGetMatrix = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<unknown[]>(
    { url: `/Assignment/GetMatrix`, method: "get" },
    options,
  );
};

export const postAuthLogin = (
  userLoginDto: BodyType<UserLoginDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<UserWithTokenRead>(
    {
      url: `/Auth/Login`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: userLoginDto,
    },
    options,
  );
};

export const getAuthAuthorize = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<UserRead>(
    { url: `/Auth/Authorize`, method: "get" },
    options,
  );
};

export const getAuthLogout = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<string>(
    { url: `/Auth/Logout`, method: "get" },
    options,
  );
};

export const checkIfEmailAlreadyExists = (
  params?: CheckIfEmailAlreadyExistsParams,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<string>(
    { url: `/Auth/сheck`, method: "get", params },
    options,
  );
};

export const getContstantTasksGetConstantTasks = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskSize[]>(
    { url: `/ContstantTasks/GetConstantTasks`, method: "get" },
    options,
  );
};

export const geocoder = (
  geocodeRequest: BodyType<GeocodeRequest>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/Maps/Geocoder`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: geocodeRequest,
    },
    options,
  );
};

export const createNewPartner = (
  partnerInfoCreationDto: BodyType<PartnerInfoCreationDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/Partner/New`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: partnerInfoCreationDto,
    },
    options,
  );
};

export const getAllPartners = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PartnerInfo>(
    { url: `/Partner/GetAll`, method: "get" },
    options,
  );
};

export const patchPartner = (
  partnerInfoPatchDto: BodyType<PartnerInfoPatchDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/Partner/Patch`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: partnerInfoPatchDto,
    },
    options,
  );
};

export const getTodaySRoutes = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<Solutions>(
    { url: `/Route/Today`, method: "get" },
    options,
  );
};

export const getStatus = (options?: SecondParameter<typeof customInstance>) => {
  return customInstance<void>({ url: `/Status`, method: "get" }, options);
};

export const postUserNewAdmin = (
  userCreationDto: UserCreationDto[],
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/User/NewAdmin`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: userCreationDto,
    },
    options,
  );
};

export const getAllUsers = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<UserShortRead[]>(
    { url: `/User/GetShortAdmin`, method: "get" },
    options,
  );
};

export const createNewManagerAsAdministratorOrNewWorkerAsManagerOrAdministrator =
  (
    userCreationDto: UserCreationDto[],
    options?: SecondParameter<typeof customInstance>,
  ) => {
    return customInstance<User[]>(
      {
        url: `/User/New`,
        method: "post",
        headers: { "Content-Type": "application/json-patch+json" },
        data: userCreationDto,
      },
      options,
    );
  };

export const patchUser = (
  userPatchDto: BodyType<UserPatchDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<UserShortRead>(
    {
      url: `/User/Patch`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: userPatchDto,
    },
    options,
  );
};

export const getAllUsersAsAdministratorOrManagerOrWorkersAsManager = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<UserShortRead[]>(
    { url: `/User/GetShort`, method: "get" },
    options,
  );
};

export const deleteWorkerAsManagerOrAdministratorOrDeleteManagerAsAdministrator =
  (
    userIdDto: UserIdDto[],
    options?: SecondParameter<typeof customInstance>,
  ) => {
    return customInstance<string>(
      {
        url: `/User/Delete`,
        method: "delete",
        headers: { "Content-Type": "application/json-patch+json" },
        data: userIdDto,
      },
      options,
    );
  };

export const solveVehicleRoutingProblem = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    { url: `/VehicleRouting/solve`, method: "post" },
    options,
  );
};

export type GetAssignmentGetMatrixResult = NonNullable<
  Awaited<ReturnType<typeof getAssignmentGetMatrix>>
>;
export type PostAuthLoginResult = NonNullable<
  Awaited<ReturnType<typeof postAuthLogin>>
>;
export type GetAuthAuthorizeResult = NonNullable<
  Awaited<ReturnType<typeof getAuthAuthorize>>
>;
export type GetAuthLogoutResult = NonNullable<
  Awaited<ReturnType<typeof getAuthLogout>>
>;
export type CheckIfEmailAlreadyExistsResult = NonNullable<
  Awaited<ReturnType<typeof checkIfEmailAlreadyExists>>
>;
export type GetContstantTasksGetConstantTasksResult = NonNullable<
  Awaited<ReturnType<typeof getContstantTasksGetConstantTasks>>
>;
export type GeocoderResult = NonNullable<Awaited<ReturnType<typeof geocoder>>>;
export type CreateNewPartnerResult = NonNullable<
  Awaited<ReturnType<typeof createNewPartner>>
>;
export type GetAllPartnersResult = NonNullable<
  Awaited<ReturnType<typeof getAllPartners>>
>;
export type PatchPartnerResult = NonNullable<
  Awaited<ReturnType<typeof patchPartner>>
>;
export type GetTodaySRoutesResult = NonNullable<
  Awaited<ReturnType<typeof getTodaySRoutes>>
>;
export type GetStatusResult = NonNullable<
  Awaited<ReturnType<typeof getStatus>>
>;
export type PostUserNewAdminResult = NonNullable<
  Awaited<ReturnType<typeof postUserNewAdmin>>
>;
export type GetAllUsersResult = NonNullable<
  Awaited<ReturnType<typeof getAllUsers>>
>;
export type CreateNewManagerAsAdministratorOrNewWorkerAsManagerOrAdministratorResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof createNewManagerAsAdministratorOrNewWorkerAsManagerOrAdministrator
      >
    >
  >;
export type PatchUserResult = NonNullable<
  Awaited<ReturnType<typeof patchUser>>
>;
export type GetAllUsersAsAdministratorOrManagerOrWorkersAsManagerResult =
  NonNullable<
    Awaited<
      ReturnType<typeof getAllUsersAsAdministratorOrManagerOrWorkersAsManager>
    >
  >;
export type DeleteWorkerAsManagerOrAdministratorOrDeleteManagerAsAdministratorResult =
  NonNullable<
    Awaited<
      ReturnType<
        typeof deleteWorkerAsManagerOrAdministratorOrDeleteManagerAsAdministrator
      >
    >
  >;
export type SolveVehicleRoutingProblemResult = NonNullable<
  Awaited<ReturnType<typeof solveVehicleRoutingProblem>>
>;