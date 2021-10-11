export const hexRegex = /^[\da-f]+$/;

/**
 * Returns `true` if value is a HEX string.
 *
 * @param value - input value
 * @returns - result
 */
export function hex(value: string): boolean {
  return hexRegex.test(value);
}
