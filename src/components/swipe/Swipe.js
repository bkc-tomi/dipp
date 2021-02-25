import React, { useContext } from "react";
import Tab from "../common/Tab";
import Button from "../common/Button";
import Slider from "../common/Slider";
import GrayText from "../common/GrayText";
import { SiteContext } from "../../App";

/**
 * Swipe
 * スワイプでは画像の部分を重ねて表示することができます。 新旧画像間でなされた微妙な色変更がわかりづらいといった場合、 スワイプスライダーを問題の領域までドラッグして注目すると、違いが見えてきます。
 * @param props {  
 * }
 */
const Swipe = () => {
    // 変数定義 ===========================================================================
    const { state } = useContext(SiteContext);

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
            <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <img src={ state.old ? state.old.src : "" } alt="old" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
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