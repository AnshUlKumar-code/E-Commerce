import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';




const app=express();
const port=process.env.port || 4000
connectDB();
connectCloudinary();



//middleware

app.use(express.json());
app.use(cors());



//API ENDPOINTS
app.use('/api/user',userRouter);
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use('/api/order',orderRouter)
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.get("/", (req, res) => {
  res.send("E-Commerce Backend is running!");
})


app.listen(port,()=>{
    console.log("port listing at port 4000");    
})




