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

let count = 0
const log = path.join(process.env.DB_DIR, 'ping.txt')

app.get('/ping', (req, res) => {
	count++
	fs.writeFile(log, `${count}`,(err) => {
		if(err)
			console.error(err)
	})
	res.status(200).send(`${count}`)
})

PORT = (process.env.PORT || 3000)
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
