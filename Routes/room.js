const express = require('express')
const router = express.Router()

const {CreateBooking , GetStatusRoom  , Login, CheckReservation, DeleteReservation} = require('../CRUD/room')

// call at  http://localhost:8080/api/create (sned ONLY JSON with POST method)
router.post('/create', CreateBooking)

router.get('/room', GetStatusRoom)

router.post('/authen', Login)

router.get('/list', CheckReservation)

router.delete('/delete', DeleteReservation)

module.exports = router