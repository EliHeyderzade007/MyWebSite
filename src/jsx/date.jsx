import React, { useEffect } from "react";

function WebDate() {

    useEffect(() => {
        let newDate = new Date();

        let day = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
        let month = newDate.getUTCMonth() + 1 < 10 ? `0${newDate.getUTCMonth() + 1}` : newDate.getUTCMonth() + 1;
        let year = newDate.getFullYear();

        document.querySelector('.date-str').textContent = `Date: ${day}.${month}.${year}`
        let second = 0, minute = 0, hour = 0;
        setInterval(() => {
            second += 1;
            second <= 9 ? document.querySelector('.second').textContent = `0${second}` : document.querySelector('.second').textContent = second;
            if (second % 60 == 0 && second != 0) {
                if (second == 60) {
                    second = 0;
                    document.querySelector('.second').textContent = `0${second}`;
                }
                minute += 1
                minute <= 9 ? document.querySelector('.minute').textContent = `0${minute}` : document.querySelector('.minute').textContent = minute;

            }
            if (minute % 60 == 0 && minute != 0) {
                if (minute == 60) {
                    minute = 0;
                    document.querySelector('.minute').textContent = `0${minute}`;
                }
                hour += 1
                hour <= 9 ? document.querySelector('.hour').textContent = `0${hour}` : document.querySelector('.hour').textContent = hour;
            }
        }, 1000)

    })

    return (
        <div className="web-date">
            <p className="date-str">Thu Dec 26 2024 02:36:06</p>
            <p className="use-time">Use Time: <span className="hour">00</span>:<span className="minute">00</span>:<span className="second">00</span></p>
        </div>
    )
}

export default WebDate;