// Take in user input in the frontend using input fields. Edit this to handle chatGPT in the backend. Credit to chatGPT.

import { config } from "dotenv"
config()

import readline from "readline"

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log(openai.apiKey)

console.log('OPEN_AI_API_KEY >> ', process.env.OPENAI_API_KEY)
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

userInterface.prompt()
userInterface.on("line", async input => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  })
  console.log(response.choices[0].message)
  userInterface.prompt()
})

