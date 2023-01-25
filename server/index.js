import express from "express"
import {Server as SockerServer} from "socket.io"
import * as http from "http";
import cors from "cors"
import {PORT} from "./config.js";

const app = express()

const server = http.createServer(app)

const io = new SockerServer(server,{
    cors:{
        origin: '*'
    }
})

app.use(cors())

io.on('connection', (socket)=>{
    socket.on('message',  (message)=>{
        socket.broadcast.emit('message', message)
    })
})



server.listen(PORT)