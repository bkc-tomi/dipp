import React, { useState, useContext, useEffect } from "react";
import Thumbnail from "../common/Thumbnail";
import LimeText from "../common/LimeText";
import Text from "../common/Text";
import GrayText from "../common/GrayText";
import { SiteContext } from "../../App";
import { GetImage } from "../../common_func/Media";

/**
 * 画像情報表示エリア
 * @param props {  
 *     type    : string(OLD or NEW),  
 *     img     : string(img path),  
 *     imgPath : string(img name),  
 *     children: HTMLElement  
 * }
 */
const ImageList = (props) => {
    // 保持するステート定義 =========================================================
    const { state, dispatch } = useContext(SiteContext);
    const [img, setImg] = useState(null);

    useEffect(() => {
        switch (props.type) {
            case "OLD":
                if (state.old) {
                    setImg(state.old);
                }
                return;
            case "NEW":
                if (state.new) {
                    setImg(state.new);
                }
                return;
            default:
                return
        }
    }, [setImg, props.type, state.new, state.old]);

    // ドラッグ＆ドロップで画像読み込み ===============================================
    const drop = async(e) => {
        e.preventDefault();
        e.stopPropagation();

        // ファイル取得 ===========================================================
        const files = e.dataTransfer.files;

        // 画像情報取得 ============================================================
        const image = await GetImage(files);
        if (image.err) {
            var msg = `
error message: ${ image.errMsg }
画像ファイル意外の物が選択された可能性があります。
詳しくはコンソールを参照してください。`;
            alert(msg);
            return;
        }

        // グローバルステートに追加 ==================================================
        switch (props.type) {
            case "OLD":
                if (state.new) {
                    // 新しい画像がある場合は比較してセット
                    const newImg = state.new;
                    if (image.update_at.getTime() > newImg.update_at.getTime()) {
                        dispatch({ type: "CHANGE_OLD", payload: newImg });
                        dispatch({ type: "CHANGE_NEW", payload: image });
                    } else {
                        dispatch({ type: "CHANGE_OLD", payload: image });
                        dispatch({ type: "CHANGE_NEW", payload: newImg });
                    }
                } else {
                    // 古い画像にセット
                    dispatch({ type: "CHANGE_OLD", payload: image });
                }
                return;
                case "NEW":
                if (state.old) {
                    // 古い画像がある場合は比較してセット
                    const oldImg = state.old;
                    if (image.update_at.getTime() > oldImg.update_at.getTime()) {
                        dispatch({ type: "CHANGE_OLD", payload: oldImg });
                        dispatch({ type: "CHANGE_NEW", payload: image });
                    } else {
                        dispatch({ type: "CHANGE_OLD", payload: image });
                        dispatch({ type: "CHANGE_NEW", payload: oldImg });
                    }
                } else {
                    // 新しい画像にセット
                    dispatch({ type: "CHANGE_OLD", payload: image });
                }
                return;
            default:
                return;
        }
    }
    // イベントのキャンセル =============================================================
    const dragover = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    // 要素の返却 =====================================================================
    if (img) {
        // 画像がある場合
        return (
            <div className="bg-gray-800 rounded-lg shadow-md p-1">
                <div 
                    className="w-full p-2 grid grid-cols-6 rounded-lg border border-gray-400 border-dashed"
                    onDrop={ (e) => drop(e) }
                    onDragOver={ (e) => dragover(e) }
                >
                    <div className="justify-start items-center overflow-hidden">
                        <LimeText cls="text-2xl font-extrabold">{ props.type }</LimeText>
                    </div>
                    <div className="flex justify-start items-center">
                        <Thumbnail src={ img.src } alt={　img.name } size="80" />
                    </div>
                    <div className="col-span-4 justify-start items-center overflow-hidden">
                        <Text>{ img.name }</Text>
                        <GrayText>width: { img.width } - height: { img.height }</GrayText>
                        <GrayText>update: { img.update_at.toLocaleString("ja") }</GrayText>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-gray-800 rounded-lg shadow-md p-1">
            <div 
                className="w-full p-2 grid grid-cols-6 rounded-lg border border-dashed"
                onDrop={ (e) => drop(e) }
                onDragOver={ (e) => dragover(e) }
            >
                <div className="justify-start items-center overflow-hidden">
                    <LimeText cls="text-2xl font-extrabold">{ props.type }</LimeText>
                </div>
                <div className="col-span-5 justify-center items-center overflow-hidden">
                    <GrayText cls="text-3xl my-5">Drug and drop image here.</GrayText>
                </div>
            </div>
        </div>
    );
}

export default ImageList;