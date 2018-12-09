import React from 'react';
 function MainTemp(props){ 
	const main = props.main;
	const weather = props.weather;
	const celcius = main;
	const TextColor = {
		color: 'white'
	};
	if(weather.main === undefined){
		return <div style={TextColor}> <h3>Please enter a city name</h3></div>
	}
	return(
    <div className="Temp-info">
		
		<div className="mainTemp"> 
        <h2>{(celcius).toFixed(0) }<span>&deg;C</span></h2>
				<h3>{weather.description}</h3>
    </div>
		</div>	
	)

};
export default MainTemp;