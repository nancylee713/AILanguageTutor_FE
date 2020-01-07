import { shallowMount } from '@vue/test-utils';
import Grammar from '@/components/Grammar.vue';

describe('Grammar Component', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallowMount(Grammar)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});