import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos }) => {
    return (
        <div>
            {todos.map(todo => {
                return (
                    <ToDo todo={todo}/>
                )
            })
            
            }
        </div>
    );

};

export default ToDoList;