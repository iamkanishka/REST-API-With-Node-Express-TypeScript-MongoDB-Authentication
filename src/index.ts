import express from 'express';
import cors from 'cors';
import http from 'http'; 
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import mongoose  from 'mongoose';
import router from 'router';


require('dotenv').config();

const restAPIApp = express();

restAPIApp.use(cors({
    credentials: true
}));

restAPIApp.use(compression());
restAPIApp.use(cookieParser());
restAPIApp.use(bodyParser.json());

const restAPIAppServer = http.createServer(restAPIApp);

restAPIAppServer.listen(8080, ()=>{
    console.log('Server running on http://locahost:8080/');
    
})

//MongoDB Setup
const MONGO_URL = process.env.MONGO_URL;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error:Error) => console.log(error));

restAPIApp.use(router())
