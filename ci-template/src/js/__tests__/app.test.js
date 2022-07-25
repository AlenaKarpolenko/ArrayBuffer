import ErrorRepository from '../app';

const myErrors = new ErrorRepository(
  { code: 1000, description: 'Внутренняя ошибка сервера' },
  { code: 4040, description: 'Доступ запрещен' },
  { code: 3333, description: 'Неверный запрос' },
);

test('should translate known error correctly', () => {
  const recieved = myErrors.translate(4040);
  const expected = 'Доступ запрещен';

  expect(recieved).toBe(expected);
});

test('should return unknown error message', () => {
  const recieved = myErrors.translate(444);
  const expected = 'Unknown error';

  expect(recieved).toBe(expected);
});
