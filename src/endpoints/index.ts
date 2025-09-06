import type { Scenario } from "../scenarios";
import { EndpointHTTP, type EndpointHTTPProps } from "./http";

/**
 * Represents a generic endpoint in a contract.
 */
export interface Endpoint {
  /** Adds a new scenario to this endpoint. */
  addScenario(scenario: Scenario): void;

  /** Returns all scenarios associated with this endpoint. */
  listScenarios(): Scenario[];

  /** Returns the unique identifier of this endpoint. */
  getID(): string;

  /** Returns the human-readable description of this endpoint, if any. */
  getDescription(): string | undefined;
}

/**
 * Collection of endpoint builder methods.
 *
 * Provides factory methods to create various endpoint types.
 */
class Collection {
  /**
   * Creates a new HTTP endpoint.
   *
   * @param props - Properties for the HTTP endpoint.
   * @returns A new {@link EndpointHTTP} instance.
   *
   * @example
   * ```ts
   * import { endpoint } from "@endpoints";
   * import { string } from "@types";
   *
   * const userEndpoint = endpoint.http({
   *   id: "getUser",
   *   baseURL: "https://api.example.com/user",
   *   description: "User API endpoint",
   *   scenarios: [],
   * });
   * ```
   */
  http(props: EndpointHTTPProps): EndpointHTTP {
    return new EndpointHTTP(props);
  }
}

/**
 * Exported endpoint collection instance.
 *
 * Use this to access endpoint builders like {@link endpoint.http}.
 */
export const endpoint = new Collection();

/** Export the HTTP endpoint class directly for advanced use or typing. */
export { EndpointHTTP } from "./http";
