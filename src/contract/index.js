import {} from "../endpoints";
/**
 * Represents a collection of endpoints forming a contract.
 *
 * Contracts group related endpoints and provide metadata like description and version.
 */
export class Contract {
    props;
    /**
     * Creates a new Contract.
     * @param props - Properties defining this contract.
     */
    constructor(props) {
        this.props = props;
    }
    /** Returns the human-readable description of the contract. */
    getDescription() {
        return this.props.description;
    }
    /** Returns the version string of the contract. */
    getVersion() {
        return this.props.version;
    }
    /**
     * Adds a new endpoint to the contract.
     * @param endpoint - The endpoint to add.
     * @throws Will throw if an endpoint with the same ID already exists.
     */
    addEndpont(endpoint) {
        if (this.props.endpoints.findIndex((e) => e.getID() === endpoint.getID()) !==
            -1) {
            throw `duplicate endpoint name ${endpoint.getID()}`;
        }
        this.props.endpoints.push(endpoint);
    }
    /** Returns all endpoints included in the contract. */
    getEndpoints() {
        return this.props.endpoints;
    }
}
/**
 * Factory function for creating a {@link Contract}.
 *
 * @param props - Properties defining the contract.
 * @returns A new {@link Contract}.
 *
 * @example
 * ```ts
 * import { contract } from "@contract";
 * import { endpoint } from "@endpoints";
 *
 * const MyEndpoint = endpoint.http({
 *   id: "getUser",
 *   baseURL: "https://api.example.com/user",
 *   scenarios: [],
 * });
 *
 * const MyContract = contract({
 *   description: "User API contract",
 *   version: "1.0.0",
 *   endpoints: [MyEndpoint],
 * });
 * ```
 */
export const contract = (props) => {
    return new Contract(props);
};
