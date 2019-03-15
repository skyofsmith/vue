const express = require('express')

const app = express()

app.post('/action.ashx', function (req, res) {
  res.json({status: 200, data: 'ok!!!'})
})

app.listen(8060, 'localhost', function () {
  console.log('app start')
})
