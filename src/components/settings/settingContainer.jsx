import React from 'react';
import MagicContext from '../../redux/reduxContext'
import Settings from './Settings'
const SettingsContainer = ()=>{
    return(<div>
        <MagicContext.Consumer>
        {data =>{
           
            return <Settings color={data}></Settings>
        }
        }
        </MagicContext.Consumer>
    </div>)
}

export default SettingsContainer;