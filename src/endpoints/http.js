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
export class EndpointHTTP {
    props;
    /**
     * Creates a new HTTP endpoint.
     * @param props - Properties defining the endpoint.
     */
    constructor(props) {
        this.props = props;
    }
    /**
     * Adds a new scenario to this endpoint.
     * @param scenario - Scenario to add.
     * @throws Will throw if a scenario with the same ID already exists.
     */
    addScenario(scenario) {
        if (this.props.scenarios.findIndex((s) => s.getID() === scenario.getID()) !==
            -1) {
            throw `duplicate scenario name ${scenario.getID()} at endpoint ${this.props.id}`;
        }
        this.props.scenarios.push(scenario);
    }
    /** Returns all HTTP scenarios associated with this endpoint. */
    listScenarios() {
        return this.props.scenarios;
    }
    /** Returns the unique identifier of this endpoint. */
    getID() {
        return this.props.id;
    }
    /** Returns the base URL of this endpoint. */
    getBaseURL() {
        return this.props.baseURL;
    }
    /** Returns whether this endpoint requires a secure connection (HTTPS). */
    getIsSecure() {
        return this.props.secure ?? false;
    }
    /** Returns the human-readable description of this endpoint, if any. */
    getDescription() {
        return this.props.description;
    }
}
