import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT
const exampleRouter =  require('./controllers/example.ts')

app.use(express.json())
app.use('/api/example',exampleRouter)

app.get('/', (req, res) => {
  res.send('Express + Typescript Server')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
