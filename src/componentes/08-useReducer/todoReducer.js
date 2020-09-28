// forma de acceder a la accion a partir de objetos
export const todoReducer = (state = [], action) => {

    const mappingActions = {
        'add': [...state, action.payload],
        'delete': state.filter(todo => todo.id !== action.payload),
        'toggle': state.map(todo => {
            if(todo.id === action.payload) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }

            return todo;
        })
    }

    return mappingActions[action.type] || state;
}