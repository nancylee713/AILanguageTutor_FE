export const getQuestions = async () => {

};

export const reviewGrammar = async (userSentence) => {
  const url = 'https://api.perfecttense.com/correct';
  const body = { "text": userSentence, "responseType": ["corrected", "grammarScore", "rulesApplied", "offset", "summary"] };
  const options = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': process.env.PERFECT_TENSE_KEY, 
      'AppAuthorization': process.env.PERFECT_TENSE_APP_AUTH },
      body: JSON.stringify(body)
  };
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error('There was an error in data analysis.');
    }
    const correctedSentence = response.json();
    return correctedSentence;
  } catch (error) {
    throw new Error(error);
  }
};

