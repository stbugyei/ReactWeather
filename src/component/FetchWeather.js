import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Geolocation from './Geolocation'
import DisplayInfo from './DisplayInfo'
import DisplayForecast from './DisplayForecast'
import Form from './Form'
import Cloud from './../images/cloud.jpeg';
import Snow from './../images/snow.jpg';
import Rain from './../images/rain.jpg';
import Clear from './../images/clear2.jpg';
import Mist from './../images/mist.jpg';
import Storm from './../images/storm.jpg';
import Spinner from './Spinner'


// const API_KEY = process.env.REACT_APP_API_KEY
//const URL = '//api.openweathermap.org/data/2.5/'
const API_KEY = "b2ef7b3ccbdb6c1a8cfc6cc6b959fd92";
const FORECAST_URL = "//api.openweathermap.org/data/2.5/forecast/?"


const FetchWeather = () => {

    const location = useLocation();

    const [forecast, setForecast] = useState({});
    const [icon, setIcon] = useState(null);
    const [condition, setCondition] = useState();
    const [error, setError] = useState(false);


    //========= An async and await function to fetch default weather location =========
    const fetchCurrentLocation = async (latitude, longitude) => {
        const api_call = await fetch(`${FORECAST_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`),
            result = await api_call.json();

        try {
            let dailyForecast = []
            for (let i = 0; i < result.list.length; i += 8) {
                dailyForecast.push(result.list[i])
            }

            setForecast(result);
            //console.log(result)
        }

        catch (error) {
            setError
                (<><Spinner /><h4>Current Position Cannot be Found. Please do a Custom Search.</h4></>)
        }
    }


    //========= Display default weather =========
    useEffect(() => {
        const showGeoLocation = async () => {
            try {
                if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        fetchCurrentLocation(position.coords.latitude, position.coords.longitude);
                    }, e => console.log(e));
                }

            } catch (error) {
                setError
                    (<><Spinner /><h4>Current Position Cannot be Found. Please do a Custom Search.</h4></>)
            }
        }
       showGeoLocation();
    }, []);

    //========= conditions for searching through the API =========
    const requestWeatherDetail = async (e) => {
        e.preventDefault();
        const query = e.target.city.value;

        if (query) {

            const weatherFeed = await fetch(`${FORECAST_URL}q=${query}&units=metric&APPID=${API_KEY}`),
            responseForecast = await weatherFeed.json();

            //====== Getting the five days forecast data array ======

            try {
                let dailyForecast = []
                for (let i = 0; i < responseForecast.list.length; i += 8) {
                    dailyForecast.push(responseForecast.list[i])
                }
                setForecast(responseForecast);
                setCondition(dailyForecast[0].weather[0].main);
                setError(null)

            } catch (error) {
                if (responseForecast.message === 429) {
                    setError(
                        <><Spinner /><h4 style={{ color: 'red' }}>{responseForecast.message}</h4></>
                    );
                } else {
                    setError(
                        <><Spinner /><h4>Weather Details For <span style={{ color: 'red' }}>{query}</span> Cannot be Found</h4></>
                    );
                }
            }

        } else {
            setForecast({});
            setIcon(null);
            setError(<><Spinner /><h4>Please Enter City Or Country Name</h4></>
            );
        }
    }

    //========= conditions for changing the background image =========
    const changeBackgroundImg = () => {


        if (condition === 'Clouds') {
            return Cloud

        } else if (condition === 'Snow') {
            return Snow
        }

        else if (condition === 'Rain') {
            return Rain
        }

        else if (condition === 'Drizzle') {
            return Rain
        }

        else if (condition === 'Thunderstorm') {
            return Storm
        }

        else if (condition === 'Mist') {
            return Mist
        }

        else if (condition === 'Fog') {
            return Mist
        }

        else if (condition === 'condition') {
            return Clear
        }

        return Clear
    }

   // console.log(location.key)
   // console.log(forecast)

    return (

        <center>
            <div className='weather_details' style={{ backgroundImage: `url(${changeBackgroundImg()})` }} >
                <div className="search-wrapper" onSubmit={requestWeatherDetail} >
                    <Form />
                </div>
                {((forecast && Object.keys(forecast).length)) ? 
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <Switch location={location} key={location.pathname}>
                             {/* <Redirect exact from="/" to="/geolocation" /> */}
                            <Route exact path="/">
                                {!error ? <Geolocation  {...forecast} {...requestWeatherDetail} /> : error}
                            </Route>

                            <Route exact path="/displayinfo">
                                {!error ? <DisplayInfo {...forecast} {...requestWeatherDetail} /> : error}
                            </Route>

                            <Route exact path="/displayforecast">
                                {!error ? <DisplayForecast {...forecast} {...requestWeatherDetail} /> : error}
                            </Route>
                        </Switch>
                    </AnimatePresence>
                    : <span style={errormsg}>{error}{icon}</span>}
            </div>
        </center>
    )
}

export default withRouter(FetchWeather);

const errormsg = {
    color: '#fff',
    margin: '30px',
    textAlign: 'center',
};
