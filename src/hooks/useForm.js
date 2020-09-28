import React, { useState } from 'react'

export const useForm = ( initialState = {} ) => {
    const [formState, setFormState] = useState( initialState );

    const reset = () => {
        setFormState(initialState);
    }

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    return {
        handleInputChange,
        formState,
        reset
    }
}
