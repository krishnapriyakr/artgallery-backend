require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Route/router')
require('./DBconnection/Connection')

const artServer = express()
artServer.use(cors())
artServer.use(express.json())
artServer.use(router)
artServer.use('/uploads',express.static('./uploads'))

const PORT = 4000 || process.env.PORT

artServer.listen(PORT, () => {
    console.log(`Art-gallery started at port ${PORT}..and waiting for the client request`);
})

artServer.get('/', (req, res) => {
    res.send(`<h1> Art-gallery server running on port and waiting for client request....</h1> `)
    
})