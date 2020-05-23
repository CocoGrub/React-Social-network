import React, {useContext} from 'react';

import {ThemeContext} from '../../context/theme-state'

const Settings = () => {

    const data = useContext(ThemeContext);

    const {color, setDark, setWhite, setYellow, setCustom} = data

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e)
    //     setCustom(e.target.value)
    //
    // }

    return (
        <div style={{maxWidth:"40rem"}}>
    <h1>You can change app color there</h1>
            <p className="mb-0">current color is {color}  </p>
            <ul className={"list-group list-group-flush"} >
                <li  className="list-group-item">
                    <button className="btn btn-dark" onClick={setDark}>setDark</button>
                </li>
                <li  className="list-group-item">
                    <button className="btn btn-light" onClick={setWhite}>setWhite</button>
                </li>
                <li  className="list-group-item">
                    <button className="btn btn-warning" onClick={setYellow}>setYellow</button>
                </li>
                {/*<li  className="list-group-item">*/}
                {/*    <button className="btn btn-outline-primary" onClick={setCustom}>setCustom</button>*/}
                {/*</li>*/}
            </ul>

            {/*<div>*/}
            {/*    <form onSubmit={handleSubmit}>*/}
            {/*        <label htmlFor="fullName">Or choose what you like</label>*/}
            {/*        <input id="favcolor"*/}
            {/*            type="color"*/}
            {/*            value={"#ff0000"}*/}
            {/*               name="favcolor" />*/}
            {/*        <input type="submit" value="Submit" />*/}
            {/*    </form>*/}
            {/*</div>*/}
            {/*/!*<form onSubmit={setCustom()}>*!/*/}
            {/*/!*    <label htmlFor="favcolor">Select your favorite color:</label>*!/*/}
            {/*/!*    <input type="color" id="favcolor" name="favcolor" value="#ff0000">*!/*/}
            {/*/!*        <input type="submit" value="Submit">*!/*/}
            {/*/!*</form>*!/*/}


        </div>
    )


}


export default Settings