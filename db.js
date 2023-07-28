const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// async function connectdb() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", {
//       useNewUrlParser: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Could not connect to MongoDB", error);
//     throw error;
//   }
// }
// async function connectdb() {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       dbName: "eshop-database",
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Could not connect to MongoDB", error);
//     throw error;
//   }
// }
// // })
// // .then(() => {
// //   console.log("Database connection is ready");
// // })
// // .catch(() => {
// //   console.log(err);
// // });

// // app.listen(3000, () => {
// //   console.log("Server is Runinning in http://localhost:3000");
// // });
mongoose
  .connect(process.env.MONGO_URL)
  //   "mongodb+srv://alinour:123456789AlI@cluster0.yu5pfv4.mongodb.net/ecommerce?retryWrites=true&w=majority"
  // )
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch(() => {
    console.log("error");
  });
// module.exports = { connectdb };
// "process.env.MONGO_URL"
