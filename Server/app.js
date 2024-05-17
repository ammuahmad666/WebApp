const express=require('express');
const app=express();
const PORT= process.env.PORT||5000;

app.use('/',require('./routers/testApi'));
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});

