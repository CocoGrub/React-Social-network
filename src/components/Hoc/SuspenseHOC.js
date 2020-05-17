import React from "react";
import Preloader from "../../common/preloader/Preloader";
import {Route} from "react-router-dom";

const WithSuspenseHOC=(Component)=>{
    return (props)=>{
        return <React.Suspense fallback={<div>Loading...</div>}> <Component {...props}/>
        </React.Suspense>
    }
}

export default WithSuspenseHOC;