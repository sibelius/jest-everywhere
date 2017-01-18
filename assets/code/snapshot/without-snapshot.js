import { shallow } from 'enzyme';
import Incrementor from '../Incrementor'

describe('IncrementorUI', () => {
  it('has the expected UI output', () => {
    const wrapper = shallow(<Incrementor  />);

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').children().length).toBe(3);

    expect(wrapper.find('div h1').length).toBe(1);
    expect(wrapper.find('div h1').text()).toBe('The Great Incrementor!');

    expect(wrapper.find('div button').length).toBe(1);
    expect(wrapper.find('div button').prop('onClick')).toBeDefined();
    expect(wrapper.find('div button').text()).toBe('Increment!');

    expect(wrapper.find('div span.number').length).toBe(1);
    expect(wrapper.find('div span.number').text()).toBe('0');
  });
});
