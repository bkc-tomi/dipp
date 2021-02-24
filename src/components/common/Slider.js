import React, { useState } from "react";

/**
 * スライダー　★未実装
 * @param props {  
 *     cls     : string(tailwind css class),  
 *     id      : string,  
 *     name    : string,  
 *     children: HTMLElement  
 * }
 */
const Slider = (props) => {
    const [value, setValue] = useState(50);

    const slide = () => {
        const slider = document.getElementById(props.id);
        setValue(slider.value);
    }
    var width = {
        width: value + "%",
    }

    const applyCls = `bg-lime-400 h-1.5 ${ props.cls }`;
    return (
        <div>
            <div className="hidden">
                <input 
                    type="range" id={ props.id } 
                    name={ props.name } 
                    min="0" max="100" 
                    onChange={ () => slide() }
                />
            </div>
            <div className="bg-black rounded-full overflow-hidden">
                <div 
                    className={ applyCls }
                    style={ width }
                    role="progressbar"
                ></div>
            </div>
            <label for={ props.name }>{ props.children }</label>
        </div>
    );
}

export default Slider;