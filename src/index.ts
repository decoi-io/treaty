/**
 * @module Treaty
 * @description
 * Core TypeScript library for defining contracts, endpoints, scenarios, and types.
 * Provides builders for primitives, records, arrays, optional types, and HTTP abstractions.
 */

/** Primitive and composite data types */
export { string, number, boolean, array, record, optional } from "./internal";

/** Contract builder */
export { contract as treaty } from "./internal";

/** Endpoint builder and HTTP endpoint class */
export { endpoint } from "./endpoints";

/** Scenario builder and HTTP scenario class */
export { scenario } from "./scenarios";

/**
 * @example
 * ```ts
 * import { treaty, endpoint, scenario, string, optional } from "treaty";
 *
 * // Define types
 * const PassportType = record({
 *   id: "passport",
 *   description: "Passport info",
 *   fields: {
 *     id: string({ id: "passportId" }),
 *     country: string({ id: "country" }),
 *   },
 * });
 *
 * const UserType = record({
 *   id: "user",
 *   description: "User info with optional passport",
 *   fields: {
 *     name: string({ id: "name" }),
 *     passport: optional(PassportType),
 *   },
 * });
 *
 * // Define scenario
 * const getUserScenario = scenario.http({
 *   id: "getUser",
 *   method: "GET",
 *   tag: "setupUser",
 *   status: 200,
 *   request: { params: { userId: string({ id: "userId" }) } },
 *   response: { body: UserType },
 * });
 *
 * // Define endpoint
 * const userEndpoint = endpoint.http({
 *   id: "user",
 *   baseURL: "https://api.example.com/user",
 *   scenarios: [getUserScenario],
 * });
 *
 * // Define contract
 * const userContract = treaty({
 *   description: "User API contract",
 *   version: "1.0.0",
 *   endpoints: [userEndpoint],
 * });
 * ```
 */
