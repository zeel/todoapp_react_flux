/**
 * Created by zeelshah on 08/07/16.
 */
import React, {Component} from 'react';
import ToDoTextInput from './TodoTextInput';
import ToDoActions from '../actions/ToDoActions'
class Header extends Component {
    render() {
        return <div className="todo-form">
            <h3>Todos</h3>
            <input type="checkbox" id="select-all" onChange={this._onSelectAll}
                   checked={this.props.areAllCompleted}/>
            <ToDoTextInput id="new-todo" onSave={this._onEnter}/>
        </div>;
    }

    _onSelectAll(event) {
        ToDoActions.TOGGLE_ALL(event.target.checked)
    };

    _onEnter = (text) => {
        text && ToDoActions.CREATE(text);
    }
}
export default Header;
