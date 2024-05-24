const express = require('express')
const path = require('path')
require('dotenv').config()

console.log('hien thi thong tin bien moi truong', process.env)

const app = express()
const port = process.env.PORT || 8888

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/abc', (req, res) => {
    res.render('trangweb.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})