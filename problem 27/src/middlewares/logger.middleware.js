import fs from "fs";
import { loadavg } from "os";

const fsPromise = fs.promises;

async function log(logData){
    try{
        logData = `\n ${new Date().toString()} - ${logData}`;
        await fsPromise.writeFile('log.txt',logData);
    }catch(err){
        console.log(err);
    }
}

export const loggerMiddleware = async (req, res, next) => {
  if(req.url.includes('user')){
    const logData=`\n req URL: ${req.url} \n reqBody: ${JSON.stringify(req.body)}`;
    await log(logData);}
    next();
};
export default loggerMiddleware;