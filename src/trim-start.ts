export const trimStartRegex = /^[\s\t]*/;

/**
 * Removes spaces at the end of a value.
 *
 * @param value - input value
 * @returns - result
 */
export function trimStart(value: string): string {
  return value.trimStart ? value.trimStart() : value.replace(trimStartRegex, '');
}
