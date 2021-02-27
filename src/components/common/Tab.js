import React, { useContext } from "react";
import { SiteContext } from "../../App";

/**
 * タブ要素。
 * @param props {  
 *     tabList : list[ {name, acitive }, ... ],  
 *     children: HTMLElement  
 * }
 */
const Tab = (props) => {
    const { state, dispatch } = useContext(SiteContext);

    const style = {
        width: "390px",
        height: "50px",
    }

    const innerStyle = {
        width: "130px",
        height: "50px",
        transition: "all 300ms 0s ease",
    }
    
    let tabList = <div></div>
    if (props.items) {
        tabList = props.items.map(item => {
            if (item.active) {
                return (
                    <div 
                        className="box-border bg-gray-800 border border-white rounded-lg flex justify-center items-center cursor-pointer"
                        style={ innerStyle }
                        key={ item.name }
                        onClick={ () => dispatch({
                            type: "CHANGE_TYPE",
                            payload: item.name
                        }) }
                    >
                        <p className="text-lime-400 text-2xl font-bold text-center">{ state.type }</p>
                    </div>
                );
            }
            return (
                <div 
                        className="box-border rounded-lg flex justify-center items-center cursor-pointer"
                        style={ innerStyle }
                        key={ item.name }
                        onClick={ () => dispatch({
                            type: "CHANGE_TYPE",
                            payload: item.name
                        }) }
                    >
                        <p className="text-lime-400 text-2xl font-bold text-center">{ item.name }</p>
                    </div>
            );
        })
    }

    return (
        <div className="relative">
            <div 
                className="absolute top-0 left-0 bg-lime-400 rounded-lg box-border"
                style={ style }
            ></div>
            <div 
                className="absolute top-0 left-0 bg-gray-800 bg-opacity-70 rounded-lg box-border flex flex-row"
                style={ style }
            >
                { tabList }
            </div>
        </div>
    );
}

export default Tab;