import React, {Component} from 'react';
import axios from 'axios';

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
        axios.get('https://api.openweathermap.org/data/2.5/weather?zip=75206,us&APPID=fe68ebb8ef6e83fa4d3208acab2b2d68')
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