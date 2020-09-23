import React, { useState, useEffect } from 'react';
import moment from 'moment';


const Moment = (forecast) => {

    const [curTime, setCurTime] = useState();

    const timezone = forecast.city.timezone;
    const timezoneInMinutes = timezone / 60;
    const currentTime = moment().utcOffset(timezoneInMinutes).format(" ddd, MMM D YYYY | h:mm:ss a");

    useEffect(() => {
        const reset = setInterval(() => setCurTime(currentTime), 1000)
        return () => {
            clearInterval(reset);
        }
    }, [curTime, currentTime]);
    
    return (
        <>
            <h6>{currentTime}</h6>
        </>
    )
}

export default Moment;

