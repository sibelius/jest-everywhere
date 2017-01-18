import React from 'react';
import Presentation from '../index';
import renderer from 'react-test-renderer';

it('should render presentation', () => {
  const component = renderer.create(<Presentation/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
