const LoadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            // 元画像のサイズを取得
            const size = {
                width: img.naturalWidth,
                height: img.naturalHeight,
            };

            URL.revokeObjectURL(img.src);
            resolve(size);
        };

        img.onerror = (error) => {
            reject(error);
        };

        img.src = URL.createObjectURL(src);
    });
};

export default LoadImage;