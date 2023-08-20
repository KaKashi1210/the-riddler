import express from 'express'
const healthcheckRouter = express.Router()

healthcheckRouter.get('/' , (request , response) => {
    response.status(200).json(' hota hain')
})


export default healthcheckRouter
