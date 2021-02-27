import React, { useContext, useEffect, useState } from "react";
import { SiteContext } from "../../App";

/**
 * ボタン要素。
 * @param props {  
 *     cls     : string(tailwind css class),  
 *     func    : function,  
 *     children: HTMLElement  
 * }
 */
function Alert() {
    // 変数定義 ===========================================================================
    const { state, dispatch } = useContext(SiteContext);

    const [messages, setMessages] = useState(state.messages);
    
    // 関数定義 ===========================================================================
    const closeMessage = (msg) => {
        const newMessages = state.messages.filter(m => m !== msg);
        dispatch({ type: "UPDATE_MESSAGE", payload: newMessages });
    }

    // 再レンダー =========================================================================
    useEffect(() => {
        setMessages(state.messages);
    }, [messages, state.messages]);
    
    // 要素返却 ===========================================================================
    if (messages.length > 0) {
        return (
            <div className="fixed top-3 right-3 z-50">
                    {
                        messages.map((msg) => {
                            return (
                                <div 
                                    className="bg-lime-400 text-white rounded-lg p-3 my-3 shadow-lg"
                                    style={{ width: "500px"}}
                                    key={ msg }
                                >
                                <div className="grid grid-cols-6">
                                    <div className="col-span-5">
                                        { msg }
                                    </div>
                                        <div className="flex justify-center items-center">
                                            <button
                                                onClick={() => closeMessage(msg)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
            </div>
        );
    }
    return <div className="fixed"></div>
}

export default Alert;