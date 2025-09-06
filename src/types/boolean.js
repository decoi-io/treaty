/**
 * Represents a boolean data type with optional constraints.
 *
 * Can enforce an exact value (`true` or `false`), and includes metadata such as
 * description and optionality.
 */
export class BooleanType {
    props;
    /**
     * Creates a new BooleanType.
     * @param props - Properties defining this boolean type.
     */
    constructor(props) {
        this.props = props;
    }
    /** Returns the type name: `"boolean"`. */
    type() {
        return "boolean";
    }
    /** Returns the unique identifier of this type. */
    getID() {
        return this.props.id;
    }
    /** Returns the exact value constraint, if defined. */
    getExact() {
        return this.props.exact;
    }
    /** Returns the description of this type, if provided. */
    getDescription() {
        return this.props.description;
    }
    /** Returns whether this field is optional. Defaults to `true`. */
    getOptional() {
        return this.props.optional ?? true;
    }
}
/**
 * Factory function for creating a {@link BooleanType}.
 * @param props - Properties defining the boolean type.
 * @returns A new {@link BooleanType}.
 */
export const boolean = (props) => {
    return new BooleanType(props);
};
