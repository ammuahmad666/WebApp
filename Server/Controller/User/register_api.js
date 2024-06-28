const getClient=require('../../db/postgreclient');
const bcrypt=require('bcrypt');
const validator=require('validator');
async function encrypt(pass){
    const saltRound=8;
    bcrypt.genSalt(saltRound,(err,res)=>{

    });
}
async function registerApi(req){
    if(req.body.fname==="" || req.body.password==="" ||req.body.email==="")
        {
            throw new Error("Please fill all fields");
        }
    if(!validator.isStrongPassword(req.body.password,{minSymbol:0}))
    {
        throw new Error("Strong password required");
    }
    
    try{
    const client=await getClient();
    const saltRounds=9;
    const password=await bcrypt.hash(req.body.password,saltRounds);

    const text='INSERT INTO USERS(first_name,last_name,email,username,password) VALUES($1,$2,$3,$4,$5) returning *';
    const values=[req.body.fname,req.body.lname,req.body.email,req.body.name,password,];
    const res=await client.query(text,values); 
    console.log(res.rows);
    await client.end();
    }catch(err){
    console.log("Problem in register_api: "+err);
    throw new Error("Please try again later")
}
}
module.exports=registerApi;
