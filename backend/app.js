const express = require('express');
const Errorhandler = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));


//config
if( process.env.NODE_ENV !== 'PRODUCTION'){
    require('dotenv').config({
        path:"config/.env"
    })
}

const user = require('./controller/user');

app.use("/api/v2/user",user);
app.use("/", express.static("uploads"));

// it is for error handler
app.use(Errorhandler);

module.exports = app;