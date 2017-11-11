import React from 'react';
import Location from '../components/Location.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {removeItem} from '../actions/index.js';


class WeatherList extends React.Component{
     
   

    render(){
        const location=this.props.weather.map((location, index)=>{
           
            return <Location
                    key={index}
                    location={location}
                    handleRemoveItem={this.handleRemoveItem}/>
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
                      {location}
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
export default connect(mapStateToProps)(WeatherList);


