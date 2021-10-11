import { toUpperCase } from '@/index';

test('toUpperCase modifier', () => {
  expect(toUpperCase('abcdefгдеёж')).toBe('ABCDEFГДЕЁЖ');
});
