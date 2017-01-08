import * as user from '../user';

it('works with promises', () => {
  return user.getUserName(5)
    .then(name => expect(name).toEqual('Paul'));
});

it('works with async await', async () => {
  const name = await user.getUserName(5);
  expect(name).toEqual('Paul')
});
