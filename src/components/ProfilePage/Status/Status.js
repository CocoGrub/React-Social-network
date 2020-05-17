import React from "react";


class Status extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })

    }

    deActivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.thunkUpdateStatus(this.state.status)
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {

        if (!this.state.editMode) {

            return <span onDoubleClick={this.activateMode}>{this.props.status}</span>

        } else {
            return <>
                <div>

                    <input autoFocus={true} onBlur={this.deActivateMode} value={this.state.status}
                           onChange={this.onStatusChange}/>

                </div>

            </>
        }

    }

}

export default Status
