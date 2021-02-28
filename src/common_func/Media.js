import html2canvas from "html2canvas";

/**
 * 画像情報取得関数
 * - 引数 -  
 * @param src: fileオブジェクト  
 * - 返り値 -  
 * info {
 *   width: 元画像の幅  
 *   height: 元画像の高さ  
 * }
 * err: エラーオブジェクト
 */
export const LoadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            // 元画像のサイズを取得
            const info = {
                width : img.naturalWidth,
                height: img.naturalHeight,
            };

            URL.revokeObjectURL(img.src);
            resolve(info);
        };

        img.onerror = (error) => {
            const err = {
                err   : true,
                errAt : "LoadImage()",
                errMsg: "画像情報取得失敗",
            }
            console.log(error);
            reject(err);
        };

        img.src = URL.createObjectURL(src);
    });
};

/**
 * 画像ファイル取得関数
 * - 引数  
 * @param files: e.dataTransfer.files  
 * - 返り値  
 * file : ファイルオブジェクト  
 * err: エラーオブジェクト  
 */
export const GetImageFile = (files) => {
    try {
        const file = files[0];
        if (!file || file.type.indexOf('image/') < 0) {
            throw new Error("指定されたファイルは画像ではありません。");
        }
        return file;

    } catch (error) {
        const err = {
            err   : true,
            errAt : "GetImageFile()",
            errMsg: "画像ファイル取得失敗",
        }
        console.log(error);
        return err;
    }
}

/**
 * 画像ファイル取得関数
 * - 引数  
 * @param files: e.dataTransfer.files  
 * - 返り値  
 * image {
 *   src: string(filepath)  
 *   name: string,  
 *   width: number,  
 *   height: number,  
 *   udpate_at: Dateオブジェクト,  
 *   type: string,  
 *   size: number,  
 * }  
 * err: エラーオブジェクト  
 */
export const GetImage = async(files) => {
    try {
        const imageFile = GetImageFile(files);
        const imageInfo = await LoadImage(imageFile);
        const update_at = new Date(imageFile.lastModified);

        const image = {
            src          : imageFile.path,
            name         : imageFile.name,
            width        : imageInfo.width,
            height       : imageInfo.height,
            update_at    : update_at,
            type         : imageFile.type,
            size         : imageFile.size,
        }

        return image;

    } catch (error) {
        const err = {
            err   : true,
            errAt : "GetImage()",
            errMsg: "画像情報の取得失敗",
        }
        console.log(error);
        return err;
    }
}


export const saveImage = (targetId, name) => {
    const target = document.getElementById(targetId);
    html2canvas(target).then(canvas => {
        const targetImgUri = canvas.toDataURL("img/png");

        const downloadLink = document.createElement("a");
        
        if (typeof downloadLink.download === "string") {
          downloadLink.href = targetImgUri;
        
          // ファイル名
          const date = new Date();
          downloadLink.download = `${date.toLocaleString("ja")}-diff-${name}}.png`;
        
          // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
          document.body.appendChild(downloadLink);
        
          // ダウンロードリンクが設定された a タグをクリック
          downloadLink.click();
        
          // Firefox 対策で追加したリンクを削除しておく
          document.body.removeChild(downloadLink);
        } else {
          window.open(targetImgUri);
        }
    });
}