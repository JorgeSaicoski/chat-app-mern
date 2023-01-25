import express from "express"
import {Server as SockerServer} from "socket.io"
import * as http from "http";
import cors from "cors"
import {PORT} from "./config.js";

const app = express()

const server = http.createServer(app)

new SockerServer(server)

app.use(cors())

app.listen(PORT)