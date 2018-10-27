import React from "react";
import moment from "moment";

class Timestamp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            local : '',
            utc : '',
            unixtimestamp: 0
        }
    }

    render() {
        return (
            <div id="tool-unixtimestamp" className="tool container-fluid">
                <div className="tool-name">Timestamp</div>
                <div className="tool-body">
                    <label>Local : </label>
                    <p>{this.state.local}</p>
                    <label>UTC : </label>
                    <p>{this.state.utc}</p>
                    <label>Unix : </label>
                    <p id="uxt-value">{this.state.timestamp} <span style={{fontSize : '10px'}}>SECS</span></p>
                    <div id="btn-refresh">
                        <button type="button" className="btn btn-outline-primary" onClick={() => this.calculate()}>Refresh</button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.calculate();
    }

    calculate() {

        this.setState({
            local : moment().format(),
            utc : moment.utc().format(),
            timestamp : moment().unix()
        });
    }
}

export default Timestamp;