beforeEach(async () => {
  await connect();
  await clearDatabase();
});

it('should not save an empty product', async () => {
  try {
    const sample = {};
    const product = new Product(sample);
    await product.save();
  } catch (err) {
    expect(err).toMatchSnapshot();
  }
});

it('should save a new product', async () => {
  try {
    const sample = {
      name: 'Test Product',
    };
    const product = new Product(sample);
    await product.save();

    expect(prepareMongooseObject(product)).toMatchSnapshot();
  } catch (err) {
    expect(err).toMatchSnapshot();
  }
});
