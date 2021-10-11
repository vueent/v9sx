export const integerRegex = /^-?\d+$/;

/**
 * Returns `true` if value is an integer string.
 *
 * @param value - input value
 * @returns - result
 */
export function integer(value: string): boolean {
  return integerRegex.test(value);
}
