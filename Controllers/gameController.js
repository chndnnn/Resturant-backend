import games from "../Models/gameModal.js"

export const getScore = async (req,res)=>{

    try{
      let data = await games.find()
        
      res.status(200).json({
        messgae : 'success',
        data
      })
    }catch(err){
      res.status(500).json({
        message : 'fail',
        error : err.message
      })
  
    }
  
  }

  export const updateFirstNameAndScore = async (req, res) => {
    const { oldFirstName, newFirstName, newScore } = req.body; // Assuming these values are provided in the request body.
  
    try {
      const result = await games.updateOne(
        { firstName: oldFirstName }, // Filter based on the current `firstName`
        { $set: { firstName: newFirstName, score: newScore } } // Update both `firstName` and `score`
      );
  
      if (result.matchedCount === 0) {
        return res.status(404).json({
          message: "No record found with the given firstName",
        });
      }
  
      res.status(200).json({
        message: "FirstName and Score updated successfully",
        result,
      });
    } catch (err) {
      res.status(500).json({
        message: "Failed to update firstName and score",
        error: err.message,
      });
    }
  };