import React from "react";

/**
 * テキスト要素。主に重要度の低い文章に使用
 * @param props {  
 *     cls     : string(tailwind css class),  
 *     children: HTMLElement  
 * }
 */
const Text = (props) => {
    const applyCls = props.cls
        ? `text-white ${ props.cls }`
        : `text-white`;

    return (
        <div 
            className={ applyCls }
        >
            { props.children }
        </div>
    );
}

export default Text;