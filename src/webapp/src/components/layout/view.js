import React, {Component} from 'react';
import Home from '../views/home';
import Calender from '../views/calender';
import Tools from '../views/tools';
import Todo from "../views/todo";

class View extends Component {
    showPage = (view) => {
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
                    <Todo/>
                );
            default:
                return (
                    <div id='view'>

                    </div>
                );
        }
    };

    render = () => {
        return this.showPage(this.props.page);
    };
};

export default View;