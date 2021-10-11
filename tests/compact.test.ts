import { compact } from '@/index';

test('Compact modifier', () => {
  expect(compact('1 \t 234 567')).toBe('1234567');
  expect(compact('1234567')).toBe('1234567');
});
