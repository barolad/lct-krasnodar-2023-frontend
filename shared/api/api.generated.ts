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

export interface WorkerCasePatchDto {
  case: string;
  id: string;
}

export interface UserShortWCaseRead {
  case: string;
  email: string;
  grade?: string | null;
  id: string;
  lastname: string;
  location?: string | null;
  locationCoordinates?: number[] | null;
  name: string;
  surname: string;
}

export interface UserShortRead {
  email: string;
  grade?: string | null;
  id: string;
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

export interface TargetDataset {
  areCardsAndMaterialsDelivered?: string | null;
  daysSinceLastCardIssue?: number;
  numberOfApprovedApplications?: number;
  numberOfGivenCards?: number;
  whenPointConnected?: string | null;
}

export type Target = (typeof Target)[keyof typeof Target];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Target = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;

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

export interface Response {
  geoObjectCollection: GeoObjectCollection;
}

export interface Point {
  pos: string;
}

export interface PartnerStatsPatchDto {
  areCardsAndMaterialsDelivered?: string | null;
  daysSinceLastCardIssue?: number | null;
  id?: number;
  numberOfApprovedApplications?: number | null;
  numberOfGivenCards?: number | null;
  whenPointConnected?: string | null;
}

export interface PartnerInfoReadDto {
  address: string;
  areCardsAndMaterialsDelivered: string;
  daysSinceLastCardIssue: number;
  id: number;
  isActive: boolean;
  locationCoordinates: number[];
  numberOfApprovedApplications: number;
  numberOfGivenCards: number;
  whenPointConnected: string;
}

export interface PartnerInfoPatchDto {
  address?: string | null;
  id?: number;
  locationCoordinates?: number[] | null;
}

export interface PartnerInfoCreationDto {
  address: string;
  locationCoordinates: number[];
}

export interface PartnerIdDto {
  id?: number;
}

export type Grade = (typeof Grade)[keyof typeof Grade];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Grade = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;

export interface GeocoderResponseMetaData {
  found: string;
  point: string;
  request: string;
  results: string;
}

export interface MetaDataProperty {
  geocoderResponseMetaData: GeocoderResponseMetaData;
}

export interface GeocoderCustomResponse {
  addressLine: string;
  poss: number[];
}

export interface GeocodeResponse {
  response: Response;
}

export interface GeocodeRequest {
  address: string;
}

export interface GeoObject {
  boundedBy: BoundedBy;
  description: string;
  metaDataProperty: MetaDataProperty;
  name: string;
  point: Point;
}

export interface FeatureMember {
  geoObject: GeoObject;
}

export interface GeoObjectCollection {
  featureMember: FeatureMember[];
  metaDataProperty: MetaDataProperty;
}

export interface Envelope {
  lowerCorner: string;
  upperCorner: string;
}

export interface Endpnt {
  coordinates: number[];
  routeToEndpoint: string;
}

export interface ConstantTaskSizeIdDto {
  id?: number;
}

export interface ConstantTaskSizeCreationDto {
  grades: Grade[];
  name: string;
  rules: number[];
  value: string;
}

export interface ConstantTaskSize {
  grades: Grade[];
  id?: number;
  name: string;
  rules: number[];
  value: string;
}

export interface ConstantTaskRuleIdDto {
  id?: number;
}

export type Condition = (typeof Condition)[keyof typeof Condition];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Condition = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
  NUMBER_6: 6,
  NUMBER_7: 7,
  NUMBER_8: 8,
  NUMBER_9: 9,
  NUMBER_10: 10,
  NUMBER_11: 11,
} as const;

export interface ConstantTaskRuleCreationDto {
  conditions: Condition[];
  description: string;
  targets: Target[];
}

export interface ConstantTaskRule {
  conditions: Condition[];
  description: string;
  id?: number;
  targets: Target[];
}

export interface BoundedBy {
  envelope: Envelope;
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

export const getConstantTasks = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskSize[]>(
    { url: `/ConstantTasks/ConstantTasks/Get`, method: "get" },
    options,
  );
};

