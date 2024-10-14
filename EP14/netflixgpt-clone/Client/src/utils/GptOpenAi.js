import OpenAI from "openai";

const GptOpenAi = new OpenAI({
    apiKey: REACT_APP_OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
});

export default GptOpenAi;
