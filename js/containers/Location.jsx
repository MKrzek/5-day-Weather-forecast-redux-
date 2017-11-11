import React from 'react';
import Chart from '../components/Chart.jsx';
import Google_map from '../components/Google_map.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeItem} from '../actions/index.js';

class Location extends React.Component {

    handleRemoveItem = () => {
        this.props.removeItem(this.props.location);
        console.log (this.props.location)
        console.log('remove button works')
    };

    render() {
        const cityData = this.props.location;
        console.log(cityData)
        const name = cityData.city.name;
        const temps = cityData
            .list
            .map(weather => weather.main.temp);
        const pressures = cityData
            .list
            .map(weather => weather.main.pressure);
        const humidities = cityData
            .list
            .map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return <tr key={name} id={name}>
            <td><Google_map lon={lon} lat={lat}/></td>
            <td><Chart data={temps} color='orange' units='C'/></td>
            <td><Chart data={pressures} color='blue' units='hPa'/></td>
            <td><Chart data={humidities} color='green' units='%'/></td>
            <td>
                <span className='input-group-btn'>
                    <button className='btn btn-secondary' onClick={this.handleRemoveItem}>Remove</button>
                </span>
            </td>
        </tr>
    }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({removeItem}, dispatch);
}
export default connect(null, mapDispatchToProps)(Location);
