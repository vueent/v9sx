import { trim } from '@/index';

test('Trim modifier', () => {
  expect(trim(' \t hello, world!   \t')).toBe('hello, world!');
  expect(trim('hello, world!')).toBe('hello, world!');
});
