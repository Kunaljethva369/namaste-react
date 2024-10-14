import OpenAI from "openai";

const GptOpenAi = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
});

export default GptOpenAi;
