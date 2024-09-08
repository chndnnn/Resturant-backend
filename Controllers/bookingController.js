import booking from "../Models/booking.js";

export const createBooking = async (req,res)=>{
try{
  let data = await booking.create(req.body);
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


export const getBookings = async (req,res)=>{

  try{
    let data = await booking.find({
      date:req.body.date,
      $or: [
        {
            $and: [
                { fromtime: { $lte: req.body.fromtime } },
                { totime: { $gt: req.body.fromtime } }
            ]
        },
        {
            $and: [
                { fromtime: { $lt: req.body.totime } },
                { totime: { $gte: req.body.totime } }
            ]
        }
    ]
    })
      
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