import express from "express";
import {createBooking,getBookings} from "./../Controllers/bookingController.js"

const router = express.Router()

router.route('/create').post(createBooking);
router.route('/getBooking').post(getBookings);

export default router;