import type { DATATYPE_SYMBOL } from "../constants/symbols";

/**
 * Base interface implemented by all Treaty data types.
 *
 * Every type (string, number, record, etc.) conforms to this interface,
 * which provides metadata access and introspection.
 */
export interface DataType {
  /**
   * Returns the name of the type (e.g. `"string"`, `"record"`).
   */
  type(): string;

  /**
   * Returns `true` if the type is optional (nullable), otherwise `false`.
   */
  getOptional(): boolean;

  /**
   * Returns the human-readable description of the type, if provided.
   */
  getDescription(): string | undefined;

  /**
   * Returns the identifier for this type.
   * Useful for referencing types across records and contracts.
   */
  getID(): string;

  readonly [DATATYPE_SYMBOL]: string;
}

/**
 * String type builder and inferred type.
 * Used for plain text fields.
 */
export { string, StringType, isStringType } from "./string";

/**
 * Number type builder and inferred type.
 * Used for integer or floating-point fields.
 */
export { number, NumberType, isNumberType } from "./number";

/**
 * Boolean type builder and inferred type.
 * Used for true/false values.
 */
export { boolean, BooleanType, isBooleanType } from "./boolean";

/**
 * Record type builder and inferred type.
 * Represents an object with named fields.
 */
export { record, RecordType, isRecordType } from "./record";

/**
 * Array type builder and inferred type.
 * Represents a list of values of the same type.
 */
export { array, ArrayType, isArrayType } from "./array";

/**
 * Optional wrapper and inferred type.
 * Makes any type nullable or undefined.
 */
export { optional, OptionalType, isOptionalType } from "./optional";
