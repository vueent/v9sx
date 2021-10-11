import { trimEnd, trimEndRegex } from '@/index';

test('TrimEnd modifier', () => {
  expect(trimEnd('  \t   hello, world!   \t ')).toBe('  \t   hello, world!');
  expect('  \t   hello, world!   \t '.replace(trimEndRegex, '')).toBe('  \t   hello, world!');
});
