import React from "react";
import Tab from "../common/Tab";
import Button from "../common/Button";
import Slider from "../common/Slider";

/**
 * Onion
 * オニオンスキンは、要素の移動量が小さくてわかりづらい場合に役立ちます。 ほとんど変わっていないように見えるアイコンが、もしかしたら 2 ピクセルほど左にずらされているかもしれません。その場合、 スライダーで不透明度を調節して、それが動くかどうかを見てください。
 * @param props {  
 *     children: HTMLElement  
 * }
 */
const Onion = (props) => {

    const list = [
        {name: "2-Up", active: false},
        {name: "Swipe", active: false},
        {name: "Onion", active: true},
    ]

    return (
        <div className="grid grid-row-6 bg-gray-800 rounded-lg shadow-md w-full h-full">
            <div className="flex justify-start items-start m-3">
                <Tab items={ list }/>
            </div>
            <div className="row-span-4 justify-start items-center">
                
            </div>
            <div className="flex justify-center items-end">
                <div className="bg-gray-900 rounded-lg w-full grid grid-cols-6">
                    <div className="col-span-2"></div>
                    <div className="col-span-2 flex flex-col justify-center items-center">
                        <Slider id="onion" size="500px">100</Slider>
                    </div>
                    <div className="col-span-2">
                        <Button cls="py-2 px-4 m-3 ml-24">SAVE</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Onion;