const express = require('express')
const router = express.Router()

const {createroom } = require('../CRUD/room')

// call at  http://localhost:8080/api/create (sned ONLY JSON with POST method)
router.post('/create', createroom)




module.exports = router