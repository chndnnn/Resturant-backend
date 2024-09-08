import express from "express";
import router from "./Routers/bookingRouter.js";
import cors from "cors" ;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/resturant/v1/booking',router)


export default app