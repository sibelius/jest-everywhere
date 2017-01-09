import request from 'supertest-as-promised';
import server from '../server';

it('create new user on /register', async () => {
  const res = await request(server.listen())
    .post('/api/v1/register')
    .send({
      name: 'awesome',
      email: 'awesome@gmail.com',
      password: 'awesome',
    });

  expect(res).toMatchSnapshot();
});
