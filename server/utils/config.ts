import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT
const riddleApiKey = process.env.RIDDLE_API_KEY

export { port, riddleApiKey }
