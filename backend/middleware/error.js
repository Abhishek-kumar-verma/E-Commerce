const Errorhandler = require('../utils/ErrorHandler');

module.exports = (err, req, res,next) =>{
    err.statusCode = err.statusCode || 500 ;
    err.message = err.message || "Internal Server error";

    // wrong mongodb id error
    if( err.name === 'CastError'){
        const message = `Resource not found with this id. invalid ${err.path}`;
        err = new Errorhandler(message,400);
    }
    
    // Duplicate key error
    if( err.code === 11000 ){
        const message = `Duplicate key ${Object.keys(err.keyValue) } Entered`;
        err = new Errorhandler(message ,400);
    }

    // wrong jwt error
    if( err.name === 'JsonWebTokenError'){
        const message = `Your url is invalid Please try again later`;
        err = new Errorhandler(message,400);
    }

    // jwt expired
    if( err.name === 'TokenExpiredError'){
        const message = 'Your Url is expired please try again later';
        err = new Errorhandler(message,400);
    }

    res.status(err.statusCode).json({
        sucess:false,
        message:err.message
    })
}