import React from 'react'
import { CounterApp } from './componentes/01-useState/CounterApp'
import { CounterWithCustomHook } from './componentes/01-useState/CounterWithCustomHook'
import { SimpleForm } from './componentes/02-useEffect/SimpleForm'
import { FormWithCustomHook } from './componentes/02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './componentes/03-examples/MultipleCustomHooks';
import { FocusScreen } from './componentes/04-useRef/FocusScreen';
import { RealExampleRef } from './componentes/04-useRef/RealExampleRef';
import { Memorize } from './componentes/06-memos/Memorize';
import { MemoHook } from './componentes/06-memos/MemoHook'
import { CallbackHooks } from './componentes/07-useCallback/CallbackHooks'
import { Padre } from './componentes/tarea-memo/Padre'
import { TodoApp } from './componentes/08-useReducer/TodoApp'

export const HookApp = () => {
    return (
        <div>
            {/* <CounterApp /> */}
            {/* <FormWithCustomHook /> */}
            {/* <MultipleCustomHooks /> */}
            <TodoApp />
        </div>
    )
}