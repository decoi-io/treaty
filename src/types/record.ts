import {
  DATATYPE_SYMBOL,
  RECORD_TYPE_SYMBOL_VALUE,
} from "../constants/symbols";
import { type DataType } from "./";

/**
 * Props used to configure a {@link RecordType}.
 */
type RecordTypeProps = {
  /** Unique identifier for this record type. */
  id: string;

  /**
   * A mapping of field names to their corresponding types.
   * Each field may be a {@link DataType} or a lazy factory function returning one.
   */
  fields: Record<string, DataType | (() => DataType)>;

  /** Human-readable description of this record. */
  description?: string;

  /** Whether this record field is optional. Defaults to `true`. */
  optional?: boolean;
};

/**
 * Represents a structured record type with named fields.
 *
 * Each field in the record is associated with a {@link DataType}, allowing
 * composition of complex nested structures.
 *
 */
export class RecordType implements DataType {
  private props: RecordTypeProps;
  readonly [DATATYPE_SYMBOL] = RECORD_TYPE_SYMBOL_VALUE;

  /**
   * Creates a new RecordType.
   * @param props - Properties defining this record type.
   */
  constructor(props: RecordTypeProps) {
    this.props = props;
  }

  /** Returns the type name: `"record"`. */
  type(): string {
    return "record";
  }

  /** Returns the unique identifier of this type. */
  getID(): string {
    return this.props.id;
  }

  /** Returns the fields defined in this record. */
  getFields(): Record<string, DataType | (() => DataType)> {
    return this.props.fields;
  }

  /** Returns the description of this record, if provided. */
  getDescription(): string | undefined {
    return this.props.description;
  }

  /** Returns whether this field is optional. Defaults to `true`. */
  getOptional(): boolean {
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
export const record = (props: RecordTypeProps): RecordType => {
  return new RecordType(props);
};

/**
 * Checks if an object implements the RecordType.
 * @param obj - Object to check
 * @returns true if object has the DATATYPE_SYMBOL symbol set.
 */
export const isRecordType = (obj: unknown): boolean => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    obj !== undefined &&
    DATATYPE_SYMBOL in obj &&
    (obj as any)[DATATYPE_SYMBOL] === RECORD_TYPE_SYMBOL_VALUE
  );
};
