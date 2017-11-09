import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chart from '../components/Chart.jsx';
import Google_map from '../components/Google_map.jsx';
import {removeItem} from '../actions/index.js';

class WeatherList extends React.Component{
    
     handleRemoveItem = (event) => {    
     if (typeof this.props.removeItem === 'function') {
        this.props.removeItem(this.props.weather)
    }
    console.log('remove click works')
}

    
    renderWeather=(cityData)=>{
        const name=cityData.city.name;
        const temps=cityData.list.map(weather=>weather.main.temp);
        const pressures=cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat}=cityData.city.coord;
        
       
            return <tr key={name}>
                        <td><Google_map lon={lon} lat={lat}/></td>
                        <td><Chart data={temps} color='orange' units='C'/></td>
                        <td><Chart data={pressures} color='blue' units='hPa'/></td>
                        <td><Chart data={humidities} color='green' units='%'/></td>
                        <td><span className='input-group-btn'>
                            <button className='btn btn-secondary' onClick={this.handleRemoveItem}>Remove</button>
                            </span>
                        </td>
                   </tr>

    }




    render(){
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
                      {this.props.weather.map(this.renderWeather)}
                  </tbody>
               </table>
    }
}
function mapStateToProps ({weather}){
    return {weather}; //{weather}==={weather: weather}
    
}
{/*function mapStateToProps({weather}){
const weather=state.weather*/}
function mapDispatchToProps(dispatch){
        return bindActionCreators({removeItem}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
