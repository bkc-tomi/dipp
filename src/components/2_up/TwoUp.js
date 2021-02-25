import React, { useContext } from "react";
import Tab from "../common/Tab";
import CheckBox from "../common/CheckBox";
import Button from "../common/Button";
import { SiteContext } from "../../App";

/**
 * 2-Up
 * 見開き (2-Up) はデフォルトモードで、一度に両方の画像を見ることができます。 加えて、画像のサイズがバージョン間で変わっていれば、その違いがそのまま表れます。 このモードではサイズの違いが明瞭にわかります。アセットがより高い解像度にアップグレードされた場合などにサイズが変わります。
 * @param props {  
 * }
 */
const TwoUp = () => {
    // 変数定義 ===========================================================================
    const { state } = useContext(SiteContext);
    
    const list = [
        {name: "2-Up", active: true},
        {name: "Swipe", active: false},
        {name: "Onion", active: false},
    ]
    
    // 要素返却 ===========================================================================
    return (
        <div className="grid grid-row-6 bg-gray-800 rounded-lg shadow-md w-full h-full">
            <div className="flex justify-start items-start m-3">
                <Tab items={ list }/>
            </div>
            <div className="row-span-4 flex justify-start items-start ">
                <div className="flex justify-center items-center w-1/2 h-full">
                    <img src={ state.old ? state.old.path : "" } alt="old" />
                </div>
                <div className="flex justify-center items-center w-1/2 h-full">
                    <img src={ state.new ? state.new.path : "" } alt="new" />
                </div>
            </div>
            <div className="flex justify-center items-end">
                <div className="bg-gray-900 rounded-lg w-full flex justify-center">
                    <div className="">
                        <CheckBox cls="m-3">SAME RATIO</CheckBox>
                        <Button cls="py-2 px-4 m-3 ml-24">SAVE</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwoUp;