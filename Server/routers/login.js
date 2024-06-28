const express=require('express');
const registerApi = require('../Controller/User/register_api');
const loginApi=require('../Controller/User/login_api');
const router=express.Router();
var jwt = require('jsonwebtoken');

/**
 * Get /
 * Login page
 */
router.get('/',async (req,res)=>{
    res.render('login');

});
/**
 * Get /
 * Register page
 */
router.get('/register',async(req,res)=>{
    res.render('signup',{error: "None"});

})

/**
 * Post /
 * Register details
 */
router.post('/register',async(req,res)=>{
    

   
    try{
        await registerApi(req);
        const token= jwt.sign({username:req.body.name},'asdasdafasfskfakjshfakfhsafhjashfjaghfh');
        console.log({username: req.body.name,token:token});
        return res.status(200).json({username: req.body.name,token:token});

    }catch(err){
        console.log(err.message);
        return res.status(400).json({error: err.message});
    }
    
})

/**
 * Post /
 * Login
 */
router.post('/login',async (req,res)=>{
  
    const user=req.body.username;
    try{
        const name=await loginApi(req);
        if(name!==undefined){
            const token= jwt.sign({name},'asdasdafasfskfakjshfakfhsafhjashfjaghfh');
            return res.status(200).json({user:name,token:token});

        }
        throw new Error("Please try later");
    }catch(err){
        return res.status(400).json({error:err.message});
    }

    
})
module.exports=router;