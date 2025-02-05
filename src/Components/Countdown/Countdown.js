import dayjs from 'dayjs';
import { useState, useEffect } from 'react'; 
import './Countdown.css';
import {getRemainingTime} from './Utils/CountdownUtils';

function Countdown(props) {
    var [CountdownTime, setCountdownTime] = useState(props.CountdownTime);
    const [remainingTime, setRemainingTime] = useState({
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '00'
    });

    useEffect(() => {
        const intervalId =  setInterval(() => {
            updateRemainingTime(CountdownTime);
        }, 1000);
        return () => clearInterval(intervalId);
    },[CountdownTime])
    

    function updateRemainingTime(countdown){
        setRemainingTime(getRemainingTime(countdown));
    }

    return(
        <div>
        <input title='Select Date' className='date-btn' type="Date" onChange={(e) => {setCountdownTime(dayjs(e.target.value))}}></input>
        <div className='countdown-timer'>
            <div className='countdown-number'>
            <div className='numbers'><div className='card-up'></div><div className='card-down'></div><div className='card-number'>{remainingTime.days}</div></div>
            <div className='numbers-label'>Days</div>
            </div>
            <div className='countdown-number'>
            <div className='numbers'><div className='card-up'></div><div className='card-down'></div><div className='card-number'>{remainingTime.hours}</div></div>
            <div className='numbers-label'>Hours</div>
            </div>
            <div className='countdown-number'>
            <div className='numbers'><div className='card-up'></div><div className='card-down'></div><div className='card-number'>{remainingTime.minutes}</div></div>
            <div className='numbers-label'>minutes</div>
            </div>
            <div className='countdown-number'>
            <div className='numbers'><div className='card-up'></div><div className='card-down'></div><div className='card-number'>{remainingTime.seconds}</div></div>
            <div className='numbers-label'>seconds</div>
            </div>
        </div>
        </div>
    );
}

export default Countdown;