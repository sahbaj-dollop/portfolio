import express from "express";
import routes from "./routes/routes.js";
import path from 'path';
import connectDB from "./db/connectDB.js";
const app = express();
const port = process.env.PORT || 8000;
connectDB();

//setup for static files
const __dirname = path.resolve(); // for ES module (important)
app.use(express.static(path.join(__dirname, "public"))); 

//ejs setup
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
//create routes
// app.get('/',(req,res)=>{
//     res.send("welcome to our website");
// })
app.use("/", routes);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
