/**
 * String type builder and inferred type.
 * Used for plain text fields.
 */
export { string, StringType } from "./string";
/**
 * Number type builder and inferred type.
 * Used for integer or floating-point fields.
 */
export { number, NumberType } from "./number";
/**
 * Boolean type builder and inferred type.
 * Used for true/false values.
 */
export { boolean, BooleanType } from "./boolean";
/**
 * Record type builder and inferred type.
 * Represents an object with named fields.
 */
export { record, RecordType } from "./record";
/**
 * Array type builder and inferred type.
 * Represents a list of values of the same type.
 */
export { array, ArrayType } from "./array";
/**
 * Optional wrapper and inferred type.
 * Makes any type nullable or undefined.
 */
export { optional, OptionalType } from "./optional";
