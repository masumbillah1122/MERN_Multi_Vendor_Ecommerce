import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import categoryRouter from './routes/categoryRoutes.js'; 
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router
app.use('/api/seed/', seedRouter);
app.use("/api/users/", userRouter);
app.use("/api/category/", categoryRouter);
app.use("/api/products/", productRouter);
app.use("/api/orders/", orderRouter);

//connect with DB.
dotenv.config();
// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => {
//         console.log("Database Connected");
//     }).catch((error) => {
//         console.log(error.message);
//     });


// DB Connnection Here
mongoose
  .connect("mongodb://localhost:27017/mern_mve", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  })
  .then(() => console.log("Datebase connected"))
  .catch((error) => {
    if (error) console.log("Database connection failed");
  });


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});