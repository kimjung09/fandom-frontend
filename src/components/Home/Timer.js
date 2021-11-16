import React, {useState, useEffect} from "react";

const Timer = (time) => {

    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(59);
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }

            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [hours, minutes, seconds]);

    return (
        <>
            <span className="live">LIVE</span>
            <span className="clock">
                                 {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
        </>
    )
}
export default Timer;