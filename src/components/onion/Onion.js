import React, { useContext } from "react";
import Tab from "../common/Tab";
import Button from "../common/Button";
import Slider from "../common/Slider";
import { SiteContext } from "../../App";

/**
 * Onion
 * オニオンスキンは、要素の移動量が小さくてわかりづらい場合に役立ちます。 ほとんど変わっていないように見えるアイコンが、もしかしたら 2 ピクセルほど左にずらされているかもしれません。その場合、 スライダーで不透明度を調節して、それが動くかどうかを見てください。
 * @param props {  
 * }
 */
const Onion = () => {
    // 変数定義 ===========================================================================
    const { state } = useContext(SiteContext);

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
                <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <img src={ state.old ? state.old.path : "" } alt="old" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-50">
                        <img src={ state.new ? state.new.path : "" } alt="new" />
                    </div>
                </div>
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