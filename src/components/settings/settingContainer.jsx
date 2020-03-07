import React from 'react';
import MagicContext from '../../redux/reduxContext'
import Settings from './Settings'
const SettingsContainer = (props)=>{
    console.log(props);
    
    return(<div>
        <MagicContext.Consumer>
        {data =>{
           
            return <Settings store={data}></Settings>
        }
        }
        </MagicContext.Consumer>
    </div>)
}

export default SettingsContainer;