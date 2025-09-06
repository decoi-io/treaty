import { ScenarioHTTP, type ScenarioHTTPProps } from "./http";

/**
 * Represents a generic scenario.
 */
export interface Scenario {
  /** Returns the unique identifier for this scenario. */
  getID(): string;

  /** Returns the human-readable description of this scenario, if any. */
  getDescription(): string | undefined;
}

/**
 * Collection of scenario builder methods.
 *
 * Provides factory methods to create various scenario types.
 */
class Collection {
  /**
   * Creates an HTTP scenario.
   *
   * @param props - Properties for the HTTP scenario.
   * @returns A new {@link ScenarioHTTP} instance.
   *
   * @example
   * ```ts
   * import { scenario } from "@scenarios";
   *
   * const getUserScenario = scenario.http({
   *   id: "getUser",
   *   description: "Fetches a user by ID",
   *   method: "GET",
   *   tag: "active",
   *   status: 200,
   *   request: {},
   *   response: { body: {} },
   * });
   * ```
   */
  http(props: ScenarioHTTPProps): ScenarioHTTP {
    return new ScenarioHTTP(props);
  }
}

/**
 * Exported scenario collection instance.
 *
 * Use this to access scenario builders like {@link scenario.http}.
 */
export const scenario = new Collection();

/** Export the HTTP scenario class directly for advanced use or typing. */
export { ScenarioHTTP } from "./http";
