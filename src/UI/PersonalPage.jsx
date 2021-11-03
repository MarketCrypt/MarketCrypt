import React from "react";
import Data from './Data'
import Prices from "./Prices";

const PersonalPage = () => {
    return(
        <div>
            <h1>User is logged in</h1>
            <Data/>
            <Prices />
        </div>
    )
}

export default PersonalPage