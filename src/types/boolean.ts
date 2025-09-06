import type { DataType } from "./";

/**
 * Props used to configure a {@link BooleanType}.
 */
type BooleanTypeProps = {
  /** Unique identifier for this boolean type. */
  id: string;

  /** Optional exact value constraint (true or false). */
  exact?: boolean;

  /** Human-readable description of this field. */
  description?: string;

  /** Whether this field is optional. Defaults to `true`. */
  optional?: boolean;
};

/**
 * Represents a boolean data type with optional constraints.
 *
 * Can enforce an exact value (`true` or `false`), and includes metadata such as
 * description and optionality.
 */
export class BooleanType implements DataType {
  private props: BooleanTypeProps;

  /**
   * Creates a new BooleanType.
   * @param props - Properties defining this boolean type.
   */
  constructor(props: BooleanTypeProps) {
    this.props = props;
  }

  /** Returns the type name: `"boolean"`. */
  type(): string {
    return "boolean";
  }

  /** Returns the unique identifier of this type. */
  getID(): string {
    return this.props.id;
  }

  /** Returns the exact value constraint, if defined. */
  getExact(): boolean | undefined {
    return this.props.exact;
  }

  /** Returns the description of this type, if provided. */
  getDescription(): string | undefined {
    return this.props.description;
  }

  /** Returns whether this field is optional. Defaults to `true`. */
  getOptional(): boolean {
    return this.props.optional ?? true;
  }
}

/**
 * Factory function for creating a {@link BooleanType}.
 * @param props - Properties defining the boolean type.
 * @returns A new {@link BooleanType}.
 */
export const boolean = (props: BooleanTypeProps): BooleanType => {
  return new BooleanType(props);
};