export const newConstantTask = (
  constantTaskSizeCreationDto: BodyType<ConstantTaskSizeCreationDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskSize>(
    {
      url: `/ConstantTasks/ConstantTasks/New`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: constantTaskSizeCreationDto,
    },
    options,
  );
};

export const updateConstantTask = (
  constantTaskSize: BodyType<ConstantTaskSize>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskSize>(
    {
      url: `/ConstantTasks/ConstantTasks/Patch`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: constantTaskSize,
    },
    options,
  );
};

export const deleteConstantTask = (
  constantTaskSizeIdDto: BodyType<ConstantTaskSizeIdDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskSize>(
    {
      url: `/ConstantTasks/ConstantTasks/Delete`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: constantTaskSizeIdDto,
    },
    options,
  );
};

export const getConstantTaskRules = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskRule[]>(
    { url: `/ConstantTasks/ConstantTasks/Rules/Get`, method: "get" },
    options,
  );
};

export const newConstantTaskRule = (
  constantTaskRuleCreationDto: BodyType<ConstantTaskRuleCreationDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskRule>(
    {
      url: `/ConstantTasks/ConstantTasks/Rule/New`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: constantTaskRuleCreationDto,
    },
    options,
  );
};

export const updateConstantTaskRule = (
  constantTaskRule: BodyType<ConstantTaskRule>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskRule>(
    {
      url: `/ConstantTasks/ConstantTasks/Rule/Patch`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: constantTaskRule,
    },
    options,
  );
};

export const deleteConstantTaskRule = (
  constantTaskRuleIdDto: BodyType<ConstantTaskRuleIdDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskRule>(
    {
      url: `/ConstantTasks/ConstantTasks/Rule/Delete`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: constantTaskRuleIdDto,
    },
    options,
  );
};

export const checkIfAnyRuleIsSuitable = (
  targetDataset: BodyType<TargetDataset>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ConstantTaskRule[]>(
    {
      url: `/ConstantTasks/ConstantTasks/Rule/Test`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: targetDataset,
    },
    options,
  );
};

export const geocoder = (
  geocodeRequest: BodyType<GeocodeRequest>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GeocoderCustomResponse>(
    {
      url: `/Maps/Geocoder`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: geocodeRequest,
    },
    options,
  );
};

