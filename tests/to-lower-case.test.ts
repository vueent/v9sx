import { toLowerCase } from '@/index';

test('toLowerCase modifier', () => {
  expect(toLowerCase('ABCDEFГДЕЁЖ')).toBe('abcdefгдеёж');
});
