import React, { useReducer, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { todoReducer } from './todoReducer';
import { init } from '../../helpers/todosHelpers';
import './styles.css';
import { TodoAddForm } from './components/TodoAddForm';


const initialState = init();

export const TodoApp = () => {
    // const [state, dispatch] = useReducer(reducer, initialArg, init);
    const [todos, dispatch ] = useReducer(todoReducer, initialState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleAddTodo = (description) => {
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleDelete = (id) => {
        dispatch({
            type: 'delete',
            payload: id,
        });
    }

    const handleToogle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        });
    }
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete}
                        handleToogle={handleToogle}
                    />
                </div>

                <div className='col-5'>
                    <TodoAddForm handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}
