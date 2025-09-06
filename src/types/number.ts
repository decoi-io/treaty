import type { DataType } from "./";

/**
 * Configuration options for the `number` type.
 */
type NumberTypeProps = {
  /** Unique identifier for the type (used for references). */
  id: string;

  /** If provided, the value must exactly equal this number. */
  exact?: number;

  /** Minimum allowed numeric value. */
  min?: number;

  /** Maximum allowed numeric value. */
  max?: number;

  /** Human-readable description of the field. */
  description?: string;

  /** Whether the number is optional (nullable). Defaults to `true` if not set. */
  optional?: boolean;
};

/**
 * Represents a number data type in a Treaty contract.
 *
 * Implements the {@link DataType} interface and provides
 * introspection methods for numeric constraints.
 */
export class NumberType implements DataType {
  private props: NumberTypeProps;

  constructor(props: NumberTypeProps) {
    this.props = props;
  }

  /** Returns `"number"`. */
  type(): string {
    return "number";
  }

  /** Returns the unique identifier for this type. */
  getID(): string {
    return this.props.id;
  }

  /** Returns the exact required number, if set. */
  getExact(): number | undefined {
    return this.props.exact;
  }

  /** Returns the maximum allowed numeric value, if set. */
  getMax(): number | undefined {
    return this.props.max;
  }

  /** Returns the minimum allowed numeric value, if set. */
  getMin(): number | undefined {
    return this.props.min;
  }

  /** Returns the human-readable description, if provided. */
  getDescription(): string | undefined {
    return this.props.description;
  }

  /**
   * Returns `true` if the type is optional (nullable).
   * Defaults to `true` if the property is not set.
   */
  getOptional(): boolean {
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
export const number = (props: NumberTypeProps): NumberType => {
  return new NumberType(props);
};
