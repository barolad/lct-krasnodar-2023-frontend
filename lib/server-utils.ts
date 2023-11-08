"use server";

import { isServer } from "@tanstack/query-core";

export async function getJWTCookie() {
  if (isServer) {
    const { cookies } = await import("next/headers");
    const jwt = cookies().get("jwt")?.value;
    if (jwt) return jwt;
  }
  return "";
}
