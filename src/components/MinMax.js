import React from 'react';
function  MinMax(props) {
const minMaxTemp = props.minMaxTemp;
const weather = props.weather;
if (weather.main === undefined){
    
    return (
        <div>
            <h1>Can't find that place...</h1>
        </div>
        )
}

 return (

<div className="minMax-info">
    <p className="minTemp">Min Temp: {props.minMaxTemp && props.minMaxTemp.temp_min} <span>&deg;C</span></p>
    <p className="maxTemp">Max Temp: {minMaxTemp && minMaxTemp.temp_max.toFixed(1)} <span>&deg;C</span></p>

</div>
)};

export default MinMax;