import React, { useState } from "react";

/**
 * チェックボックス。
 * @param props {  
 *     id      : string,  
 *     name    : string, number,  
 *     value   : string, number,  
 *     func    : function,  
 *     children: HTMLElement  
 * }
 */
const CheckBox = (props) => {
    const [checked, setChecked] = useState(false);

    const changeCheck = () => {
        if (!checked) {
            setChecked(true);
            if (props.func) {
                props.func();
            }
        } else {
            setChecked(false);
        }
    }

    if (!checked) {
        return (
            <div className="inline-block px-3 cursor-pointer text-lime-400 border border-lime-400 bg-opacity-0" onClick={ () => changeCheck() }>
                <div className="hidden">
                    <input type="checkbox" id={ props.id } name={ props.name } value={ props.value } checked={ checked }/>
                </div>
                <label className="flex flex-row items-center">
                    <div className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                    </svg>
                    </div>
                    <div className="text-lg">
                    { props.children }
                    </div>
                </label>
            </div>
        );
    } else {
        return (
            <div className="inline-block px-3 cursor-pointer text-white bg-lime-400 border border-lime-400" onClick={ () => changeCheck() }>
                <div className="hidden">
                    <input type="checkbox" name={ props.name } value={ props.value } checked={ checked }/>
                </div>
                <label className="flex flex-row items-center">
                    <div className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </div>
                    <div className="text-lg">
                    { props.children }
                    </div>
                </label>
            </div>
        );
    }
}

export default CheckBox;