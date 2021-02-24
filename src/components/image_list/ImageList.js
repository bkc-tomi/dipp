import React from "react";
import Button from "../common/Button";
import Thumbnail from "../common/Thumbnail";
import LimeText from "../common/LimeText";
import Text from "../common/Text";

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

    return (
        <div className="w-full p-2 grid grid-cols-6 bg-gray-800 rounded-lg shadow-md">
            <div className="flex justify-start items-center">
                <Thumbnail src={ props.img } alt="" size="80" />
            </div>
            <div className="col-span-4 justify-start items-center">
                <LimeText cls="text-2xl font-extrabold mb-5">{ props.type }</LimeText>
                <Text>{ props.imgPath }</Text>
            </div>
            <div className="flex justify-center items-center">
                <Button cls="p-2 px-4">OPEN</Button>
            </div>
        </div>
    );
}

export default ImageList;