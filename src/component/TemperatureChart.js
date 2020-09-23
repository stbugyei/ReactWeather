import React from 'react';
import moment from 'moment';
import ChartistGraph from 'react-chartist';




const TemperatureChart = (forecast) => {

    //======= Extracting the five days weather data  =========

    const fiveDayForecast = () => {
        let dailyForecast = []
        for (let i = 0; i < forecast.list.length; i += 8) {
            dailyForecast.push(forecast.list[i])
        }
        return dailyForecast
    }


    //======= Extracting date for plotting the Chart ==========

    const date = () => {
        let dateArr = []
        fiveDayForecast().map((weather =>
            dateArr.push(moment(weather.dt_txt).format("ddd"))
        ))
        return dateArr
    }

    //======= Extracting max temperature for plotting the Chart ==========

    const maxTemp = () => {
        let maxTempArr = []
        fiveDayForecast().map((weather =>
            maxTempArr.push(Math.round(weather.main.temp_max))
        ))
        return maxTempArr
    }

    //======= Extracting min temperature for plotting the Chart ==========

    const minTemp = () => {
        let minTempArr = []
        fiveDayForecast().map((weather =>
            minTempArr.push(Math.round(weather.main.temp_min))
        ))
        return minTempArr
    }

  //======= data for ploting the chart ==========

    const data = {

        labels: date(),

        series: [
            minTemp(),
            maxTemp()
        ],
    };


    const options = {
        width: '320px',
        height: '140px',
        showArea: true,
        colors: 'nivo'
    };


    const chartWrapper = {
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '10px',
        textShadow: ' 0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)',
        backgroundColor: 'rgba(255, 255, 255, .21)',
    };
    

    return (

        <div style={chartWrapper}>
            <ChartistGraph data={data} options={options} type={'Line'} />
        </div>
    )
}


export default TemperatureChart;



