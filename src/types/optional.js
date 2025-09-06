/**
 * Represents an optional (nullable) data type, mainly for referencing another type.
 *
 * Use this when you want to mark a **type reference** as optional.
 * For primitive types (like string, number, boolean) or records, you can
 * use the `optional` flag inside the type builder instead.
 *
 * Wraps any {@link DataType} to make it optional.
 * The underlying type's metadata (ID, description) is preserved.
 */
export class OptionalType {
    props;
    /**
     * Creates a new OptionalType.
     * @param props - Properties defining the optional type.
     */
    constructor(props) {
        this.props = props;
    }
    /** Returns the type name: `"optional"`. */
    type() {
        return "optional";
    }
    /** Returns the ID of the wrapped type. */
    getID() {
        if (typeof this.props.Of === "function") {
            return this.props.Of().getID();
        }
        return this.props.Of.getID();
    }
    /**
     * Returns the wrapped type.
     * Can be a {@link DataType} or a lazy function returning one.
     */
    getOf() {
        return this.props.Of;
    }
    /** Returns the description of the wrapped type, if any. */
    getDescription() {
        if (typeof this.props.Of === "function") {
            return this.props.Of().getDescription();
        }
        return this.props.Of.getDescription();
    }
    /** Always returns `true` because this type is optional. */
    getOptional() {
        return true;
    }
}
/**
 * Factory function for creating an {@link OptionalType}.
 *
 * Mainly intended for **referencing another type** that should be optional.
 *
 * @example
 * ```ts
 * import { optional, record, string } from "@types";
 *
 * // Define Passport type
 * const PassportType = record({
 *   id: "passport",
 *   description: "Passport information for a user",
 *   fields: {
 *     id: string({ id: "passportId", description: "Passport unique identifier" }),
 *     country: string({ id: "country", description: "Country of issuance" }),
 *   },
 * });
 *
 * // Define User type with optional Passport
 * const UserType = record({
 *   id: "user",
 *   description: "A user record with optional passport",
 *   fields: {
 *     name: string({ id: "name", description: "User's full name" }),
 *     passport: optional(PassportType), // optional type reference
 *   },
 * });
 * ```
 *
 * @param of - The type to wrap as optional.
 * @returns A new {@link OptionalType}.
 */
export const optional = (of) => {
    return new OptionalType({ Of: of });
};
