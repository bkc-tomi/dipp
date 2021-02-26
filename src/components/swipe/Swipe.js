import React, { useContext, useEffect, useState } from "react";
import Tab from "../common/Tab";
import Button from "../common/Button";
import Slider from "../common/Slider";
import { SiteContext } from "../../App";
import NoImage from "../../assets/img/noimage.png";
import NoImage2 from "../../assets/img/noimage2.png";

/**
 * Swipe
 * スワイプでは画像の部分を重ねて表示することができます。 新旧画像間でなされた微妙な色変更がわかりづらいといった場合、 スワイプスライダーを問題の領域までドラッグして注目すると、違いが見えてきます。
 * @param props {  
 * }
 */
const Swipe = () => {
    // 変数定義 ===========================================================================
    const { state } = useContext(SiteContext);
    // 画像情報
    const [oldImg, setOldImg] = useState({ src: NoImage });
    const [newImg, setNewImg] = useState({ src: NoImage2 });
    // 表示サイズ
    const [oldSize, setOldSize]   = useState({
        width : 500,
        height: 500,
    });
    const [newSize, setNewSize]   = useState({
        width : 500,
        height: 500,
    });
    // スワイプサイズ
    const [swipeWidth, setSwipeWidth] = useState(0);
    // 機能リスト
    const list = [
        {name: "2-Up" , active: false},
        {name: "Swipe", active: true},
        {name: "Onion", active: false},
    ]

    // 関数定義 ============================================================================
    // スワイプ ★未実装
    const changeWidth = (num) => {
        console.log(num);
        const size = Math.round(num * 0.01 * newSize.width);
        setSwipeWidth(size);
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
            oldWidth * oldHeight !== newWidth * newHeight
        ) {
            alert("サイズの異なる画像が選択されたので、古い方の画像を新しい方の画像のサイズに変更しています。元の画像からアスペクト比が崩れている可能性があります。");
        }
    }, [newImg, oldImg, state.old, state.new]);
    // 要素返却 ============================================================================
    return (
        <div className="grid grid-row-6 bg-gray-800 rounded-lg shadow-md w-full h-full">
            <div className="flex justify-start items-start m-3">
                <Tab items={ list } />
            </div>
            <div className="row-span-4 justify-start items-center">
            <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center" >
                        <img id="swipe-old-img" src={ oldImg.src } alt="old" style={ oldSize } />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center" >
                        <div id="swipe-new-img" style={{ "width": swipeWidth }}>
                            <img src={ newImg.src } alt="new" style={ newSize } />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end items-center">
                <div className="bg-gray-900 rounded-lg w-full grid grid-cols-6">
                    <div className="col-span-2"></div>
                    <div className="col-span-2 flex flex-col justify-center items-center">
                        <Slider id="swipe" size={400} func={ (num) => changeWidth(num) }>100</Slider>
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