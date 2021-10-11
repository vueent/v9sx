import { trimStart, trimStartRegex } from '@/index';

test('TrimEnd modifier', () => {
  expect(trimStart('  \t   hello, world!   \t ')).toBe('hello, world!   \t ');
  expect('  \t   hello, world!   \t '.replace(trimStartRegex, '')).toBe('hello, world!   \t ');
});
