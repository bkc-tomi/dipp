import React from "react";


/**
 * 画像情報表示エリア
 * @param props {  
 *     children: HTMLElement  
 * }
 */
const TwoUp = (props) => {

    return (
        <div className="w-full p-2 grid grid-cols-6 bg-gray-800 rounded-lg shadow-md w-full h-full">
            <div className="flex justify-start items-center">
                
            </div>
            <div className="col-span-4 justify-start items-center">
                
            </div>
            <div className="flex justify-center items-center">
                
            </div>
        </div>
    );
}

export default TwoUp;