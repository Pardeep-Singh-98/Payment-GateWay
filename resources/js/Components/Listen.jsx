import { useEffect, useState } from "react";

export default function Listen() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log("Echo:", window.Echo);

        window.Echo.channel("chat").listen(".MessageSent", (e) => {
            console.log("EVENT:", e);

            setMessage(e.message);
        });

        return () => {
            window.Echo.leaveChannel("chat");
        };
    }, []);

    return (
        <div>
            <h1>Broadcast Message:</h1>

            <p>{message}</p>
        </div>
    );
}
