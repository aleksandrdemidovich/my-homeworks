import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: {type: string, payload: string | number }): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
           if(action.payload === 'up') {
               return [...state.sort((a, b) => a.name > b.name ? 1 : -1)];
           }else if(action.payload === 'down'){
               return [...state.sort((a, b) => a.name < b.name ? 1 : -1)];
            }
           return state
        }
        case 'check': {
            return state.filter(u => u.age > action.payload);
        }
        default: return state
    }
}


