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
export class ScenarioHTTP {
    props;
    /**
     * Creates a new HTTP scenario.
     * @param props - Properties defining the HTTP scenario.
     */
    constructor(props) {
        this.props = props;
    }
    /** Returns all properties of the scenario. */
    getProps() {
        return this.props;
    }
    /** Returns the unique identifier of this scenario. */
    getID() {
        return this.props.id;
    }
    /** Returns the description of this scenario, if provided. */
    getDescription() {
        return this.props.description;
    }
}
