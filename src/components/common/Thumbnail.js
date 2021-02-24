import React from "react";

/**
 * 画像サムネイル
 * @param props {  
 *     cls     : string(tailwind css class),  
 *     src     : string(image source path),  
 *     alt     : string(image description),  
 *     children: HTMLElement  
 * }
 */
const Thumbnail = (props) => {
    const applyCls = props.cls
        ? `rounded-lg ${ props.cls }`
        : `rounded-lg`;

    var size = {
        width: props.size + "px",
        height: props.size + "px",
    }
    if (props.src) {
        return (
            <img 
                className={ applyCls }
                style={ size }
                src={ props.src }
                alt={ props.alt }
            />
        );
    }
    return (
        <div 
            className="rounded-lg bg-gray-200 text-gray-400 flex flex-col justify-center items-center text-center text-xs"
            style={ size }
        >
            <svg xmlns="http://www.w3.org/2000/svg" width={ props.size * 0.4 } height={ props.size * 0.4 } fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
            </svg>
            NO IMAGE
        </div>
    )
}

export default Thumbnail;