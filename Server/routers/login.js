const express=require('express');
const router=express.Router();
/**
 * Get
 * Login page
 */
router.get('/',async (req,res)=>{
    res.render('login');
});

module.exports=router;