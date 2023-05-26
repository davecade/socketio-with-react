import React, { useEffect } from "react";
import io from "socket.io-client";

function App() {
    useEffect(() => {
        const socket = io.connect("/");
    }, []);

    return (
        <div>
            <h1>This is the Client Site</h1>
        </div>
    );
}

export default App;
