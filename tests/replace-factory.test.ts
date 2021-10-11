import { replaceFactory } from '@/index';

test('Replace modifier', () => {
  expect(replaceFactory(/-/g, '')('1-800-555-12-34-1')).toBe('180055512341');
  expect(replaceFactory(/[\s\t()-]+/g, '')('+7 (999) 888 77-66')).toBe('+79998887766');
  expect(replaceFactory(/[\s\t()-]+/g, '-')('+7 (999) 888 77-66')).toBe('+7-999-888-77-66');
});
