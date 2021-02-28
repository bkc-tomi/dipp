import React, { useContext, useEffect, useState } from "react";
import Tab from "../common/Tab";
import CheckBox from "../common/CheckBox";
import Button from "../common/Button";
import Alert from "../common/Alert";
import { SiteContext } from "../../App";
import { saveImage } from "../../common_func/Media";

/**
 * 2-Up
 * 見開き (2-Up) はデフォルトモードで、一度に両方の画像を見ることができます。 加えて、画像のサイズがバージョン間で変わっていれば、その違いがそのまま表れます。 このモードではサイズの違いが明瞭にわかります。アセットがより高い解像度にアップグレードされた場合などにサイズが変わります。
 * @param props {  
 * }
 */
const TwoUp = () => {
    // 変数定義 ===========================================================================
    const { state, dispatch } = useContext(SiteContext);
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
    // 機能リスト
    const list = [
        {name: "2-Up" , active: true},
        {name: "Swipe", active: false},
        {name: "Onion", active: false},
    ]
    
    // 関数定義 ==========================================================================
    const changeSameRatio = () => {
        const elem = document.getElementById("two-up-same-ratio");

        var maxSize;
        var oldWidth;
        var oldHeight;
        var newWidth;
        var newHeight;
        if (!elem.checked) { // 判定時点ではcheckedが変更される前に評価が行われるので真偽が逆になる。
            // 比率統一
            maxSize = Math.max(state.new.width, state.new.height);
            newWidth  = Math.round(state.new.width / maxSize * 500);
            newHeight = Math.round(state.new.height / maxSize * 500);
            setOldSize({ width: newWidth, height: newHeight });
            setNewSize({ width: newWidth, height: newHeight });
            // メッセージ追加
            const newMsgs = state.messages;
            newMsgs.push("新しい画像の比率に統一しました。");
            dispatch({ type: "UPDATE_MESSAGE", payload: newMsgs });
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
    }

    // 再レンダー =========================================================================
    useEffect(() => {
        setOldImg(state.old);
        setNewImg(state.new);

    }, [state.old, state.new]);

    // 要素返却 ===========================================================================
    return (
        <div className="grid grid-row-6 bg-gray-800 rounded-lg shadow-md w-full h-full">
            <div className="flex justify-start items-start m-3">
                <Tab items={ list }/>
            </div>
            <div id="two-up-capture" className="row-span-4 flex justify-start items-start">
                <div className="flex justify-center items-center w-1/2 h-full">
                    <img src={ oldImg.src } alt="old" style={ oldSize } />
                </div>
                <div className="flex justify-center items-center w-1/2 h-full">
                    <img src={ newImg.src } alt="new" style={ newSize } />
                </div>
            </div>
            <div className="flex flex-col justify-end items-center">
                <div className="bg-gray-900 rounded-lg w-full grid grid-cols-6">
                    <div className="col-span-2"></div>
                    <div className="col-span-2 flex flex-col justify-center items-center">
                        <CheckBox id="two-up-same-ratio" value="same" cls="m-3" func={ () => changeSameRatio() }>SAME RATIO</CheckBox>
                    </div>
                    <div className="col-span-2">
                        <Button cls="py-2 px-4 m-3 ml-24 flex justify-center items-center" func={() => saveImage("two-up-capture", newImg.name) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                            </svg>
                            <p className="ml-2">SAVE</p>
                        </Button>
                    </div>
                </div>
            </div>
            <Alert />
        </div>
    );
}

export default TwoUp;