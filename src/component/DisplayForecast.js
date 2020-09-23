import React from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import moment from 'moment';
import TemperatureChart from './TemperatureChart';
import Thunder from '../animated/thunder.svg'
import Drizzle from '../animated/rainy-1.svg'
import Rain from '../animated/rainy-3.svg'
import Snow from '../animated/snowy-3.svg'
import Clear from '../animated/day.svg'
import Miscellaneous from '../animated/cloudy.svg'
import FewClouds from '../animated/cloudy-day-2.svg'
import ScatteredClouds from '../animated/cloudy-day-1.svg'
import OvercastClouds from '../animated/cloudy.svg'
import '../styles/displayforecast.css'



const DisplayForecast = (forecast) => {

    //======= Navigation functions =========

    const history = useHistory();

    const handleClick = () => {
        history.push("/displayinfo");
    }

    //======= Extracting the five days weather data  ========

    const fiveDayForecast = () => {
        let dailyForecast = []
        for (let i = 0; i < forecast.list.length; i += 8) {
            dailyForecast.push(forecast.list[i])
        }
        return dailyForecast
    }

    /* ========= Replacing the default icons with animated icons from amcharts =========*/

    const Avatar = (item) => {

        if (item === '11d' || item === '11n') {
            return Thunder;
        }

        else if (item === '09d' || item === '09n') {
            return Drizzle;
        }

        else if (item === '10d' || item === '10n') {
            return Rain;
        }

        else if (item === '13d' || item === '13n') {
            return Snow;
        }

        else if (item === '50d' || item === '50n') {
            return Miscellaneous;
        }

        else if (item === '01d' || item === '01n') {
            return Clear;
        }

        else if (item === '02d' || item === '02n') {
            return FewClouds;
        }

        else if (item === '03d' || item === '03n') {
            return ScatteredClouds;
        }

        else if (item === '04d' || item === '04n') {
            return OvercastClouds;
        }

        else {
            return Clear;
        }
    }


    /* ========= Mapping out the forecast details to display =========*/

    const ShowForecast = fiveDayForecast().map(weather => (

        <section className="data-section" key={weather.dt_txt}>
            <div className="data-section__wrapper">
                <div className='data-section__content'>
                    <h5>{moment(weather.dt_txt).format("dddd")}</h5>
                    <h5>{moment(weather.dt_txt).format("Do MMM")}</h5>
                </div>
                <div className='data-section__content'>
                    <img src={Avatar(weather.weather[0].icon)} alt='img' />
                </div>
                <div className='data-section__content'>
                    <h5>{(weather.weather[0].description)}</h5>
                    <h5>{weather.main.humidity}%</h5>
                </div>
                <div className="data-section__content">
                    <h5> {Math.round(weather.main.temp_max)}°c</h5>
                    <h5>{Math.round(weather.main.temp_min)}°c</h5>
                </div>
            </div>
        </section>

    ))


    return (

        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeIn" }}
        >
            <div className='display-forecast'>
                <section className="graph-section">
                    <TemperatureChart {...forecast} />

                    <span className='btn-direction'><i className="fas fa-arrow-down"></i></span>
                    <span><button type="button" onClick={handleClick} className='btn-info'><h4>Get Today's Forecast</h4></button></span>

                    <div style={{ textAlign: 'left', textShadow: 'text-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 1px', marginBottom: '-16px', color: '#1A237E', paddingTop: '2px' }}>
                        <h4>{forecast.city.name}, {forecast.city.country} <span style={{ color: '#f65' }}>|</span> {Math.round(fiveDayForecast()[0].main.temp_max)}°c</h4>
                    </div>
                </section>
                {ShowForecast}
            </div>
        </motion.div>
    )
}


export default withRouter(DisplayForecast);
