const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const requestLogger = (request, response, next) => {
    console.log('Method:  ', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next() // next yields control to the next middleware
  }
app.use(requestLogger)

app.use(express.static('public'))

PORT = (process.env.PORT || 3000)
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
