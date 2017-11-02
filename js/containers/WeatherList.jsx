import React from 'react';
import {connect} from 'react-redux';
class WeatherList extends React.Component{
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
                      
                  </tbody>
               </table>
    }
}
function mapStateToProps ({weather}){
    return {weather}; //{weather}==={weather: weather}
}
{/*function mapStateToProps({weather}){
const weather=state.weather*/}
export default connect (mapStateToProps)(WeatherList);
