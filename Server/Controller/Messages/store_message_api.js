const getClient=require('../../db/postgreclient');


async function storeMessage(user,msg,city,time){
    let client;
    try{
    client=await getClient();
    }catch(err){
        console.log("Unable to get Postgre client: "+err);
        await client.end();
        return;
    }

const c=city.toLowerCase();
console.log(c);
const query = `
CREATE TABLE IF NOT EXISTS "${c}"(
    message varchar,
    username varchar,
    time varchar
);
`;

    try{
    await client.query(query);
    }catch(err) {
        console.log("Error in 1 store_message_api:"+err);
        await client.end();
        return;
    }
    const query2=  `INSERT INTO ${c} (message,username,time) VALUES($1,$2,$3) `;
    try{
    await client.query(query2,[msg,user,time]);
    }catch(err){
        console.log("Error in 2 store_message_api:"+err);
        await client.end();
        return;
    }
    await client.end();

}
module.exports=storeMessage;