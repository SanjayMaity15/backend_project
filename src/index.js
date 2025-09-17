import dotenv from "dotenv"
import { dbConnect } from "./DB/dbConnection.js";
dotenv.config({path: "./.env"});

// DB connection 
dbConnect()