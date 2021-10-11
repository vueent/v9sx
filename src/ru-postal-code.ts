export const ruPostalCodeRegex = /^\d{6}$/;

/**
 * Returns `true` if value is a Russian postal code.
 *
 * @param value - input value
 * @returns - result
 */
export function ruPostalCode(value: string): boolean {
  return ruPostalCodeRegex.test(value);
}
