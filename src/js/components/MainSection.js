/**
 * Created by zeelshah on 08/07/16.
 */
import React, {Component, PropTypes} from 'react';
import TodoItem from './ToDoItem';
import ToDoActions from '../actions/ToDoActions';
class MainSection extends Component {
    static propTypes = {
        allTodos: PropTypes.object.isRequired,
    };

    render() {
        let todos = this.props.allTodos,
            todoComponents = [];
        for (let todoId in todos) {
            let todo = todos[todoId];
            todoComponents.push(<TodoItem key={todo.id} {...todo} />)
        }
        return <div>
            <div id="todo-container">
                <ul id="todo-box">
                    {todoComponents}
                </ul>
            </div>
        </div>
    }
}
export default MainSection;