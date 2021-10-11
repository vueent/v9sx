import { spaceRegex } from './space-regex';

/**
 * Removes space characters inside a value.
 *
 * @param value - input value
 * @returns - result
 */
export function compact(value: string): string {
  return value.replace(spaceRegex, '');
}
