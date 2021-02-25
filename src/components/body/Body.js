import React, { useContext } from "react";
import TwoUp from "../2_up/TwoUp";
import Swipe from "../swipe/Swipe";
import Onion from "../onion/Onion";
import { SiteContext } from "../../App";

const Body = () => {
    const { state } = useContext(SiteContext);
    
    switch (state.type) {
        case "Swipe":
            return (
                <Swipe />
            );
        case "Onion":
            return (
                <Onion />
            );
        default:
            return (
                <TwoUp />
            );
    }
}

export default Body;