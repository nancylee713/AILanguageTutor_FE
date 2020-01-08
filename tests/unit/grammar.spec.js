import { shallowMount } from '@vue/test-utils';
import Grammar from '@/components/Grammar.vue';

describe('Grammar Component', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallowMount(Grammar);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should move to the next question when the next button is clicked', () => {
    expect(wrapper.currentQuestion).toBe("Have you make dinner yet?");
    wrapper.nextQuestion();
    expect(wrapper.currentQuestion).toBe("How many biscuits is there in the tin?");
  });
});