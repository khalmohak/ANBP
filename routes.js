const fs = require('fs');


const reqHandler = (req,res)=>{
    const url = req.url;
    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write(`<html><head><title>NodeJS</title></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body></html>`);
        return res.end();
    }
    if(url==='/message'){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        } );
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFileSync('message.txt',parsedBody);
        });
        
        res.statusCode=302;
        res.setHeader('localhost','/');
        return res.end();
    }
    
};
  module.exports = reqHandler;