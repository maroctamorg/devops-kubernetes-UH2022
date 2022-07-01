const express = require('express')
const crypto = require('crypto')
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

const string = crypto.randomBytes(20).toString('hex')
let timestamp = ""

app.get('/status', (req, res) => {
	res.status(200).json({'status': stats})
})

PORT = (process.env.PORT || 3000)
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
	setInterval(() => {
		let date = new Date()
		stats = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${string}`
		console.log(stats)
	}, 5000)
})
