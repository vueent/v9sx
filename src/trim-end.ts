export const trimEndRegex = /[\s\t]*$/;

/**
 * Removes spaces at the beginning of a value.
 *
 * @param value - input value
 * @returns - result
 */
export function trimEnd(value: string): string {
  return value.trimEnd ? value.trimEnd() : value.replace(trimEndRegex, '');
}
