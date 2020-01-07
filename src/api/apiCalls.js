export const getQuestions = async () => {
  const url = process.env.VUE_APP_GRAMMAR_QUESTIONS_ROUTE;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('There was an error loading grammar questions.');
    }
    const questions = response.json();
    return questions;
  } catch (error) {
    throw new Error(error);
  }
};

export const reviewGrammar = async (userSentence) => {
  const url = process.env.VUE_APP_PERFECT_TENSE_ROUTE;
  const body = { text: userSentence, responseType: ['corrected', 'grammarScore', 'rulesApplied', 'offset', 'summary'] };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.VUE_APP_PERFECT_TENSE_KEY,
      AppAuthorization: process.env.VUE_APP_PERFECT_TENSE_APP_AUTH,
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('There was an error in data analysis.');
    }
    const correctedSentence = response.json();
    return correctedSentence;
  } catch (error) {
    throw new Error(error);
  }
};
