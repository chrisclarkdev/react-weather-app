import React, { Component } from 'react';
import './css/App.css';
import './css/Open-weather-icons.css';
import Form from './components/Form';
import MainTemp from './components/MainTemp';
import MinMax from './components/MinMax';
import CityInfo from './components/CityInfo';
const API_KEY = "&APPID=5191901e9fce1e3cae9465a2a402c6f0";
// Hello Bob!!!!
class App extends Component {
   state = {
      weatherData: [],
      weather: [], //gets info from response.data.list[0].main.temp
      clouds: [],
   }
// fetches the data and processes it into jsonp //
// sets the state data to weatherData 
    getWeather = async (e) => {
     const weatherPlace = e.target.elements.weatherPlace.value || "kingston, jm";
     e.preventDefault();
     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherPlace}&units=metric${API_KEY}`);
     const data = await api_call.json();
     this.setState({weatherData : data, 
                    main : data.main.temp,
                    weather : data.weather[0],
                    formattedTime : data.dt,
                    minMaxTemp : data.main
                  })
  }

    render() {
      
     if (this.state.main < 1 ){
      var element = document.getElementById("myDIV");
      element.classList.remove("warm");
      element.classList.remove("sunny");
      element.classList.remove("hot");
      element.classList.remove("cold");
      element.classList.remove("default");

      element.classList.add("freezing"); // its freezing 
     }
     else if (this.state.main < 12 ){
      const element = document.getElementById("myDIV");
      element.classList.remove("sunny");
      element.classList.remove("warm");
      element.classList.remove("hot");
      element.classList.remove("freezing");
      element.classList.remove("default");
      
      element.classList.add("cold"); // It's cold
     }
      else if (this.state.main < 15)
      {
      const element = document.getElementById("myDIV");
        element.classList.remove("freezing");
        element.classList.remove("sunny");
        element.classList.remove("hot");
        element.classList.remove("cold");
        element.classList.remove("default");


      element.classList.add("warm"); // it's warm 
        
        console.log("Hello Spring")
    } 
    else if (this.state.main < 24 )
     
    {
      const element = document.getElementById("myDIV");
      element.classList.remove("warm");
      element.classList.remove("freezing");
      element.classList.remove("hot");
      element.classList.remove("cold");
      element.classList.remove("default");


      element.classList.add("sunny");  // getting nice and sunny 
        console.log("Hello Summer ")
      }
      else if (this.state.main >= 24 ){
        const element = document.getElementById("myDIV");
        element.classList.remove("warm");
        element.classList.remove("sunny");
        element.classList.remove("freezing");
        element.classList.remove("cold");
        element.classList.remove("default");
        element.classList.add("hot");  // it's sweating time 
      }
        return (
          <div className="App">
  
              <Form getWeather={this.getWeather} />

              <div className="MainBody" id="myDIV">
              <CityInfo City={this.state.weatherData}
                        weather={this.state.weather}/>

              <MainTemp 
                        main={this.state.main} 
                        weather={this.state.weather}
              />
              <MinMax minMaxTemp={this.state.minMaxTemp}
                      weatherData={this.state.weatherData} 
                      weather={this.state.weather} />
          </div>`
          </div>
        )
        }
      }
export default App;
