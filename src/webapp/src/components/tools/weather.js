import React, {Component} from 'react';
import {getWeatherUpdate} from '../../services/app-services';

export default class Weather extends Component{
    constructor(props) {
        super(props);

        this.state = {
            tempInC : 0,
            tempInF : 0
        }

        this.fetchDataFromAPI();
        this.interval  = setInterval(() => this.fetchDataFromAPI(), 30000);
    }

    update = (data) => {
        this.setState({
            tempInC : Math.round(data.main.temp - 273.15),
            tempInF : Math.round(data.main.temp * (9/5) - 459.67)
        });
    };

    fetchDataFromAPI = () => {
        getWeatherUpdate()
            .then((response) => {
                this.update(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render = () => {
        return (
            <div id="weatherComp">
                <div>{this.state.tempInC + ' c / ' + this.state.tempInF + ' f'}</div>
            </div>
        );
    };
}