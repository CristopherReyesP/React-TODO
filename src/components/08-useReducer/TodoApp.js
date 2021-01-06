import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
}

export const TodoApp = () => {

    const [todo, dispatch ] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ( {todo.length} )</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        todo={todo}
                    />

                </div>
                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}
