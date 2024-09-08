import mongoose from "mongoose";
import validator from "validator";

const bookingSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be of at least 3 Characters."],
        maxLength: [30, "First name cannot exceed 30 Characters."],
      },
      lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must be of at least 3 Characters."],
        maxLength: [30, "Last name cannot exceed 30 Characters."],
      },
      date: {
        type: String,
        required: true,
      },
      fromtime: {
        type: Number,
        required: true,
      },
      totime:{
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
      },
      phone: {
        type: String,
        minLength: [10, "Phone number must contain 10 Digits."],
        maxLength: [10, "Phone number must contain 10 Digits."],
      },
      table:{
        type:[Number],
        required : true,
        validate: {
          validator: function(array) {
              return array && array.length > 0;
          },
          message: 'The table array must not be empty'
      }
      }
});

const booking = mongoose.model('bookings',bookingSchema);

export default booking ;