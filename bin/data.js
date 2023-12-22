const appControllerContent = `
export const getData = (res, req) => {
    res.json("hello world");
}
`
const appRouterContent = `
import { getData } from "../Controllers/AppController"

export const appRouter = (app) => {
    app.route("/")
    .get(getData)
}
`
const appModelContent = `
import mongoose from "mongoose";

const Schema = mongoose.Schema
export const ProductSchema = new Schema({
    email: string,
    password: string
})
`

const dbFileContent = `
// db.js
import mongoose from 'mongoose';
require("dotenv").config()

mongoose.Promise = global.Promise;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

export default connectDB;
`

const serverFileContent = `
import express from 'express';
import connectDB from './db';
import { appRouter } from './Routes/Routes';

const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

appRouter(app);

app.listen(4000, () => {
    console.log("the site running on PORT: 4000");
});
`

/*const packageJsonFileContent = `
{
    "name": "myProject",
    "description": "",
    "version": "1.0.0",
    "main": "server.js",
    "scripts": {
        "start": "nodemon --exec babel-node server.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
`
*/
const dotenvFileContent = `
MONGODB_URI=
`

const babelFileContent = `
{
    "presets": [
      "@babel/preset-env"
    ]
}
`

module.exports = {
    appControllerContent,
    appRouterContent, 
    babelFileContent,
    appModelContent,
    dotenvFileContent,
    serverFileContent,
    dbFileContent
  };