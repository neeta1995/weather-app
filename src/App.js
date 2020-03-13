import React from 'react';
import logo from './logo.svg';
import Form from './components/form';
import Title from './components/title';
import Weather from './components/weather';
import './App.css';

const API_KEY = "019a1000647272024e064364195ceeff";

class App extends React.Component{
 state ={
   temperature: undefined,
   city: undefined,
   country: undefined,
   humidity: undefined,
   description: undefined,
   error: undefined
 }
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    console.log(city)
    const country = e.target.elements.country.value;
    console.log(country)
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const response = await api_call.json();
    console.log(response)
    if(city&&country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "Please input search values"
      })
    }
  }
render(){
  return (
    <div className="App">
      <Title></Title>
      <Form loadWeather={this.getWeather}></Form>
      <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      ></Weather>
    </div>
  );
}
}



export default App;
