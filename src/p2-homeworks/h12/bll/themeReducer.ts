const TOGGLE_THEME = "TOGGLE-THEME"

export type ThemeStateType = {
    theme: string
}
const initState = {
    theme: 'red'
};

export const themeReducer = (state = initState, action: changeThemeActionType):ThemeStateType => { // fix any
    switch (action.type) {
        case "TOGGLE-THEME": {
            return {...state,theme: action.theme};
        }
        default: return state;
    }
};

type changeThemeActionType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => {
    return {
        type: TOGGLE_THEME,
        theme
    } as const
}; // fix any