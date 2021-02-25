import React, { useState, useContext } from "react";
import Button from "../common/Button";
import Thumbnail from "../common/Thumbnail";
import LimeText from "../common/LimeText";
import Text from "../common/Text";
import { SiteContext} from "../../App";

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
    const drop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        for (const f of e.dataTransfer.files) {
            switch (props.type) {
                case "OLD":
                    dispatch({
                        type: "CHANGE_OLD",
                        payload: f,
                    });
                    setImg(f);
                    return;
                case "NEW":
                    dispatch({
                        type: "CHANGE_NEW",
                        payload: f,
                    });
                    setImg(f);
                    return;
                default:
                    return;
            }

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
                <Thumbnail src={ img ? img.path : "" } alt="" size="80" />
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