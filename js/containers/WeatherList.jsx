import React from 'react';
import {connect} from 'react-redux';
import chart from '../components/Chart.jsx'

class WeatherList extends React.Component{
    
    renderWeather=(cityData)=>{
        const name=cityData.city.name;
        const temps=cityData.list.map(weather=>weather.main.temp);
        console.log (temps)
            return <tr key={name}>
                        <td>{name}</td>
                        <td>
                            
                        </td>
                   </tr>

    }
    render(){
        return <table className='table table-hover'>
                  <thead>
                      <tr>
                         <th>City</th>
                         <th>Temperature</th>
                         <th>Pressure</th>
                         <th>Humidity</th>
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
export default connect(mapStateToProps)(WeatherList);
