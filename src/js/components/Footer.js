/**
 * Created by zeelshah on 08/07/16.
 */
import React from 'react';
export default (props) => {
    let todosCount = Object.keys(props.allTodos).length,
        message = todosCount ? `${todosCount} ${(todosCount == 1) ? 'item' : 'items'} present` : 'No items present';
    return <div id="todofooter">{message}</div>
}
