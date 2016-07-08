/**
 * Created by zeelshah on 08/07/16.
 */
import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import ToDoConstants from '../constants/ToDoConstants';
let _todos = {},
    CHANGE_EVENT = 'change',
    createTodo = function (text) {
        let id = +(new Date());
        _todos[id] = {id, isCompleted: false, text};
    },
    updateTodo = function (id, updates = {}) {
        _todos[id] = Object.assign({}, _todos[id], updates);
    },
    deleteTodo = function (id) {
        delete _todos[id];
    },
    updateAll = function (isSelected) {
        for (let todoId in _todos) {
            updateTodo(todoId, {isCompleted: isSelected});
        }
    };
const TodoStore = Object.assign({}, EventEmitter.prototype, {
    emitChange(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    getAllTodos(){
        return _todos;
    },
    areAllCompleted(){
        for (let todo in _todos) {
            if (!_todos[todo].isCompleted) {
                return false;
            }
        }
        return Object.keys(_todos).length && true;
    },
    dispatcherIndex: Dispatcher.register((action)=> {
        switch (action.actionType) {
            case ToDoConstants.CREATE:
                createTodo(action.text);
                break;
            case ToDoConstants.UPDATE:
                updateTodo(action.id, {text: action.text});
                break;
            case ToDoConstants.TOGGLE:
                updateTodo(action.id, {isCompleted: action.isCompleted});
                break;
            case ToDoConstants.DELETE:
                deleteTodo(action.id);
                break;
            case ToDoConstants.TOGGLE_ALL:
                updateAll(action.isCompleted);
                break;
        }
        TodoStore.emitChange();
        return true;
    })
});

export default TodoStore;