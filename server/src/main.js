const fs = require('fs')
const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const app = express()
const port = process.argv[2] || 4242
const { Sequelize, Model, DataTypes } = require('sequelize')

dotenv.config()

const { DATABASE_HOST: localhost, DATABASE_PORT, DATABASE_USER: user, DATABASE_PASS: password, DATABASE_NAME: databaseName } = process.env
const sequelize = new Sequelize('postgres://'+user+':'+password+'@'+localhost+':'+DATABASE_PORT+'/'+databaseName)


function dbConnect() {

    sequelize
    .authenticate()
    .then(function(err) {
        console.log('>>> Database connected...')
    })
    .catch(err => console.log('Error: ' + err))
}

dbConnect()

app.use(cors())

app.get('/', (req, res) => {
    console.log(`> The server on port ${port} is running`)
    res.send('<h3>ENTER A USERNAME IN THE URL</h3>')
})
app.get('/', (req, res) => {
    res.json({
      hello: 'From SearchGithub API'
    })
})


app.get('/users/:username', (req, res) => {
    let url = `https://api.github.com/users/${req.params.username}`
})

app.listen(port, () => {
    console.log(`✨ Server is listening on port ${port}`)
})

