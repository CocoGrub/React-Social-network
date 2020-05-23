import React, {useContext} from "react";
import {ThemeContext} from "../../context/theme-state";

const Theme=({children})=>{
    const {color}=useContext(ThemeContext)
    return       <div className='container ' style={{background: color}}>
        {children}
    </div>
}

export default Theme