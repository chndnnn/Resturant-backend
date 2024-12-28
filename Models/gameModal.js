import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be of at least 3 Characters."],
        maxLength: [30, "First name cannot exceed 30 Characters."],
      },
      score: {
        type: Number,
        required: true
      }
    })

    const games = mongoose.model('games',gameSchema);

    export default games ;