import dotenv from "dotenv";
import { dbConnect } from "./DB/dbConnection.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

// DB connection

const port = process.env.PORT || 4000;
dbConnect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at port : ${port}`);
        });
    })
    .catch((err) => {
        console.log("MONGODB connection Error", err);
    });
