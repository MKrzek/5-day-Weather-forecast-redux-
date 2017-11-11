import React from 'react';
import Chart from '../components/Chart.jsx';
import Google_map from '../components/Google_map.jsx';


export default class Location extends React.Component{


render(){


const cityData=this.props.location;
console.log (cityData)
const name=cityData.city.name;
const temps = cityData.list.map(weather => weather.main.temp);
const pressures = cityData.list.map(weather => weather.main.pressure);
const humidities = cityData.list.map(weather => weather.main.humidity);
const {lon, lat} = cityData.city.coord;


return <tr key={name} id={name}>
             <td><Google_map lon={lon} lat={lat}/></td>
             <td><Chart data={temps} color='orange' units='C'/></td>
             <td><Chart data={pressures} color='blue' units='hPa'/></td>
             <td><Chart data={humidities} color='green' units='%'/></td>
             <td>
                  <span className='input-group-btn'>
                     <button className='btn btn-secondary' onClick={this.props.handleRemoveItem}>Remove</button>
                  </span>
            </td>
       </tr>
}


}

