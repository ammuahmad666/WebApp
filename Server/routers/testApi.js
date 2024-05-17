const express=require('express');
const app=express();
const router=express.Router();



router.get('/testApi',(req,res,next)=>{
    res.send("API test successful");
})
module.exports=router;