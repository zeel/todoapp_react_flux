/**
 * Created by zeelshah on 08/07/16.
 */
import React, {Component,PropTypes} from 'react';
import cx from 'classnames';
import TodoActions from '../actions/ToDoActions';
import TodoTextInput from './TodoTextInput';
class TodoItem extends Component {
    static propTypes = {
        isCompleted: PropTypes.bool,
        text: PropTypes.string.isRequired
    };

    static defaultProps = {
        isCompleted: false
    };

    constructor(props) {
        super(props);
        this.state = {isEditing: false};
    }

    render() {
        let {isCompleted, text} = this.props,
            comoponent;
        if (this.state.isEditing) {
            comoponent = <TodoTextInput value={text} onSave={this._onEdit}/>
        } else {
            comoponent = <li className='view'>
                <input type='checkbox' checked={isCompleted} className='check-hasCompleted' onChange={this._onToggle}/>
                <span className={cx('todo-title', {'strikeout' : isCompleted})} onClick={this._onClick}>{text}</span>
                <a className='remove-todo-close' onClick={this._onDestroy}>x</a>
            </li>;
        }
        return <div>{comoponent}</div>
    }

    _onToggle = (event) => {
        TodoActions.TOGGLE(this.props.id, event.target.checked);
    };

    _onDestroy = () => TodoActions.DELETE(this.props.id);

    _onClick = () => {
        this.setState({isEditing: true});
    };

    _onEdit = (text) => {
        if (text) {
            TodoActions.UPDATE(this.props.id, text);
        } else {
            this._onDestroy();
        }
        this.setState({isEditing: false});
    }
}
export default TodoItem;