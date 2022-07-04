const express = require('express')
const fs = require('fs')
const path = require('path')
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
let stats = ""

app.get('/status', (req, res) => {
	res.status(200).json({'status': stats})
})

PORT = (process.env.PORT || 3000)
file = path.join('/', process.env.DB_DIR, "status.txt");
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
	setInterval(() => {
		try {
			const timestamp = fs.readFileSync(file, 'utf-8').split(/\r?\n/);
			stats = `${timestamp[timestamp.length-2]}: ${string}`
			console.log(stats)
		} catch(error) {
			console.error(error);
		}
	}, 5000)
})
