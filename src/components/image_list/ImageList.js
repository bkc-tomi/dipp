import React, { useState, useContext } from "react";
import Button from "../common/Button";
import Thumbnail from "../common/Thumbnail";
import LimeText from "../common/LimeText";
import Text from "../common/Text";
import { SiteContext } from "../../App";
import LoadImage from "../../common_func/LoadImage";

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
    const { dispatch } = useContext(SiteContext);
    const [img, setImg] = useState(null);

    // ドラッグ＆ドロップで画像読み込み ===============================================
    const drop = async(e) => {
        e.preventDefault();
        e.stopPropagation();

        // ファイル取得 ===========================================================
        const f = e.dataTransfer.files;
        const file = f[0];
        if (!file || file.type.indexOf('image/') < 0) {
            return;
        }
        
        // 画像情報取得 ============================================================
        let image;
        await (async() => {
            const res = await LoadImage(file);
            console.log(res);
            image = {
                src: file.path,
                name: file.name,
                width: res.width,
                height: res.height,
            }
        })();

        // グローバルステートに追加 ==================================================
        switch (props.type) {
            case "OLD":
                dispatch({
                    type: "CHANGE_OLD",
                    payload: image,
                });
                setImg(image);
                return;
            case "NEW":
                dispatch({
                    type: "CHANGE_NEW",
                    payload: image,
                });
                setImg(image);
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
    return (
        <div 
            className="w-full p-2 grid grid-cols-6 bg-gray-800 rounded-lg shadow-md"
            onDrop={ (e) => drop(e) }
            onDragOver={ (e) => dragover(e) }
        >
            <div className="flex justify-start items-center">
                <Thumbnail src={ img ? img.path : "" } alt={ img ? img.name : "" } size="80" />
            </div>
            <div className="col-span-4 justify-start items-center overflow-hidden">
                <LimeText cls="text-2xl font-extrabold">{ props.type }</LimeText>
                <Text>{ img ? img.name : "drag here" }</Text>
            </div>
            <div className="flex justify-center items-center">
                <Button id={ props.id } cls="p-2 px-4">OPEN</Button>
            </div>
        </div>
    );
}

export default ImageList;