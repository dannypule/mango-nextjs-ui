const express = require('express')
const router = express.Router()
const data = require('../../mock-data/data.json')

router.get('/data', (req, res) => {
  res.status(200).json(data)
})

module.exports = router
