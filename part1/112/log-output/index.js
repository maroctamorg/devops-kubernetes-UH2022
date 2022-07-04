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
const log = path.join(process.env.DB_DIR, "ping.txt")

app.get('/logs', (req, res) => {
	fs.readFile( log, 'utf-8', (err, count) => {
		if(err) {
			console.error(err)
			res.status(500).send()
			return
		}
		let date = new Date()
		stats = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${string} - Ping / Pongs: ${count}`
		console.log(stats)
		res.status(200).json({'status': stats})
	})
})

PORT = (process.env.PORT || 3000)
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
