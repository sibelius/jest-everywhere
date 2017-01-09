it('should return the current user when user is logged in', async () => {
  const user = new User({
    name: 'user',
    email: 'user@example.com',
  });
  await user.save();

  const query = `
    query Q {
      viewer {
        me {
          name
          email         
        }
      }
    }
  `;

  const rootValue = {};
  const context = { user };
  const result = await graphql(schema, query, rootValue, context);

  expect(result).toMatchSnapshot();
});
