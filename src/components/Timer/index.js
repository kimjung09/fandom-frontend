import React, {useState, useEffect} from "react";
import moment from 'moment';
import "./style/Timer.css"

const Index = () => {
    //
    const formatTime = (time) => {
        if (time < 10) {
            return '0' + time
        }
        return time;
    }

    const calculateTimeLeft = () => {
        // 이벤트 타임에대한 총 시간 값 선언
        let eventTime = '1638291599';

        // currentTime 현재시간에 대한 let 선언
        let currentTime = (Math.floor(Date.now() / 1000)).toString();
        let leftTime = eventTime - currentTime;
        // 시간 초가 감소하는 seconds duraction 선언
        let duration = moment.duration(leftTime, 'seconds');
        // 시간이 흐르는 간격 1초마다 감소
       let interval = 1000;

       // if 만약 감소하는 시간초가 0이된다면, 60 초로 다시 초기화
        if (duration.asSeconds() <= 0) {
            clearInterval(interval);
        }
        duration = moment.duration(duration.asSeconds() - 1, 'seconds');
        return (
            duration.days() + 'D ' + formatTime(duration.hours()) + ':' + formatTime(duration.minutes()) + ':' +formatTime(duration.seconds())
        );
    }

    // time 변수에 시간값을 선언한  caclateTImeLeft값을 useState에 넣어줌
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // 이동할때마다 메모리 누수가 발생하는 문제 == clean up 함수 이용
        // 메모리 누수가 발생하는 이유 === router에서 이동후 이동전 state를 바꾸려고 시도할때
        // 비동기 처리과정
        // 페이지에서 할당된 메모리를 반환하지않고 누적되기때문에 발생하는 문제

        return function cleanup() {
            setTimeLeft(calculateTimeLeft());
        }
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