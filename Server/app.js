require('dotenv').config();
const express=require('express');
const app=express();
const server=require('http').createServer(app);
const cors=require('cors');
const storeMessage=require('./Controller/Messages/store_message_api');
const get_message_api=require('./Controller/Messages/get_message_api');
const PORT= 5000||process.env.PORT;


//Static files
app.use(express.static('./public'));

//Set view engine
app.set("view engine","ejs");


app.use(cors({origin:true,'methods':'GET,PUT,POST,OPTIONS','allowedHeaders':'Origin,Content-type,Accept','exposedHeaders':'Content-Type,Accept'}));

//Body parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//cors




//Routers
app.use('/',require('./routers/testApi'));
app.use('/',require('./routers/login'));


const io=require('socket.io')(server,{
    cors: {origin : "http://localhost:3000",
    methods: ['GET','POST'],
},
});

io.on('connection', socket => {
    console.log(`User connected ${socket.id}`);
    socket.on('join_room', async (data) => {

        socket.join(data.city);
        console.log(`${socket.id} connected to ${data.city}`);
        const d=await get_message_api(data.city);
        if(d.length>0)
        socket.emit('prev_message',d);

    });
    socket.on('send_message', async (msg)=>{
        const user=msg.data.user;
        const mssg=msg.data.msg;
        const time=msg.data.time;
        const city=msg.data.city;
        await storeMessage(user,mssg,city,time);
        socket.broadcast.to(city).emit('new_message',user,mssg,time);
        socket.emit('new_message',user,mssg,time);
        
    });
    socket.on('leave_room',(city)=> {
        console.log(`${socket.id} left ${city}`);
        socket.leave(city)});

  });


server.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});



