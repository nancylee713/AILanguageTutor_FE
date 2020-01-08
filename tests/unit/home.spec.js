import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home Component', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallowMount(Home);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});