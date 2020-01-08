import { shallowMount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';

describe('NavBar Component', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallowMount(NavBar);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});