import app from "./app";
import { port } from "./utils/config";
import { createServer } from "http";
import { Server } from "socket.io";
import { addUser , getUser , getUsers , deleteUser } from "./utils/users";
const server = createServer(app)

const io = new Server(server , {
  cors:{
       origin:'*',
  }
})

io.on('connection', (socket) => {
    console.log('Connected')
    console.log('Connected')
    console.log('Connected')
    console.log('Connected')
    console.log('Connected')
    console.log('Connected')

    socket.on('login', ({ name, room }, callback) => {
      try {
        const user = addUser(socket.id, name, room)
        if (!user) return callback(Error)
        socket.join(user.room)
        socket.in(room).emit('notification', { title: "Someone's here!", description: `${user.name} just entered the room.` })
        io.in(room).emit('users', getUsers(room))
        callback()
      }
      catch (error) {
        console.log(error)
      }
    })

    socket.on('sendMessage', (message) => {
      const user = getUser(socket.id)
      // send username and message
      if (user) {
        io.in(user.room).emit('message', { user: user.name, text: message });
      }
    })

    socket.on('disconnect', () => {
      console.log("User disconnected");
      const user = deleteUser(socket.id)
      if (user) {
        io.in(user.room).emit('notification', { title: 'Someone just left', description: `${user.name} just left the room` })
        io.in(user.room).emit('users', getUsers(user.room))
      }
    })
  })


server.listen(port, () => {
  console.log(`The app is running on http://localhost:${port}`)
})

