import { ruPostalCode } from '@/index';

test('Russion postal code', () => {
  expect(ruPostalCode('123456')).toBe(true);
  expect(ruPostalCode('123-456')).toBe(false);
  expect(ruPostalCode('1234567')).toBe(false);
  expect(ruPostalCode('')).toBe(false);
  expect(ruPostalCode(' ')).toBe(false);
});
