import React from 'react';
import Home from './components/home';
import Calender from './components/calender';
import Tools from './components/tools';

class View extends React.Component{
    render(){
        return this.showPage(this.props.page);
    }

    showPage(view){
        switch (view){
            case 'home':
                return (
                    <Home/>
                );
            case 'calender':
                return (
                    <Calender/>
                );
            case 'tools':
                return (
                    <Tools/>
                );
            case 'todo':
                return (
                    <div id='view'>

                    </div>
                );
            default:
                return (
                    <div id='view'>

                    </div>
                );
        }
    }
};

export default View;