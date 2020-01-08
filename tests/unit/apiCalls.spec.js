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

describe('Review Grammar', () => {
  const mockResponse = {
    "status": true,
    "corrected": "This is a sentence with an error of the multiple variety.",
    "grammarScore": 0.0,
    "rulesApplied": [
        {
            "transformations": [
                {
                    "ruleId": "1.0.16",
                    "message": "This phrase appears to be misspelled or misused.",
                    "confidence": 1.0,
                    "tokensAdded": [
                        {
                            "id": 13,
                            "after": " ",
                            "value": "error"
                        }
                    ],
                    "isSuggestion": false,
                    "hasReplacement": true,
                    "tokensAffected": [
                        {
                            "id": 7,
                            "after": " ",
                            "value": "errs"
                        }
                    ],
                    "sentAfterTransform": "This is a sentence with an error of the miltple variety."
                },
                {
                    "ruleId": "1.0.16",
                    "message": "This phrase appears to be misspelled or misused.",
                    "confidence": 1.0,
                    "tokensAdded": [
                        {
                            "id": 14,
                            "after": " ",
                            "value": "multiple"
                        }
                    ],
                    "isSuggestion": false,
                    "hasReplacement": true,
                    "tokensAffected": [
                        {
                            "id": 10,
                            "after": " ",
                            "value": "miltple"
                        }
                    ],
                    "sentAfterTransform": "This is a sentence with an error of the multiple variety."
                }
            ],
            "originalSentence": [
                {
                    "id": 1,
                    "after": " ",
                    "value": "This"
                },
                {
                    "id": 2,
                    "after": " ",
                    "value": "is"
                },
                {
                    "id": 3,
                    "after": " ",
                    "value": "a"
                },
                {
                    "id": 4,
                    "after": " ",
                    "value": "sentence"
                },
                {
                    "id": 5,
                    "after": " ",
                    "value": "with"
                },
                {
                    "id": 6,
                    "after": " ",
                    "value": "an"
                },
                {
                    "id": 7,
                    "after": " ",
                    "value": "errs"
                },
                {
                    "id": 8,
                    "after": " ",
                    "value": "of"
                },
                {
                    "id": 9,
                    "after": " ",
                    "value": "the"
                },
                {
                    "id": 10,
                    "after": " ",
                    "value": "miltple"
                },
                {
                    "id": 11,
                    "after": "",
                    "value": "variety"
                },
                {
                    "id": 12,
                    "after": "",
                    "value": "."
                }
            ],
            "correctedSentence": "This is a sentence with an error of the multiple variety."
        }
    ],
    "offset": [
        {
            "corrections": [
                {
                    "options": [
                        {
                            "corrected": "error ",
                            "appliedRules": [
                                {
                                    "ruleId": "1.0",
                                    "message": "This phrase appears to be misspelled or misused.",
                                    "requestId": 3
                                }
                            ],
                            "isSuggestion": false
                        }
                    ],
                    "affected": "errs ",
                    "offsetInSentence": 27
                },
                {
                    "options": [
                        {
                            "corrected": "multiple ",
                            "appliedRules": [
                                {
                                    "ruleId": "1.0",
                                    "message": "This phrase appears to be misspelled or misused.",
                                    "requestId": 3
                                }
                            ],
                            "isSuggestion": false
                        }
                    ],
                    "affected": "miltple ",
                    "offsetInSentence": 39
                }
            ],
            "sentenceOffset": 0,
            "originalSentence": "This is a sentence with an errs of the miltple variety.",
            "correctedSentence": "This is a sentence with an error of the multiple variety."
        }
    ],
    "summary": {
        "corrections": [
            {
                "type": "Spell Check",
                "count": 2,
                "ruleId": "1.0"
            }
        ],
        "numCorrections": 2
    },
    "id": "5e13acfb83d4de473f45d9b9"
};

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      });
    });
  });

  it('should return a response if the call is ok', () => {
    const response = reviewGrammar('This is a sentence that is getting checked for corrctness.');
    expect(response).resolves().toEqual(mockResponse);
  });

  it('should throw an error if the response is not ok', () => {
    const response = 'There was an error in data analysis.';
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: false });
    });
    expect(checkGrammar('This is a sentence that is getting checked for corrctness.')).resolves().toEqual(response);
  });

  it('should throw an error if there is a problem with the fetch', () => {
    expect(reviewGrammar('This is a sentence that is getting checked for corrctness.')).rejects().toEqual('Error');
  });
});

describe('Get Flashcard', () => {
  
});