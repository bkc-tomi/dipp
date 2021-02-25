import React, { useContext } from "react";
import Tab from "../common/Tab";
import Button from "../common/Button";
import GrayText from "../common/GrayText";
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

    // 関数定義 ===========================================================================
    const changeOpacity = (num) => {
        const elem = document.getElementById("onion-new-img");
        elem.style.opacity = num;
    }

    // 要素返却 ===========================================================================
    return (
        <div className="grid grid-row-6 bg-gray-800 rounded-lg shadow-md w-full h-full">
            <div className="flex justify-start items-start m-3">
                <Tab items={ list }/>
            </div>
            <div className="row-span-4 justify-start items-center">
                <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <img src={ state.old ? state.old.src : "" } alt="old" />
                    </div>
                    <div 
                        id="onion-new-img"
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
                    >
                        <img src={ state.new ? state.new.src : "" } alt="new" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end items-center">
                <div className="grid grid-cols-2 w-full mb-3">
                    <div className="flex flex-col justify-center items-center text-gray-400">
                        <GrayText>width: { state.old ? state.old.width : "" }</GrayText>
                        <GrayText>height: { state.old ? state.old.height : "" }</GrayText>
                    </div>
                    <div className="flex flex-col justify-center items-center text-gray-400">
                        <GrayText>width: { state.new ? state.new.width : "" }</GrayText>
                        <GrayText>height: { state.new ? state.new.height : "" }</GrayText>
                    </div>
                </div>
                <div className="bg-gray-900 rounded-lg w-full grid grid-cols-6">
                    <div className="col-span-2"></div>
                    <div className="col-span-2 flex flex-col justify-center items-center">
                        <Slider id="onion" func={ (num) => changeOpacity(num) } size="500px">100</Slider>
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