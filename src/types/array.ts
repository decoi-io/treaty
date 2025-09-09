import { DATATYPE_SYMBOL, type DataType } from "./";

/**
 * Props used to configure an {@link ArrayType}.
 */
type ArrayTypeProps = {
  /** Unique identifier for this array type. */
  id: string;

  /**
   * The type of elements contained in the array.
   * Can be a {@link DataType} instance or a lazy function returning one.
   */
  of: DataType | (() => DataType);

  /** Minimum allowed length of the array. */
  minLength?: number;

  /** Maximum allowed length of the array. */
  maxLength?: number;

  /**
   * Whether individual array elements can be `null`.
   * Defaults to `false`.
   */
  isFieldsNullable?: boolean;

  /** Human-readable description of this array. */
  description?: string;

  /** Whether this array field is optional. Defaults to `true`. */
  optional?: boolean;
};

/**
 * Represents an array data type with optional constraints.
 *
 * Supports element type definition, length boundaries, nullability of elements,
 * and metadata like description and optionality.
 *
 */
export class ArrayType implements DataType {
  private props: ArrayTypeProps;
  readonly [DATATYPE_SYMBOL] = "decoi.Treaty.DataType.Array";

  /**
   * Creates a new ArrayType.
   * @param props - Properties defining this array type.
   */
  constructor(props: ArrayTypeProps) {
    this.props = props;
  }

  /** Returns the type name: `"array"`. */
  type(): string {
    return "array";
  }

  /** Returns the unique identifier of this type. */
  getID(): string {
    return this.props.id;
  }

  /**
   * Returns the element type of this array.
   * Can be a {@link DataType} or a factory function returning one.
   */
  getOf(): DataType | (() => DataType) {
    return this.props.of;
  }

  /** Returns the maximum allowed array length, if defined. */
  getMaxLength(): number | undefined {
    return this.props.maxLength;
  }

  /** Returns the minimum allowed array length, if defined. */
  getMinLength(): number | undefined {
    return this.props.minLength;
  }

  /** Returns whether array elements can be `null`. Defaults to `false`. */
  getIsFieldsNullable(): boolean {
    return this.props.isFieldsNullable ?? false;
  }

  /** Returns the description of this array, if provided. */
  getDescription(): string | undefined {
    return this.props.description;
  }

  /** Returns whether this field is optional. Defaults to `true`. */
  getOptional(): boolean {
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
export const array = (props: ArrayTypeProps): ArrayType => {
  return new ArrayType(props);
};

/**
 * Checks if an object implements the ArrayType.
 * @param obj - Object to check
 * @returns true if object has the DATATYPE_SYMBOL symbol set.
 */
export const isArrayType = (obj: unknown): boolean => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    obj !== undefined &&
    DATATYPE_SYMBOL in obj &&
    (obj as any)[DATATYPE_SYMBOL] === "decoi.Treaty.DataType.Array"
  );
};
