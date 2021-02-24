import React from "react";

/**
 * テキスト要素。主に重要度の低い文章に使用
 * @param props {  
 *     cls     : string(tailwind css class),  
 *     children: HTMLElement  
 * }
 */
const GrayText = (props) => {
    const applyCls = props.cls
        ? `text-gray-400 ${ props.cls }`
        : `text-gray-400`;
    return (
        <div 
            className={ applyCls }
        >
            { props.children }
        </div>
    );
}

export default GrayText;