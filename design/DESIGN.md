# 設計(要件定義)
## 要件

- ２つの画像の差分を取りたい。
- 差分の取り方は見開き(2-Up)、スワイプ、オニオンスキンの３種類
- 差分の結果を残すことができる。
- ※ 開いた画像の内容が更新されると、本アプリケーション内でも自動更新されるようにする。
- ※ ディレクトリ内の全ての画像を読み込んでリスト表示。その中から洗濯した２つのファイルについて差分をとる。

※マークがついている物はできたらやる内容。もしくはアップデートで追加する機能。


## 差分の種類
1. 見開き(2-Up)  
   見開き (2-Up) はデフォルトモードで、一度に両方の画像を見ることができます。 加えて、画像のサイズがバージョン間で変わっていれば、その違いがそのまま表れます。 このモードではサイズの違いが明瞭にわかります。アセットがより高い解像度にアップグレードされた場合などにサイズが変わります。  
2. スワイプ  
   スワイプでは画像の部分を重ねて表示することができます。 新旧画像間でなされた微妙な色変更がわかりづらいといった場合、 スワイプスライダーを問題の領域までドラッグして注目すると、違いが見えてきます。  
3. オニオンスキン  
   オニオンスキンは、要素の移動量が小さくてわかりづらい場合に役立ちます。 ほとんど変わっていないように見えるアイコンが、もしかしたら 2 ピクセルほど左にずらされているかもしれません。その場合、 スライダーで不透明度を調節して、それが動くかどうかを見てください。  

## 操作
### 画像ファイルの読み込み
- ファイルを選択して読み込む。
- ドラッグ＆ドロップで読み込む。

### モードの選択
#### 見開き(2-Up)
1. 差分の確認  
   ２つの画像を並べて表示。更新日時が古い物を左、新しい物を右に表示する。  
   - 大きさはそのまま、もしくは比率をそのままで左上で揃えて表示する。
   - 比率を揃える機能(チェックボックス)。
   - ※　新しい画像で古い画像と差分がある部分をハイライトする機能。

2. 差分の保存
   「差分の確認」において表示している状態を画像として保存する。
   通常の保存と同じようにディレクトリを指定して保存する。上書き保存機能は付けない(名前が重複した場合の上書きはする)。  
   ※ 上書き保存機能。


#### スワイプ
1. 差分の確認
   サイズの等しい画像を更新日時の古い画像を下、新しい画像を上にして重ねて表示する。この時、サイズの異なる画像が選択された場合は、古い方の画像にリサイズして重ねる(その旨をアラートメッセージで報告する)。  
   最初は古い画像のみを表示し、スライダーを左から右に動かすのに合わせて、新しい画像を左から右に重ねて表示していく。

2. 差分の保存
   「差分の確認」において表示している状態を画像として保存する。
   通常の保存と同じようにディレクトリを指定して保存する。上書き保存機能は付けない(名前が重複した場合の上書きはする)。  
   ※ 上書き保存機能。


#### オニオンスキン
1. 差分の確認
   サイズの等しい画像を更新日時の古い画像を下、新しい画像を上にして重ねて表示する。この時、サイズの異なる画像が選択された場合は、古い方の画像にリサイズして重ねる(その旨をアラートメッセージで報告する)。  
   最初は古い画像のみを表示し、スライダを左から右に動かすのに合わせて新しい画像の透明度を0から1に変化させ表示していく。

2. 差分の保存
   「差分の確認」において表示している状態を画像として保存する。
   通常の保存と同じようにディレクトリを指定して保存する。上書き保存機能は付けない(名前が重複した場合の上書きはする)。  
   ※ 上書き保存機能。

### 閉じる
保存等も必要ないので特に特別な操作は必要としない。バツボタンで閉じたり、メニューから閉じたりする。