/**
 * Returns a modifier function that replaces a substring.
 *
 * @param pattern - search pattern
 * @param replacement - replacement string
 * @returns - result
 */
export function replaceFactory(pattern: string | RegExp, replacement: string): (value: string) => string {
  return function (value: string): string {
    return value.replace(pattern, replacement);
  };
}
