/**
 * Created by zeelshah on 08/07/16.
 */
import React, {Component} from 'react';
import 'css/style.css';
import TodoStore from '../stores/ToDoStore';
import Dispatcher from '../dispatcher/dispatcher';

import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
let getTodoState = function () {
    return {
        todos: TodoStore.getAllTodos(),
        areAllCompleted: TodoStore.areAllCompleted()
    };
};
class ToDoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = getTodoState();
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    }


    componentWillUnMount() {
        TodoStore.removeChangeListener(this._onChange);
    }


    _onChange = () => {
        this.setState(getTodoState());
    };

    render() {
        let {todos : allTodos,areAllCompleted } = this.state;
        return <div>
            <Header areAllCompleted={areAllCompleted}/>
            <MainSection allTodos={allTodos}/>
            <Footer allTodos={allTodos}/>
        </div>
    }
}
export default ToDoComponent;