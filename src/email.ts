export const emailRegex =
  /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

/**
 * Returns `true` if value is a valid E-mail.
 *
 * @param value - input value
 * @returns - result
 */
export function email(value: string): boolean {
  return value.length > 0 && emailRegex.test(value);
}
