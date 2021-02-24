import React from "react";

/**
 * ボタン要素。
 * @param props {  
 *     cls     : string(tailwind css class),  
 *     func    : function,  
 *     children: HTMLElement  
 * }
 */
function Button(props) {
    const applyCls = props.cls
        ? `bg-transparent border border-lime-400 text-lime-400 rounded-md ${ props.cls }`
        : `bg-transparent border border-lime-400 text-lime-400 rounded-md`;

    return (
        <button 
            className={ applyCls }
            onClick={ props.func ? () => props.func() : () => {} }
        >
            { props.children }
        </button>
    );
}

export default Button;