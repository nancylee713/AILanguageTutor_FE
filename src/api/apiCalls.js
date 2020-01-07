export const getQuestions = async () => {

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

export const getFlashCard = async (vocabWord) => {
  const url = `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${vocabWord}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'lingua-robot.p.rapidapi.com',
      'x-rapidapi-key': '5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Could not retrieve thi flashcard.');
    }
    const data = response.json();
    console.log(data);
  } catch (error){
    throw new Error(error);
  }
}

export const textToSpeech = async (userInput) => {
  // Working on google authorization to use the text to speech api

  
  // body: {
  //   "audioConfig": {
  //     "audioEncoding": "MP3",
  //     "pitch": 0,
  //     "speakingRate": 1,
  //   },
  //   "input": {
  //     "text": userInput,
  //   },
  //   "voice": {
  //     "languageCode": "en-US",
  //     "name": "en-US-Wavenet-D",
  //   }
  // }
};
