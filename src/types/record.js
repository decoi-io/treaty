/**
 * Represents a structured record type with named fields.
 *
 * Each field in the record is associated with a {@link DataType}, allowing
 * composition of complex nested structures.
 *
 */
export class RecordType {
    props;
    /**
     * Creates a new RecordType.
     * @param props - Properties defining this record type.
     */
    constructor(props) {
        this.props = props;
    }
    /** Returns the type name: `"record"`. */
    type() {
        return "record";
    }
    /** Returns the unique identifier of this type. */
    getID() {
        return this.props.id;
    }
    /** Returns the fields defined in this record. */
    getFields() {
        return this.props.fields;
    }
    /** Returns the description of this record, if provided. */
    getDescription() {
        return this.props.description;
    }
    /** Returns whether this field is optional. Defaults to `true`. */
    getOptional() {
        return this.props.optional ?? true;
    }
}
/**
 * Factory function for creating a {@link RecordType}.
 *
 * @example
 * ```ts
 * import { record, string, number } from "@types";
 *
 * const User = record({
 *   id: "user",
 *   fields: {
 *     name: string({ id: "name", description: "The user's name" }),
 *     age: number({ id: "age", min: 0, description: "The user's age" }),
 *   },
 *   description: "User entity",
 * });
 * ```
 *
 * @param props - Properties defining the record type.
 * @returns A new {@link RecordType}.
 */
export const record = (props) => {
    return new RecordType(props);
};
