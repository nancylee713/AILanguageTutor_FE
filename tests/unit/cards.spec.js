import { shallowMount } from '@vue/test-utils';
import Cards from '@/components/Cards.vue';

describe('Grammar Component', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallowMount(Cards);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});