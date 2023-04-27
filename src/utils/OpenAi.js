const { Configuration, OpenAIApi } = require("openai");
const { ENV } = require("../constant/env");

const configuration = new Configuration({
  apiKey: ENV.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const AskGPT = async (question) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    max_tokens: 2048,
    temperature: 1,
  });
  console.log(completion.data.choices[0].text);
  return completion.data.choices[0].text;
};
