/**
 * Represents an array data type with optional constraints.
 *
 * Supports element type definition, length boundaries, nullability of elements,
 * and metadata like description and optionality.
 *
 */
export class ArrayType {
    props;
    /**
     * Creates a new ArrayType.
     * @param props - Properties defining this array type.
     */
    constructor(props) {
        this.props = props;
    }
    /** Returns the type name: `"array"`. */
    type() {
        return "array";
    }
    /** Returns the unique identifier of this type. */
    getID() {
        return this.props.id;
    }
    /**
     * Returns the element type of this array.
     * Can be a {@link DataType} or a factory function returning one.
     */
    getOf() {
        return this.props.of;
    }
    /** Returns the maximum allowed array length, if defined. */
    getMaxLength() {
        return this.props.maxLength;
    }
    /** Returns the minimum allowed array length, if defined. */
    getMinLength() {
        return this.props.minLength;
    }
    /** Returns whether array elements can be `null`. Defaults to `false`. */
    getIsFieldsNullable() {
        return this.props.isFieldsNullable ?? false;
    }
    /** Returns the description of this array, if provided. */
    getDescription() {
        return this.props.description;
    }
    /** Returns whether this field is optional. Defaults to `true`. */
    getOptional() {
        return this.props.optional ?? true;
    }
}
/**
 * Factory function for creating an {@link ArrayType}.
 *
 * @example
 * ```ts
 * import { array, number } from "@types";
 *
 * // An array of numbers, each between 1 and 100
 * const Scores = array({
 *   id: "scores",
 *   of: number({ id: "score", min: 1, max: 100 }),
 * });
 * ```
 *
 * @param props - Properties defining the array type.
 * @returns A new {@link ArrayType}.
 */
export const array = (props) => {
    return new ArrayType(props);
};
