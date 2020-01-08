import { shallowMount } from '@vue/test-utils';
import FlashCards from '@/views/FlashCards.vue';

describe('FlashCards Component', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallowMount(FlashCards);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});