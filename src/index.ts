import { getEnvs } from './getEnvs'

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: getEnvs().OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const completion = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt: 'Hello world'
})
console.log(completion.data.choices[0].text)
