const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);
const path = require("path");

app.use(express.static("client/build"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.get("/express-server", (req, res) => {
    res.end("This is my backend server");
});

io.on("connection", (socket) => {
    console.log("New User Connected");

    socket.on("disconnect", () => {
        console.log("User Disconnected");
    });
});

expressServer.listen(5000, function () {
    console.log("Server running on port: 5000");
});
