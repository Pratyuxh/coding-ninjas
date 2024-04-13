// Please don't change the pre-written code
// Import the necessary modules here
import fs from "fs";

import winston from "winston";
const fsPromise = fs.promises;

export const logger = winston.createLogger({ 
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: "error.log" })
      ],
    });

// const loggerMiddleware = async (req, res, next) =>{
//   //1. Log Request Body.
//   if(req.url.includes('signin')){
//   const logData=`"level":"error" \n "request URL": ${req.url} \n "error message": ${req.message}}`;
//   logger.info(logData)
//   }
//   next();
// };

// export const logger = winston.createLogger({
//   level:'info',
//   format:winston.format.json(),
//   defaultMeta: {service: 'request-logging'},
//   transports:[
//       new winston.transports.File({filename:'error.log'})
//   ]
// });

// export default loggerMiddleware;