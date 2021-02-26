import React, { useContext, useEffect, useState } from "react";
import Tab from "../common/Tab";
import Button from "../common/Button";
import Slider from "../common/Slider";
import { SiteContext } from "../../App";
import NoImage from "../../assets/img/noimage.png";

/**
 * Onion
 * オニオンスキンは、要素の移動量が小さくてわかりづらい場合に役立ちます。 ほとんど変わっていないように見えるアイコンが、もしかしたら 2 ピクセルほど左にずらされているかもしれません。その場合、 スライダーで不透明度を調節して、それが動くかどうかを見てください。
 * @param props {  
 * }
 */
const Onion = () => {
    // 変数定義 ===========================================================================
    const { state } = useContext(SiteContext);
    const [oldImg, setOldImg] = useState({ src: NoImage });
    const [newImg, setNewImg] = useState({ src: NoImage });
    const [oldSize, setOldSize]   = useState({
        width : 500,
        height: 500,
    });
    const [newSize, setNewSize]   = useState({
        width : 500,
        height: 500,
    });
    // 機能リスト
    const list = [
        {name: "2-Up" , active: false},
        {name: "Swipe", active: false},
        {name: "Onion", active: true},
    ]

    // 関数定義 ===========================================================================
    // 透明度変更
    const changeOpacity = (num) => {
        const elem = document.getElementById("onion-new-img");
        elem.style.opacity = num / 100;
    }
    
    // 再レンダー =========================================================================
    useEffect(() => {
        // 古い画像取得
        let oldWidth  = 0;
        let oldHeight = 0;
        if (state.old) {
            setOldImg(state.old);
            var tempWidth  = state.old.width;
            var tempHeight = state.old.height;
            if (tempWidth > tempHeight) {
                oldWidth  = Math.round(tempWidth / tempWidth * 500);
                oldHeight = Math.round(tempHeight / tempWidth * 500);
            } else {
                oldWidth  = Math.round(tempWidth / tempHeight * 500);
                oldHeight = Math.round(tempHeight / tempHeight * 500);
            }
        }
        // 新しい画像取得
        let newWidth  = 0;
        let newHeight = 0;
        if (state.new) {
            setNewImg(state.new);
            tempWidth  = state.new.width;
            tempHeight = state.new.height;
            if (tempWidth > tempHeight) {
                newWidth  = Math.round(tempWidth / tempWidth * 500);
                newHeight = Math.round(tempHeight / tempWidth * 500);
            } else {
                newWidth  = Math.round(tempWidth / tempHeight * 500);
                newHeight = Math.round(tempHeight / tempHeight * 500);
            }
        }
        // サイズ更新
        if (oldWidth * oldHeight > 0) {
            setOldSize({ width: oldWidth, height: oldHeight});
            setNewSize({ width: oldWidth, height: oldHeight});
        }
        if (newWidth * newHeight > 0) {
            setOldSize({ width: newWidth, height: newHeight});
            setNewSize({ width: newWidth, height: newHeight});
        }
        if (
            oldWidth * oldHeight > 0 &&
            newWidth * newHeight > 0 &&
            oldWidth * oldHeight != newWidth * newHeight
        ) {
            alert("サイズの異なる画像が選択されたので、古い方の画像を新しい方の画像のサイズに変更しています。元の画像からアスペクト比が崩れている可能性があります。");
        }
    }, [newImg, oldImg, state.old, state.new]);

    // 要素返却 ===========================================================================
    return (
        <div className="grid grid-row-6 bg-gray-800 rounded-lg shadow-md w-full h-full">
            <div className="flex justify-start items-start m-3">
                <Tab items={ list }/>
            </div>
            <div className="row-span-4 justify-start items-center">
                <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <img src={ oldImg.src } alt="old" style={ oldSize } />
                    </div>
                    <div 
                        id="onion-new-img"
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0"
                    >
                        <img src={ newImg.src } alt="new" style={ newSize } />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end items-center">
                <div className="bg-gray-900 rounded-lg w-full grid grid-cols-6">
                    <div className="col-span-2"></div>
                    <div className="col-span-2 flex flex-col justify-center items-center">
                        <Slider id="onion" func={ (num) => changeOpacity(num) } size="500px">100</Slider>
                    </div>
                    <div className="col-span-2">
                        <Button cls="py-2 px-4 m-3 ml-24 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                            </svg>
                            <p className="ml-2">SAVE</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Onion;