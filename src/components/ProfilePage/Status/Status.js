
import React from "react";
class MyPageStatus extends React.Component{
    state={
        editMode:false
    }

    activateMode=()=>{
        this.setState({
            editMode:true
        })
    }

    deActivateMode=()=>{
        this.setState({
            editMode:false
        })
    }
    render() {
        debugger
    if(!this.state.editMode){

        return  <span onDoubleClick={this.activateMode} >{this.props.status}</span>

    }else {
        return <>
            <div>

                <input  autoFocus={true} onBlur={this.deActivateMode} value={this.props.status}/>

            </div>

        </>
    }

    }

}

export default MyPageStatus
