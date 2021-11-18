import React, {useState, useEffect} from "react";
import moment from 'moment';
import "./style/Popup.css"

const Index = () => {
    const formatTime = (time) => {
        if (time < 10) {
            return '0' + time
        }
        return time;
    }

    const calculateTimeLeft = () => {
        let eventTime = '1638291599';
        let currentTime = (Math.floor(Date.now() / 1000)).toString();
        let leftTime = eventTime - currentTime;
        let duration = moment.duration(leftTime, 'seconds');
        let interval = 1000;
        if (duration.asSeconds() <= 0) {
            clearInterval(interval);
        }
        duration = moment.duration(duration.asSeconds() - 1, 'seconds');
        return (
            duration.days() + 'D ' + formatTime(duration.hours()) + ':' + formatTime(duration.minutes()) + ':' +formatTime(duration.seconds())
        );
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    return (
        <div className="timer">
            <span className="live">LIVE</span>
            <span className="clock">
                {timeLeft}
            </span>
        </div>
    )
}
export default Index;