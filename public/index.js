const fs = require('fs');
const { BrowserWindow, dialog } = require('electron').remote;

document.querySelector("#open-old").addEventListener("click", function() {
    openFile();
})

//openFileボタンが押されたとき（ファイル名取得まで）
function openFile() {
    const win = BrowserWindow.getFocusedWindow();
    dialog.showOpenDialog(
        win,
        {
            properties: ['openFile'],
            filters: [
                {
                    extensions: ['jpg', 'png']
                }
            ]
        },
        (fileNames) => {
            if (fileNames) {
                // alert(fileNames[0]);
                readFile(fileNames[0]); //複数選択の可能性もあるので配列となる。
            }
        }
    )
}