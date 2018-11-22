
const mockData = require('../src/mock/mockData')
const express = require('express')
const app = express()

const mock = require('mockjs')

app.all('*', function(req, res) {
    let url = req.path
    res.header("Access-Control-Allow-Origin", "http://localhost:8888");
    res.send(mock.mock(mockData[url]))
})


app.listen(3000)