import React from "react";
import Tab from "../common/Tab";
import Button from "../common/Button";
import Slider from "../common/Slider";

/**
 * Swipe
 * スワイプでは画像の部分を重ねて表示することができます。 新旧画像間でなされた微妙な色変更がわかりづらいといった場合、 スワイプスライダーを問題の領域までドラッグして注目すると、違いが見えてきます。
 * @param props {  
 *     children: HTMLElement  
 * }
 */
const Swipe = (props) => {
    const list = [
        {name: "2-Up", active: false},
        {name: "Swipe", active: true},
        {name: "Onion", active: false},
    ];

    return (
        <div className="grid grid-row-6 bg-gray-800 rounded-lg shadow-md w-full h-full">
            <div className="flex justify-start items-start m-3">
                <Tab items={ list } />
            </div>
            <div className="row-span-4 justify-start items-center">
                
            </div>
            <div className="flex justify-center items-end">
                <div className="bg-gray-900 rounded-lg w-full grid grid-cols-6">
                    <div className="col-span-2"></div>
                    <div className="col-span-2 flex flex-col justify-center items-center">
                        <Slider id="swipe" size={400}>100</Slider>
                    </div>
                    <div className="col-span-2">
                        <Button cls="py-2 px-4 m-3 ml-24">SAVE</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Swipe;