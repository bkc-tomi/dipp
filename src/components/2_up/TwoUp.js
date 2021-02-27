import React, { useContext, useEffect, useState } from "react";
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
    // 画像情報
    const [oldImg, setOldImg] = useState(state.old);
    const [newImg, setNewImg] = useState(state.new);
    // 表示サイズ
    const [oldSize, setOldSize]   = useState({
        width : state.old.width,
        height: state.old.height,
    });
    const [newSize, setNewSize]   = useState({
        width : state.new.width,
        height: state.new.height,
    });

    // 比率フラグ
    const [ratioFlug, setRatioFlug] = useState(false);

    // 機能リスト
    const list = [
        {name: "2-Up" , active: true},
        {name: "Swipe", active: false},
        {name: "Onion", active: false},
    ]
    
    // 関数定義 ==========================================================================
    const changeSameRatio = () => {
        const elem = document.getElementById("two-up-same-ratio");
        
        if (elem.checked) {
            setRatioFlug(true);
        } else {
            setRatioFlug(false);
        }
    }

    // 再レンダー =========================================================================
    useEffect(() => {
        setOldImg(state.old);
        setNewImg(state.new);

        var maxSize;
        var oldWidth;
        var oldHeight;
        var newWidth;
        var newHeight;

        const elem = document.getElementById("two-up-same-ratio");
        if (elem.checked) {
            // 比率統一
            maxSize = Math.max(state.new.width, state.new.height);
            newWidth  = Math.round(state.new.width / maxSize * 500);
            newHeight = Math.round(state.new.height / maxSize * 500);
            setOldSize({ width: newWidth, height: newHeight });
            setNewSize({ width: newWidth, height: newHeight });
            alert("新しい画像の比率に統一しました。");
        } else {
            // 比率統一しない
            maxSize = Math.max(state.old.width, state.old.height, state.new.width, state.new.height);
            oldWidth  = Math.round(state.old.width / maxSize * 500);
            oldHeight = Math.round(state.old.height / maxSize * 500);
            newWidth  = Math.round(state.new.width / maxSize * 500);
            newHeight = Math.round(state.new.height / maxSize * 500);
            setOldSize({ width: oldWidth, height: oldHeight });
            setNewSize({ width: newWidth, height: newHeight });
        }

    }, [ratioFlug, state.old, state.new]);

    // 要素返却 ===========================================================================
    return (
        <div className="grid grid-row-6 bg-gray-800 rounded-lg shadow-md w-full h-full">
            <div className="flex justify-start items-start m-3">
                <Tab items={ list }/>
            </div>
            <div className="row-span-4 flex justify-start items-start ">
                <div className="flex justify-center items-center w-1/2 h-full">
                    <img src={ oldImg.src } alt="old" style={ oldSize } />
                </div>
                <div className="flex justify-center items-center w-1/2 h-full">
                    <img src={ newImg.src } alt="new" style={ newSize } />
                </div>
            </div>
            <div className="flex flex-col justify-end items-center">
                <div className="bg-gray-900 rounded-lg w-full flex justify-center">
                    <div className="">
                        <CheckBox id="two-up-same-ratio" value="same" cls="m-3" func={ () => changeSameRatio() }>SAME RATIO</CheckBox>
                        <Button cls="py-2 px-4 m-3 ml-24">SAVE</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwoUp;