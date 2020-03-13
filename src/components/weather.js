import React, {Component} from 'react';
import './style.css';

class Weather extends Component{
    render()
    {
        return(
            <div className="weather">
                 {
                    this.props.country && this.props.city && <p className="weather_p">Location: 
                        <span className="w_span">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature && <p className="weather_p">Temperature: 
                        <span className="w_span">  {this.props.temperature}</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather_p">Humidity: 
                        <span className="w_span">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather_p">Conditions:  
                        <span className="w_span">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather_p">{this.props.error}</p>
                }
            </div>
        )
            
    
    }
}

export default Weather;