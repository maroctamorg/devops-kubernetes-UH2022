const express = require('express')
const https = require('https')
const fs = require('fs')
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

app.use(express.static("public"))

const updateImg = (url) => {
	const file = fs.createWriteStream("public/db/img.jpg");
	const request = https.get(url, (res) => {
		const code = res.statusCode ? res.statusCode : 0
		if( code >= 400) {
			console.error(res.statusMessage ? res.statusMessage : "Unable to download image...\n")
			return
		}

		if(code > 300 && !!res.headers.location) {
			updateImg(res.headers.location)
			return
		}

		res.pipe(file);

		// after download completed close filestream
		file.on("finish", () => {
		    file.close();
		    console.log("Download Completed");
		});
	});
}

PORT = (process.env.PORT || 3000)
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
	updateImg("https://picsum.photos/1200")
	setInterval(() => {updateImg("https://picsum.photos/1200")}, 86400000)
})
