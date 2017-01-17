import 'react-native';
import React from 'react';
import Relay from 'react-relay';
import App from '../app';
import RelayStore from '../RelayStore';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

RelayStore.reset(
  new Relay.DefaultNetworkLayer('http://localhost:5000/graphql')
);

const delay = (value) => new Promise(resolve => setTimeout(() => resolve(), value));

it('renders correctly', async () => {
  const tree = renderer.create(
    <App />
  );

  await delay(3000);

  expect(tree.toJSON()).toMatchSnapshot();
});
