const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./modelRoute/userRoute");
const authRoute = require("./modelRoute/auth");
const productRoute = require("./modelRoute/productRoute");
const cartRoute = require("./modelRoute/cartRoute");
const orderRoute = require("./modelRoute/orderRoute");
// const stripeRoute = require("./modelRoute/stripeRoute");
// const cors = require("cors");
const app = express();
// const { connectdb } = require("./db");
const connectdb = require("./db");
const dotenv = require("dotenv").config();
const port = 3000;
// dotenv.config();
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("dataBase Conected"))
//   .catch((error) => console.log(error));
// connectdb();
// app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || port, () => {
  console.log("Server is Running on port 3000!");
  console.log(`http://localhost:${port}`);
});
