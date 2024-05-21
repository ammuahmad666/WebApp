const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');
const PORT= 5000||process.env.PORT;

var os = require('os');


console.log(os.userInfo());
console.log(os.loadavg());
console.log(os.hostname());
console.log(os.getPriority());
//Static files
app.use(express.static('./public'));
//Set view engine
app.set("view engine","ejs");


//Routers
app.use('/',require('./routers/testApi'));
app.use('/',require('./routers/login'));




app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});



