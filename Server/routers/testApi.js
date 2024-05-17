const express=require('express');
const router=express.Router();

router.get('/testApi',(req,res,next)=>{
    res.send("API test successful");
})
module.exports=router;