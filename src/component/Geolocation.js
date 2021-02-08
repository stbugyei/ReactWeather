import React from 'react'
import { useHistory, withRouter } from "react-router-dom";
import Moment from './Moment'
import moment from 'moment';
import Thunder from '../animated/thunder.svg'
import Drizzle from '../animated/rainy-1.svg'
import Rain from '../animated/rainy-3.svg'
import Snow from '../animated/snowy-3.svg'
import Clear from '../animated/day.svg'
import Miscellaneous from '../animated/cloudy.svg'
import FewClouds from '../animated/cloudy-day-2.svg'
import ScatteredClouds from '../animated/cloudy-day-1.svg'
import OvercastClouds from '../animated/cloudy.svg'



const Geolocation = (forecast) => {
    //console.log(forecast)

    //======= Navigation functions =========

    const history = useHistory();

    const handleClick = () => {
        history.push("/displayinfo");
    }

    //======= Navigation functions =========
    const fiveDays = () => {
        history.push("/displayforecast");
    }

    //======= Extracting the five days weather data  =========

    const fiveDayForecast = () => {
        let dailyForecast = []
        for (let i = 0; i < forecast.list.length; i += 8) {
            dailyForecast.push(forecast.list[i])
        }
        return dailyForecast
    }

    const DayOne = fiveDayForecast()[0];

    let icon = (DayOne.weather[0].icon);
    let sunrise = (moment.unix(forecast.city.sunrise).format("hh:mm a"))
    let sunset = (moment.unix(forecast.city.sunset).format("hh:mm a"))

    /* ========= Replacing the default icons with animated icons from amcharts =========*/

    const getImageType = () => {

        if (icon === '11d' || icon === '11n') {
            return Thunder;
        }

        else if (icon === '09d' || icon === '09n') {
            return Drizzle;
        }

        else if (icon === '10d' || icon === '10n') {
            return Rain;
        }

        else if (icon === '13d' || icon === '13n') {
            return Snow;
        }

        else if (icon === '50d' || icon === '50n') {
            return Miscellaneous;
        }

        else if (icon === '01d' || icon === '01n') {
            return Clear;
        }

        else if (icon === '02d' || icon === '02n') {
            return FewClouds;
        }

        else if (icon === '03d' || icon === '03n') {
            return ScatteredClouds;
        }

        else if (icon === '04d' || icon === '04n') {
            return OvercastClouds;
        }

        else {
            return Clear;
        }

    }


    return (

        <div className='geographic-loc'>
                <section className="upper-section" >

                    <div className='country-city'>
                        <h1>{forecast.city.name}, {forecast.city.country}</h1>
                        <div style={time}><Moment {...forecast} /></div>
                    </div>

                    <div className='weather-wrapper_img'>
                        <img className='avatar' src={getImageType()} alt='img' />
                        <h4 style={pStyle1}> {(DayOne.weather[0].description)}</h4>
                    </div>

                    <div className='temperature-wrapper'>
                        <div className="temperature-content">
                            <div className="temperature-main">
                                <h1>{Math.round(DayOne.main.temp)}<sup>°</sup>C</h1>
                            </div>

                            <div className="temperature-subs">
                                <h4 style={{ fontSize: '14px', color: 'rgb(145, 22, 22)', fontWeight: '600' }}> max </h4>
                                <h4> {Math.round(DayOne.main.temp_max)}°c</h4>
                                <h4 style={{ fontSize: '14px', color: 'rgb(145, 22, 22)', fontWeight: '600' }}> min</h4>
                                <h4>{Math.round(DayOne.main.temp_min)}°c</h4>
                            </div>
                        </div>

                        <div className="sun">
                            <div className="sun-content">
                                <p><i className="wi wi-sunrise"></i>{sunrise}</p>
                            </div>

                            <div>
                                <p><i className="wi wi-sunset"></i>{sunset}</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div className="btn-control">
                    <>
                        <span className='btn-control__arrow '><i className="fas fa-arrow-right"></i></span>
                        <span><button type="button" onClick={handleClick} className='btn-control__info'><h4>Get Details</h4></button></span>
                    </>

                    <>
                        <span><button type="button" onClick={fiveDays} className='btn-control__info'><h4>Get 5-Day Forecast</h4></button></span>
                        <span className='btn-control__arrow'><i className="fas fa-arrow-left"></i></span>
                    </>
                </div>
        </div>
    )
}


export default withRouter(Geolocation);


const pStyle1 = {
    marginTop: '-19px',
    textTransform: 'capitalize',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '0 3px 6px rgb(59, 62, 65)',
};

const time = {
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)',
};

