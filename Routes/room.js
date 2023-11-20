const express = require('express')
const router = express.Router()

const {CreateBooking , GetStatusRoom  , Login, CheckReservation, DeleteReservation, UpdateBookingStatus} = require('../CRUD/room')

// call at  http://localhost:8080/api/create (sned ONLY JSON with POST method)
router.post('/create', CreateBooking)

router.post('/room', GetStatusRoom)

router.post('/authen', Login)

router.post('/list', CheckReservation)

router.delete('/delete', DeleteReservation)

router.post('/checkin', UpdateBookingStatus)



module.exports = router