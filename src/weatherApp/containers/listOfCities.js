import React , {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_maps';





class ListOfCities extends Component{

    renderWeather(cityData){

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp-273.15);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td className="col-xs-3">
                    <GoogleMap name={name}/>
                </td>
                <td className="col-xs-3">
                    <Chart data ={temps} color ='blue' units='C'/>
                </td>
                <td className="col-xs-3">
                    <Chart data = {pressures} color = 'red' units='hPa'/>
                </td>
                <td className="col-xs-3">
                    <Chart data ={humidities } color ='green' units='%'/>
                </td>

            </tr>
        )
    }

    render(){
        return(
            <table className={'table table-hover'}>
                <thead>
                    <tr>
                        <th className="col-xs-3">City</th>
                        <th className="col-xs-3">Tempreture (C)</th>
                        <th className="col-xs-3">Pressure (hPa)</th>
                        <th className="col-xs-3">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }

}


function mapStateToProps( {weather} ) {
    return { weather: weather };
}


export default connect(mapStateToProps)(ListOfCities)

