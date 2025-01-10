import React, { useEffect, useState } from 'react'

function TodoDate() {

    const [dateTime, setDateTime] = useState("");

    // Todo Date and Time
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`)

        }, 1000);

        return () => clearInterval(interval);

    }, [])

    return <h1 className="text-2xl text-white flex justify-center p-4">{dateTime}</h1>
}

export default TodoDate
