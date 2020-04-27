import styles from './style.module.css'
import React from "react";
export const Textarea =({meta,input,...props})=>{

    const red = meta.touched && meta.error
    console.log(red)
    return(<div className={red?styles.formControl:" "} >

            <textarea {...input}{...props}></textarea>
            <div >
                { red && <span>error</span>}
            </div>
        </div>
    )
};
export const Input =({meta,input,...props})=>{

    const red = meta.touched && meta.error
    console.log(red)

    return(<div className={red?styles.formControl:" "} >

            <input {...input}{...props}></input>
            <div >
                { red && <span>error</span>}
            </div>
        </div>
    )
}