import express from "express";
import {createBooking,getBookings} from "./../Controllers/bookingController.js"
import { getScore, updateFirstNameAndScore } from "../Controllers/gameController.js";

const router = express.Router()

router.route('/create').post(createBooking);
router.route('/getBooking').post(getBookings);
router.route('/getscore').get(getScore);
router.route('/updatescore').post(updateFirstNameAndScore);



export default router;