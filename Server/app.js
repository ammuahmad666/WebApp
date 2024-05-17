const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');
const PORT= process.env.PORT||5000;



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



