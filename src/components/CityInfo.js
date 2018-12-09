import React from 'react';

function CityInfo (props) {
	const City = props.City;
	const weather = props.weather;
	if (weather.main === undefined){
		return (null);
	}
	return (

    <div className="CityName">
				<h1>{City.name}, {City.sys && City.sys.country}</h1>
				<h1>{weather.main}</h1>
			<img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weather.main}/>
			</div>
)};

export default CityInfo;