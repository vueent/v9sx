export const floatRegex = /^-?\d+[.,]?\d*$/;

/**
 * Returns `true` if value is a float string.
 *
 * @param value - input value
 * @returns - result
 */
export function float(value: string): boolean {
  return floatRegex.test(value);
}
