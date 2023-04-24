import { Configuration, OpenAIApi } from "openai";

const configuraion = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuraion);

export default openai;
