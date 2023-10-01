import express from 'express';
import cors from 'cors';
import http from 'http'; 
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';




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




