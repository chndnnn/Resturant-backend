import mongoose from "mongoose";

const dbConnection = ()=>(mongoose.connect(process.env.CONN_STRING).then((conn)=>{
    console.log("Db connection successfull!!")
}).catch((err)=>{
    console.log("Cannot connect to Db")
})
)

export default dbConnection;