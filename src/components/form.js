import React,{Component} from 'react';
import './style.css';

class Form extends Component{
   

    render()
    {
        return(
            <div>
                <form onSubmit = {this.props.loadWeather}>
                    
               <label className="city_label">City: </label> <input className="city_input" type="text" name="city" placeholder="Select city"></input>
               
               
                <label className="country_label">Country: </label><input className="country_input" type="text" name="country" placeholder="Select country"></input>
            
                
                <button>Get Weather</button>
                
                </form>
            </div>
        )
    }
}

export default Form;