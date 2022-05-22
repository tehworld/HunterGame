import React, {useState, useEffect} from 'react'
import { Timer, TimerWrapper } from './CountDownTimerElements';

function CountDownTimer({daysHoursMinSecs}) {

    const {dy , hours , minutes , seconds } = daysHoursMinSecs;
    
    const [days, setDays] = useState(dy)
    const [hrs, setHrs] = useState(hours)
    const [mins, setMins] = useState(minutes)
    const [secs, setSecs] = useState(seconds)
    

    const tick = () => {
   
        if (days === 0 && hrs === 0 && mins === 0 && secs === 0) {
            setDays(0)
            setHrs(0)
            setMins(0)
            setSecs(0)
        }

        else if(hrs === 0 && mins === 0 && secs === 0){
            setDays(days-1)
            setHrs(23)
            setMins(59)
            setSecs(50)
        }
        else if (mins === 0 && secs === 0) {
            setHrs(hrs-1)
            setMins(59)
            setSecs(59)
        } else if (secs === 0) {
            setMins(mins-1)
            setSecs(59)
        } else {
            setSecs(secs-1)
        }
    };
    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


   
  return (
    <TimerWrapper>
    <Timer>{`${days.toString().padStart(2,'0')}:${hrs.toString().padStart(2, '0')}:${mins
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</Timer> 
</TimerWrapper>
  )
}

export default CountDownTimer