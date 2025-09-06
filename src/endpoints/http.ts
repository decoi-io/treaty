import type { Endpoint } from "../endpoints";
import type { ScenarioHTTP } from "../scenarios";

/**
 * Properties used to configure an HTTP endpoint.
 */
export type EndpointHTTPProps = {
  /** Unique identifier for the endpoint. */
  id: string;

  /** Base URL for this endpoint. */
  baseURL: string;

  /** List of HTTP scenarios associated with this endpoint. */
  scenarios: ScenarioHTTP[];

  /** Whether this endpoint requires secure connection (HTTPS). */
  secure?: boolean;

  /** Human-readable description of the endpoint. */
  description?: string;
};

/**
 * Represents an HTTP endpoint in a contract.
 *
 * Implements the {@link Endpoint} interface.
 *
 * @example
 * ```ts
 * import { EndpointHTTP } from "@endpoints";
 * import { scenario } from "@scenarios";
 * import { string } from "@types";
 *
 * // Define a scenario
 * const getUserScenario = scenario.http({
 *   id: "getUser",
 *   method: "GET",
 *   tag: "setupUser",
 *   description: "Fetch a user by ID",
 *   status: 200,
 *   request: { params: { userId: string({ id: "userId" }) } },
 *   response: { body: string({ id: "username" }) },
 * });
 *
 * // Create an endpoint with the scenario
 * const userEndpoint = new EndpointHTTP({
 *   id: "user",
 *   baseURL: "https://api.example.com/user",
 *   description: "User API endpoint",
 *   scenarios: [getUserScenario],
 *   secure: true,
 * });
 * ```
 */
export class EndpointHTTP implements Endpoint {
  private props: EndpointHTTPProps;

  /**
   * Creates a new HTTP endpoint.
   * @param props - Properties defining the endpoint.
   */
  constructor(props: EndpointHTTPProps) {
    this.props = props;
  }

  /**
   * Adds a new scenario to this endpoint.
   * @param scenario - Scenario to add.
   * @throws Will throw if a scenario with the same ID already exists.
   */
  addScenario(scenario: ScenarioHTTP): void {
    if (
      this.props.scenarios.findIndex((s) => s.getID() === scenario.getID()) !==
      -1
    ) {
      throw `duplicate scenario name ${scenario.getID()} at endpoint ${this.props.id}`;
    }

    this.props.scenarios.push(scenario);
  }

  /** Returns all HTTP scenarios associated with this endpoint. */
  listScenarios(): ScenarioHTTP[] {
    return this.props.scenarios;
  }

  /** Returns the unique identifier of this endpoint. */
  getID(): string {
    return this.props.id;
  }

  /** Returns the base URL of this endpoint. */
  getBaseURL(): string {
    return this.props.baseURL;
  }

  /** Returns whether this endpoint requires a secure connection (HTTPS). */
  getIsSecure(): boolean {
    return this.props.secure ?? false;
  }

  /** Returns the human-readable description of this endpoint, if any. */
  getDescription(): string | undefined {
    return this.props.description;
  }
}
