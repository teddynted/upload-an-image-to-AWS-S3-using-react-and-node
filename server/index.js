const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()
const server = express()

const port = process.env.PORT
const imageUploadRoute = require('./routes/upload')
const fileUpload = require('express-fileupload')

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(fileUpload())
server.use(cors())
server.use(express.static(path.join(__dirname, '../client/public')))
  
server.use('/api/v1/upload', imageUploadRoute)
  
http.createServer(server).listen(port, () => {
    console.log(`Express server listening on port ${port}`);
})