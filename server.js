import dotenv from "dotenv"
dotenv.config({path:"./config.env"})
import dbConnection from "./DbConnection.js"
import app from "./app.js"

app.listen(process.env.PORT,()=>{
    console.log("server started on host 3000")
    dbConnection();
})