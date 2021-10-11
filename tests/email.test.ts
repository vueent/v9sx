import { email } from '@/email';

test('Email', () => {
  expect(email('test@example.com')).toBe(true);
  expect(email('')).toBe(false);
  expect(email('localhost')).toBe(false);
  expect(email('info@local')).toBe(false);
  expect(email('my@192.168.1.1')).toBe(false);
  expect(email('test.example.r')).toBe(false);
});
