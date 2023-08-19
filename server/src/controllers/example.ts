const exampleRouter = require('express').Router()

exampleRouter.get('/' , (request , response) => {
    response.json('Hello there from example Router')
})

module.exports = exampleRouter
