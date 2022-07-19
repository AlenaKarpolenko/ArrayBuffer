import Validator from '../Validator';

test('validate 0-9 a-z _ -', () => {
  const username = 'support-1_netology';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test.each([
  ['support%netology'],
  ['support!netology'],
  ['support;netology'],
  ['support.netology']])(
  ('spec`s should be falsy'),
  (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  },
);

test('validate 3 digits', () => {
  const username = 'support-123_netology';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('4 digits should be falsy', () => {
  const username = 'support-1234_netology';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test.each([
  ['1support-1_netology'],
  ['support-1_netology2'],
  ['-support_netology'],
  ['support-1_netology-'],
  ['_support-1_netology'],
  ['support-1_netology_']])(
  ('no specs or digits at begin/start'),
  (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  },
);