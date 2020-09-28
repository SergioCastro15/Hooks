import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

const initialState = {
    name: '',
    email: '' ,
    password: ''
}

export const FormWithCustomHook = () => {
    const { handleInputChange, formState} = useForm( initialState )
    const { name, email, password } = formState;

    useEffect(() => {
        console.log('Email Cambio');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formState", formState)
    }

    return (
        <form onSubmit={ handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className='form-group'>
                <input 
                    type='text' 
                    name='name' 
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input 
                    type='text' 
                    name='email' 
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input 
                    type='password' 
                    name='password' 
                    className='form-control'
                    placeholder='******'
                    value={password}
                    onChange={ handleInputChange }
                />
            </div>

            <button type='submit' className='btn btn-primary'> Guardar </button>
        </form>
    )
}
