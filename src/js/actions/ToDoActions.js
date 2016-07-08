/**
 * Created by zeelshah on 08/07/16.
 */
import ToDoConstants from '../constants/ToDoConstants';
import Dispatcher from '../dispatcher/dispatcher';
export default {
    CREATE(text){
        Dispatcher.dispatch({
            actionType: ToDoConstants.CREATE,
            text
        });
    },
    UPDATE(id, text){
        Dispatcher.dispatch({
            actionType: ToDoConstants.UPDATE,
            id,
            text
        });
    },
    DELETE(id){
        Dispatcher.dispatch({
            actionType: ToDoConstants.DELETE,
            id
        });
    },
    TOGGLE_ALL(isCompleted){
        Dispatcher.dispatch({
            actionType: ToDoConstants.TOGGLE_ALL,
            isCompleted
        });
    },
    TOGGLE(id, isCompleted){
        Dispatcher.dispatch({
            actionType: ToDoConstants.TOGGLE,
            id,
            isCompleted
        });
    }
};