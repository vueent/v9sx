import { integer } from '@/index';

test('Integer', () => {
  expect(integer('12345')).toBe(true);
  expect(integer('-12345')).toBe(true);
  expect(integer('12345.25')).toBe(false);
  expect(integer('12345,25')).toBe(false);
  expect(integer('12345.')).toBe(false);
  expect(integer('12345,')).toBe(false);
  expect(integer('1 234 567')).toBe(false);
  expect(integer('')).toBe(false);
  expect(integer('-')).toBe(false);
});
