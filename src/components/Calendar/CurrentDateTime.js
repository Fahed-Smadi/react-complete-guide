import React, { useState, useEffect } from "react";
import './CurrentDateTime.css'

function CurrentDateTime() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    return (
        <div className="calendar">
            <div className="calendar-date">{date.toLocaleDateString("en-US", options)}</div>
            <div className="calendar-day">{date.toLocaleDateString("en-US", { weekday: "long" })}</div>
            <div className="calendar-time">{date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", second: "numeric" })}</div>
        </div>
    );

}

export default CurrentDateTime;
