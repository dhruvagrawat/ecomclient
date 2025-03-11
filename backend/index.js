import express from 'express';
import { connectDB } from './database/connectDB.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import productRoutes from './routes/product.route.js';
import cartRoutes from './routes/cart.route.js';
// import orderRoutes from "./routes/order.route.js"
import cookieParser from 'cookie-parser';
import razorpayRoutes from './routes/razorpay.route.js';

dotenv.config(); 

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
// app.use("/api/order", orderRoutes);
app.use("/api/razorpay",razorpayRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`http://localhost:${PORT}`);
});

//yashbagga