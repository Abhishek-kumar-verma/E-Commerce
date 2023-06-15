const app = require("./app");
const connectDatabase = require('./db/database');
// handle uncaught Exception
process.on("uncaughtException", (err) =>{
    console.log(`Error:${err.message}`);
    console.log(` Shutting down the server for handle uncaught Exception`);
});

// config
if( process.env.NODE_ENV !== 'PRODUCTION'){
    require('dotenv').config({
        path:"config/.env"
    })
}

// database connect
connectDatabase();

// create server 
const server = app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// unhandles promises rejection

process.on("unhandledRejection", (err)=>{
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandle promises rejection`);

    server.close(()=>{
        process.exit(1);
    });
});