/**
 * Represents a string data type in a Treaty contract.
 *
 * Implements the {@link DataType} interface and provides
 * introspection methods for string constraints.
 */
export class StringType {
    props;
    constructor(props) {
        this.props = props;
    }
    /** Returns `"string"`. */
    type() {
        return "string";
    }
    /** Returns the unique identifier for this type. */
    getID() {
        return this.props.id;
    }
    /** Returns the exact required string value, if set. */
    getExact() {
        return this.props.exact;
    }
    /** Returns the maximum allowed string length, if set. */
    getMaxLength() {
        return this.props.maxLength;
    }
    /** Returns the minimum allowed string length, if set. */
    getMinLength() {
        return this.props.minLength;
    }
    /** Returns the regex pattern that this string must match, if set. */
    getPattern() {
        return this.props.pattern;
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
 * Builder function for creating a {@link StringType}.
 *
 * Example:
 * ```ts
 * const Username = string({
 *   id: "username",
 *   description: "User's login name",
 *   minLength: 3,
 *   maxLength: 20,
 * });
 * ```
 */
export const string = (props) => {
    return new StringType(props);
};
