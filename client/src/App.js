import React, { useEffect } from "react";
import io from "socket.io-client";

function App() {
    useEffect(() => {
        const socket = io.connect("/");
    }, []);

    return <div></div>;
}

export default App;
