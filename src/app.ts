import express from "express";
import router from "./routes";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api",router) 
app.get("/login",)


export default app;
