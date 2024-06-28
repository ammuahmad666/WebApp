const getClient=require("../../db/postgreclient");
const bcrypt=require('bcrypt');
async function login_api(req){
    try{
    
    const client=await getClient();
    const text='Select * from USERS where username=$1';
    const values=[req.body.name,];
    const res=await client.query(text,values); 
    console.log(res.rows[0]);
    if(res.rows[0]!==undefined){
        if(bcrypt.compareSync(req.body.password,res.rows[0].password))
        return req.body.name;
        else
        throw new Error("Unmatching");
    }
    return undefined;
    }catch(err){
        console.log("Problem in login_api:"+err);
        console.log("sdfa");
        throw new Error("Please check username and password again");
    }
}
module.exports=login_api;