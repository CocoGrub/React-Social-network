import React, {createContext, useReducer} from "react";
import colorReducer, {setCustomAC, setDarkAC, setWhiteAC, setYellowAC, initialState} from "./theme-reducer";

export const ThemeContext = createContext(initialState)

const ThemeState = ({children}) => {
    const [state, dispatch] = useReducer(colorReducer,initialState)
    const {color} = state
    const setDark = () => {
        dispatch(setDarkAC())
    }

    const setWhite = () => {
        dispatch(setWhiteAC())
    }
    const setYellow = () => {
        dispatch(setYellowAC())
    }
    const setCustom = (color) => {
        dispatch(setCustomAC(color))
    }


    return <>


        <ThemeContext.Provider
            value={{color, setDark, setWhite, setYellow, setCustom}}>{children}
        </ThemeContext.Provider>

    </>
}


export default ThemeState;