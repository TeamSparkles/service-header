// Link.react.test.js
import React from 'react';
import SharingBox from '../client/src/app.jsx';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('SharingBox says SharingBox when rendered', () => {
  const component = renderer.create(
    <SharingBox text='SharingBox' ></SharingBox>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

// const checkbox = shallow(<SharingBox text='SharingBox' />);

// expect(checkbox.text()).toEqual('SharingBox');

});