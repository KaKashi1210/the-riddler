import axios from 'axios'
import express, { Request, Response } from 'express'

const riddleRouter = express.Router()
import { riddleApiKey } from '../utils/config'

riddleRouter.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/riddles`,
      {
        headers: {
          'X-Api-Key': riddleApiKey,
        }
      }
    );

    console.log(response.data);
    res.status(200).json({ riddle: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


export default riddleRouter
