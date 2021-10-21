export type initStateType = {
    isLoading: boolean
}
const initState: initStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.loading}
        }
        default:
            return state
    }
}

export type loadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => {
    return {
        type: 'SET-LOADING',
        loading
    } as const
} // fix any
