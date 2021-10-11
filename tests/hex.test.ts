import { hex } from '@/index';

test('HEX', () => {
  expect(hex('')).toBe(false);
  expect(hex('abcdef1234567890')).toBe(true);
  expect(hex('-abcdef1234567890')).toBe(false);
  expect(hex('ABCDEF1234567890abcdef')).toBe(false);
  expect(hex('-ABCDEF1234567890abcdef')).toBe(false);
  expect(hex('a b c d e f')).toBe(false);
});
