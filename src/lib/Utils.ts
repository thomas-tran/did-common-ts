import * as base64 from "@juanelas/base64";

export function checkArgument(condition: boolean, errorMessage: string): void {
  if (!condition) throw new Error(errorMessage);
}

export function checkEmpty(value: string, errorMessage: string): void {
  checkArgument(value != null && value !== "", errorMessage);
}

export function checkNotNull(value: unknown, errorMessage: string): void {
  if (value === null) {
    throw new Error(errorMessage);
  }
}

export function isEmpty(value: string): boolean {
  return !value || value == null;
}

export function base64Decode(input: string): string | Uint8Array {
  return base64.decode(input);
}

export function base64Encode(input: string | Uint8Array): string {
  return base64.encode(input);
}

export function hashCodeFromString(input: string): number {
  const HASH_PRIME = 31;
  const HASH_MASK = 0xffffffff;
  let result = HASH_PRIME;

  for (let i = 0; i < input.length; i++) {
    result = (result * HASH_PRIME + input.charCodeAt(i)) >>> 0;
  }

  return result & HASH_MASK;
}
export function hashCode(input: number | string | boolean): number {
  const type = typeof input;

  return hashCodeFromString(input.toString()) + hashCodeFromString(type);
}
