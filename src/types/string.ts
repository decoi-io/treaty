import {
  DATATYPE_SYMBOL,
  STRING_TYPE_SYMBOL_VALUE,
} from "../constants/symbols";
import { type DataType } from "./";

/**
 * Configuration options for the `string` type.
 */
type StringTypeProps = {
  /** Unique identifier for the type (used for references). */
  id: string;

  /** If provided, the string must exactly match this value. */
  exact?: string;

  /** Maximum allowed length of the string. */
  maxLength?: number;

  /** Minimum allowed length of the string. */
  minLength?: number;

  /** Regular expression pattern the string must match. */
  pattern?: string;

  /** Human-readable description of the field. */
  description?: string;

  /** Whether the string is optional (nullable). Defaults to `true` if not set. */
  optional?: boolean;
};

/**
 * Represents a string data type in a Treaty contract.
 *
 * Implements the {@link DataType} interface and provides
 * introspection methods for string constraints.
 */
export class StringType implements DataType {
  private props: StringTypeProps;

  readonly [DATATYPE_SYMBOL] = STRING_TYPE_SYMBOL_VALUE;

  constructor(props: StringTypeProps) {
    this.props = props;
  }

  /** Returns `"string"`. */
  type(): string {
    return "string";
  }

  /** Returns the unique identifier for this type. */
  getID(): string {
    return this.props.id;
  }

  /** Returns the exact required string value, if set. */
  getExact(): string | undefined {
    return this.props.exact;
  }

  /** Returns the maximum allowed string length, if set. */
  getMaxLength(): number | undefined {
    return this.props.maxLength;
  }

  /** Returns the minimum allowed string length, if set. */
  getMinLength(): number | undefined {
    return this.props.minLength;
  }

  /** Returns the regex pattern that this string must match, if set. */
  getPattern(): string | undefined {
    return this.props.pattern;
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
export const string = (props: StringTypeProps): StringType => {
  return new StringType(props);
};

/**
 * Checks if an object implements the StringType.
 * @param obj - Object to check
 * @returns true if object has the DATATYPE_SYMBOL symbol set.
 */
export const isStringType = (obj: unknown): boolean => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    obj !== undefined &&
    DATATYPE_SYMBOL in obj &&
    (obj as any)[DATATYPE_SYMBOL] === STRING_TYPE_SYMBOL_VALUE
  );
};
