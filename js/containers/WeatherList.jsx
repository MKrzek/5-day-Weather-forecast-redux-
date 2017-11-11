import React from 'react';
import Location from './Location.jsx';
import {connect} from 'react-redux';

class WeatherList extends React.Component{
     
    render(){
        const city=this.props.weather.map((city, index)=>{
            return <Location
                    key={index}
                    city={city} />
        }

    );
    
        return <table className='table table-hover'>
                  <thead>
                      <tr>
                         <th>City</th>
                         <th>Temperature (C)</th>
                         <th>Pressure (hPa)</th>
                         <th>Humidity (%)</th>
                      </tr>
                  </thead>
                  <tbody>
                      {city}
                  </tbody>
               </table>
    }
}

function mapStateToProps ({weather}){
    return {weather}; //{weather}==={weather: weather}
    
}
{/*function mapStateToProps({weather}){
const weather=state.weather*/}

export default connect(mapStateToProps)(WeatherList);


