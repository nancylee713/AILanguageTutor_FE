import { getQuestions, reviewGrammar, getFlashCard } from '../../src/api/apiCalls';

describe('Get Questions', () => {
  const mockResponse = [
    {
      "created_date": "Mon, 06 Jan 2020 14:52:54 GMT",
      "id": 1,
      "level": "beginner",
      "text": "Have you make dinner yet?",
      "updated_date": "Mon, 06 Jan 2020 14:52:54 GMT"
    },
    {
      "created_date": "Mon, 06 Jan 2020 15:07:57 GMT",
      "id": 2,
      "level": "beginner",
      "text": "How many biscuits is there in the tin?",
      "updated_date": "Mon, 06 Jan 2020 15:07:57 GMT"
    },
    {
      "created_date": "Mon, 06 Jan 2020 15:07:57 GMT",
      "id": 3,
      "level": "beginner",
      "text": "A car is fast than a bicycle.",
      "updated_date": "Mon, 06 Jan 2020 15:07:57 GMT"
    },
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      });
    });
  });

  it('should return all of the questions if the response is ok', () => {
    const result = getQuestions();
    expect(result).resolves().toEqual(mockResponse);
  });

  it('should throw an error if the response is not ok', () => {
    const response = 'There was an error loading grammar questions.';
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: false });
    });
    expect(getQuestions()).resolves().toEqual(response);
  });

  it('should throw an error if there is a problem with the fetch', () => {
    expect(getQuestion()).rejects().toEqual('Error')
  });
});