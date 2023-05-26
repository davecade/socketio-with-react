import React, { useEffect, useState } from "react";
import io from "socket.io-client";

function App() {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        const socket = io.connect("/");
        socket.on("msg", (data) => {
            setMsg(data);
        });
    }, []);

    return (
        <div>
            <h1>{msg}</h1>
        </div>
    );
}

export default App;
