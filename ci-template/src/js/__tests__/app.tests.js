import getBuffer from '../app';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('ArrayBufferConverter is ok', () => {
  const arg = new ArrayBufferConverter();
  arg.load(getBuffer());
  expect(arg.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
