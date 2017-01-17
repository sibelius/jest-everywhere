import { shallow } from 'enzyme';
import Incrementor from '../Incrementor';

describe('IncrementorUX', () => {
  it('should increment state when clicked', () => {
    const wrapper = shallow(<Incrementor />);

    // before
    expect(wrapper.state('number')).toBe(0);

    // simulate
    wrapper.find('[onClick]').simulate('click');

    // after
    expect(wrapper.state('number')).toBe(1);
  });
});
