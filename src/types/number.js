/**
 * Represents a number data type in a Treaty contract.
 *
 * Implements the {@link DataType} interface and provides
 * introspection methods for numeric constraints.
 */
export class NumberType {
    props;
    constructor(props) {
        this.props = props;
    }
    /** Returns `"number"`. */
    type() {
        return "number";
    }
    /** Returns the unique identifier for this type. */
    getID() {
        return this.props.id;
    }
    /** Returns the exact required number, if set. */
    getExact() {
        return this.props.exact;
    }
    /** Returns the maximum allowed numeric value, if set. */
    getMax() {
        return this.props.max;
    }
    /** Returns the minimum allowed numeric value, if set. */
    getMin() {
        return this.props.min;
    }
    /** Returns the human-readable description, if provided. */
    getDescription() {
        return this.props.description;
    }
    /**
     * Returns `true` if the type is optional (nullable).
     * Defaults to `true` if the property is not set.
     */
    getOptional() {
        return this.props.optional ?? true;
    }
}
/**
 * Builder function for creating a {@link NumberType}.
 *
 * Example:
 * ```ts
 * const Age = number({
 *   id: "age",
 *   description: "User's age in years",
 *   min: 0,
 *   max: 120,
 * });
 * ```
 */
export const number = (props) => {
    return new NumberType(props);
};
