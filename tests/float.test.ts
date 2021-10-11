import { float } from '@/index';

test('Float', () => {
  expect(float('123456')).toBe(true);
  expect(float('123456.00')).toBe(true);
  expect(float('-123456.00')).toBe(true);
  expect(float('123456,00')).toBe(true);
  expect(float('-123456,00')).toBe(true);
  expect(float('123456,')).toBe(true);
  expect(float('-123456,')).toBe(true);
  expect(float('123456.')).toBe(true);
  expect(float('-123456.')).toBe(true);
  expect(float('')).toBe(false);
  expect(float('-')).toBe(false);
});
