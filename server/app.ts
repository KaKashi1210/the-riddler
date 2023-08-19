import express from 'express'
import dotenv from 'dotenv'
import healthcheckRouter from './controllers/healthcheck'

dotenv.config()

const app = express()

app.use(express.json())
app.use('/check',healthcheckRouter)

export default app
