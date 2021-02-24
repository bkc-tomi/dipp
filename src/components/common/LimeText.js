import React from "react";

/**
 * テキスト要素。主に重要度の高い文章に使用
 * @param props {  
 *     cls     : string(tailwind css class),  
 *     children: HTMLElement  
 * }
 */
const LimeText = (props) => {
    const applyCls = props.cls
        ? `text-lime-400 ${ props.cls }`
        : `text-lime-400`;
        
    return (
        <div 
            className={ applyCls }
        >
            { props.children }
        </div>
    );
}

export default LimeText;