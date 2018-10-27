import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';

import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'jquery-easing/dist/jquery.easing.1.3.umd.min'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles.css'

class App extends React.Component{
    render(){
        return (
            <Dashboard/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));