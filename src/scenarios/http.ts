import { SCENARIO_SYMBOL, type Scenario } from "../scenarios";
import type { DataType } from "../types";

/**
 * Properties for defining an HTTP scenario.
 */
export type ScenarioHTTPProps = {
  /** Unique identifier for the scenario. */
  id: string;

  /** HTTP method (GET, POST, PUT, DELETE, etc.). */
  method: string;

  /**
   * A tag used to trigger a preparatory request to the server
   * before the actual scenario request. Helps set the server state ready.
   */
  tag: string;

  /** Human-readable description of the scenario. */
  description?: string;

  /** Expected HTTP status code. */
  status: number;

  /** Request structure for this scenario. */
  request: HTTPRequest;

  /** Response structure for this scenario. */
  response: HTTPResponse;
};

/**
 * Represents an HTTP request structure in a scenario.
 */
export type HTTPRequest = {
  /** Optional headers with associated data types. */
  headers?: Record<string, DataType>;

  /** Optional URL path parameters with data types. */
  params?: Record<string, DataType>;

  /** Optional query parameters with data types. */
  queries?: Record<string, DataType>;

  /** Optional request body data type. */
  body?: DataType;
};

/**
 * Represents an HTTP response structure in a scenario.
 */
export type HTTPResponse = {
  /** Optional headers with associated data types. */
  headers?: Record<string, DataType>;

  /** Optional URL path parameters with data types. */
  params?: Record<string, DataType>;

  /** Optional query parameters with data types. */
  queries?: Record<string, DataType>;

  /** Optional response body data type. */
  body?: DataType;
};

/**
 * Represents a single HTTP scenario.
 *
 * Implements the {@link Scenario} interface.
 *
 * @example
 * ```ts
 * import { ScenarioHTTP } from "@scenarios";
 * import { string } from "@types";
 *
 * const getUserScenario = new ScenarioHTTP({
 *   id: "getUser",
 *   method: "GET",
 *   tag: "user",
 *   description: "Fetch a user by ID",
 *   status: 200,
 *   request: {
 *     params: { userId: string({ id: "userId" }) },
 *   },
 *   response: {
 *     body: string({ id: "username" }),
 *   },
 * });
 * ```
 */
export class ScenarioHTTP implements Scenario {
  private props: ScenarioHTTPProps;

  readonly [SCENARIO_SYMBOL] = "decoi.Treaty.Scenario.HTTP";
  /**
   * Creates a new HTTP scenario.
   * @param props - Properties defining the HTTP scenario.
   */
  constructor(props: ScenarioHTTPProps) {
    this.props = props;
  }

  /** Returns all properties of the scenario. */
  getProps(): ScenarioHTTPProps {
    return this.props;
  }

  /** Returns the unique identifier of this scenario. */
  getID(): string {
    return this.props.id;
  }

  /** Returns the description of this scenario, if provided. */
  getDescription(): string | undefined {
    return this.props.description;
  }
}

/**
 * Checks if an object implements the HTTP Scenario.
 * @param obj - Object to check
 * @returns true if object has the http scenario symbol set to true
 */
export const isScenarioHTTP = (obj: unknown): boolean => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    SCENARIO_SYMBOL in obj &&
    (obj as any)[SCENARIO_SYMBOL] === "decoi.Treaty.Scenario.HTTP"
  );
};
