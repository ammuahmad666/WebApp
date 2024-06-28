const getClient=require('../../db/postgreclient');


async function getMessage(city){
    let client;
    try{
        client=await getClient();
    }
    catch(err){
        console.log("Unable to get Postgre client: "+err);
        await client.end();
        return [];
    }
    try{
        const c=city.toLowerCase();
        console.log(c);
        const query=`SELECT * from ${c} ORDER BY time;`;
        const res=await client.query(query);
    
        const msgData=[];
        for(let i=0;i<res.rows.length;i++){
          //  console.log(res.rows[i]);
            msgData.push({user:res.rows[i].username,msg: res.rows[i].message,city: city,time:res.rows[i].time});
        }
        await client.end();
        return msgData;
        

    }
    catch(err){
        console.log("Error in get_message_api: "+err);
        await client.end();
        return [];
    }
   
}
module.exports=getMessage;