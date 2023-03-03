import express from "express";
import router from "./routes";
import morgan from "morgan";
import db from "./config/db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.get("/", async (req, res) => {
  console.log(db)
  // console.log("chay toi day");
  // try {
    
  //   const user = await db.User.findUnique({
  //     where: {
  //       username: "admin",
  //     },
  //   });
  // } catch (e) {
  //   console.log('error')
  //   console.log(e)
  // }

  return res.send("aaa");
});

export default app;
