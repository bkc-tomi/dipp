import React, { useState } from "react";

/**
 * スライダー　★未実装
 * @param props {  
 *     id      : string,  
 *     name    : string,  
 *     children: HTMLElement  
 * }
 */
const Slider = (props) => {
    const [value, setValue] = useState(0);

    const slide = (e) => {
        const slider = document.getElementById(props.id);
        setValue(slider.value);
    }

    var rangeStyle = {
        width: "100%",
    }
    return (
        <div className="w-full">
            <div style={ rangeStyle }>
                <input 
                    type="range" id={ props.id } 
                    className="border border-gray-400 rounded-full"
                    name={ props.name } 
                    min="0" max="100"
                    value={ value }
                    onChange={ () => slide() }
                />
            </div>
            <div className="w-full flex justify-end">
                <label className="text-gray-400" for={ props.name }>{ value } / { props.children }</label>
            </div>
        </div>
    );
}

export default Slider;