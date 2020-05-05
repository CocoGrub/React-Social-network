import React,{useState} from "react";
import {thunkSetStatus, thunkUpdateStatus} from "../../../redux/ProfileReducer";

const  StatusHook =(props)=> {
const [editMode, setMode] = useState(false)
const [status,setStatus]=useState(props.status)
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // };

    const setEditModeTrue=()=>{
        setMode(true)
    }
    const setEditModeFalse=()=>{
        setMode(false)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])//synhronization

    const setStatusHook=(e)=>{
        setStatus(e.currentTarget.value)
        props.thunkUpdateStatus(status)
    }
        if (!editMode) { 

            return <span onDoubleClick={setEditModeTrue}>{props.status}</span>

        } else {
            return <>
                <div>

                    <input autoFocus={true} onBlur={setEditModeFalse} value={status}
                           onChange={setStatusHook}/>

                </div>

            </>
        }

    }


export default StatusHook
