const { Menu, dialog } = require('electron');

// メニューの作成
function CreateMenu() {
  const template = [
    {
      label: 'Electron',
      submenu: [
        {
          label: 'about'
        }
      ]
    },
    {
      label: 'File',
      submenu: [
        {
          label: 'Open..',
          accelerator: 'CmdOrCtrl+O', // ショートカットキーを設定
          click: () => { openFile() } // 実行される関数
        }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);
}

// ファイル選択ダイアログを開く
function openFile() {
  dialog.showOpenDialog({ properties: ['openFile'] }, (filePath) => {

    // レンダラープロセスにイベントを飛ばす
    mainWindow.webContents.send('open_file', filePath);
  })
}

exports.CreateMenu = CreateMenu;