export const geosuggest = (
  geocodeRequest: BodyType<GeocodeRequest>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GeocodeResponse>(
    {
      url: `/Maps/Geosuggest`,
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
  return customInstance<PartnerInfoReadDto>(
    {
      url: `/Partner/New`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: partnerInfoCreationDto,
    },
    options,
  );
};

export const patchPartner = (
  partnerInfoPatchDto: BodyType<PartnerInfoPatchDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PartnerInfoReadDto>(
    {
      url: `/Partner/Patch`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: partnerInfoPatchDto,
    },
    options,
  );
};

export const getAllPartners = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PartnerInfoReadDto[]>(
    { url: `/Partner/GetAll`, method: "get" },
    options,
  );
};

export const getPartner = (
  partnerIdDto: BodyType<PartnerIdDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PartnerInfoReadDto>(
    {
      url: `/Partner/Get`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: partnerIdDto,
    },
    options,
  );
};

export const deletePartner = (
  partnerIdDto: BodyType<PartnerIdDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PartnerInfoReadDto>(
    {
      url: `/Partner/Delete`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: partnerIdDto,
    },
    options,
  );
};

export const reversePartnerStatus = (
  partnerIdDto: BodyType<PartnerIdDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PartnerInfoReadDto>(
    {
      url: `/Partner/Switch`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: partnerIdDto,
    },
    options,
  );
};

export const patchPartnerStatistics = (
  partnerStatsPatchDto: BodyType<PartnerStatsPatchDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PartnerInfoReadDto>(
    {
      url: `/Partner/Stats/Patch`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: partnerStatsPatchDto,
    },
    options,
  );
};

export const deletePartnerStatistics = (
  partnerIdDto: BodyType<PartnerIdDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<PartnerInfoReadDto>(
    {
      url: `/Partner/Stats/Delete`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: partnerIdDto,
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

export const postUserNew = (
  userCreationDto: BodyType<UserCreationDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<User>(
    {
      url: `/User/New`,
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
    { url: `/User/GetShort`, method: "get" },
    options,
  );
};

export const getWorkersWithCases = (
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<UserShortWCaseRead[]>(
    { url: `/User/Get`, method: "get" },
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

export const patchWorkerCase = (
  workerCasePatchDto: BodyType<WorkerCasePatchDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<string>(
    {
      url: `/User/PatchCase`,
      method: "post",
      headers: { "Content-Type": "application/json-patch+json" },
      data: workerCasePatchDto,
    },
    options,
  );
};

export const deleteWorker = (
  userIdDto: BodyType<UserIdDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<string>(
    {
      url: `/User/Delete`,
      method: "post",
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
export type GetConstantTasksResult = NonNullable<
  Awaited<ReturnType<typeof getConstantTasks>>
>;
export type NewConstantTaskResult = NonNullable<
  Awaited<ReturnType<typeof newConstantTask>>
>;
export type UpdateConstantTaskResult = NonNullable<
  Awaited<ReturnType<typeof updateConstantTask>>
>;
export type DeleteConstantTaskResult = NonNullable<
  Awaited<ReturnType<typeof deleteConstantTask>>
>;
export type GetConstantTaskRulesResult = NonNullable<
  Awaited<ReturnType<typeof getConstantTaskRules>>
>;
export type NewConstantTaskRuleResult = NonNullable<
  Awaited<ReturnType<typeof newConstantTaskRule>>
>;
export type UpdateConstantTaskRuleResult = NonNullable<
  Awaited<ReturnType<typeof updateConstantTaskRule>>
>;
export type DeleteConstantTaskRuleResult = NonNullable<
  Awaited<ReturnType<typeof deleteConstantTaskRule>>
>;
export type CheckIfAnyRuleIsSuitableResult = NonNullable<
  Awaited<ReturnType<typeof checkIfAnyRuleIsSuitable>>
>;
export type GeocoderResult = NonNullable<Awaited<ReturnType<typeof geocoder>>>;
export type GeosuggestResult = NonNullable<
  Awaited<ReturnType<typeof geosuggest>>
>;
export type CreateNewPartnerResult = NonNullable<
  Awaited<ReturnType<typeof createNewPartner>>
>;
export type PatchPartnerResult = NonNullable<
  Awaited<ReturnType<typeof patchPartner>>
>;
export type GetAllPartnersResult = NonNullable<
  Awaited<ReturnType<typeof getAllPartners>>
>;
export type GetPartnerResult = NonNullable<
  Awaited<ReturnType<typeof getPartner>>
>;
export type DeletePartnerResult = NonNullable<
  Awaited<ReturnType<typeof deletePartner>>
>;
export type ReversePartnerStatusResult = NonNullable<
  Awaited<ReturnType<typeof reversePartnerStatus>>
>;
export type PatchPartnerStatisticsResult = NonNullable<
  Awaited<ReturnType<typeof patchPartnerStatistics>>
>;
export type DeletePartnerStatisticsResult = NonNullable<
  Awaited<ReturnType<typeof deletePartnerStatistics>>
>;
export type GetTodaySRoutesResult = NonNullable<
  Awaited<ReturnType<typeof getTodaySRoutes>>
>;
export type GetStatusResult = NonNullable<
  Awaited<ReturnType<typeof getStatus>>
>;
export type PostUserNewResult = NonNullable<
  Awaited<ReturnType<typeof postUserNew>>
>;
export type GetAllUsersResult = NonNullable<
  Awaited<ReturnType<typeof getAllUsers>>
>;
export type GetWorkersWithCasesResult = NonNullable<
  Awaited<ReturnType<typeof getWorkersWithCases>>
>;
export type PatchUserResult = NonNullable<
  Awaited<ReturnType<typeof patchUser>>
>;
export type PatchWorkerCaseResult = NonNullable<
  Awaited<ReturnType<typeof patchWorkerCase>>
>;
export type DeleteWorkerResult = NonNullable<
  Awaited<ReturnType<typeof deleteWorker>>
>;
export type SolveVehicleRoutingProblemResult = NonNullable<
  Awaited<ReturnType<typeof solveVehicleRoutingProblem>>
>;
