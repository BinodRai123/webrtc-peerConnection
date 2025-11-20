const { Server } = require("socket.io");

const io = new Server(8000, {
  cors: true
});

const emaiToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log("server is connected", socket.id);
  socket.on("room:join", data => {
    const { email, room } = data;
    emaiToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email)
    
    socket.join(room);
    io.to(room).emit("user:join", {email, id: socket.id});
    io.to(socket.id).emit("room:join", data);
  })

})


