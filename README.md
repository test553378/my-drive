# ぼくの GRAND RACE — Ver.7

4〜5歳向けの3Dレースゲーム。iPad Safari / GitHub Pages向けの静的構成です。広告・課金・個人情報収集なし。ライブラリ・画像・モデルはすべて同じサイトから配信します。

[ゲーム本体を開く](https://test553378.github.io/my-drive/) · [従来の画質確認ページ](https://test553378.github.io/my-drive/graphics-lab/)

承認済みのPBR路面・HDR照明・環境反射・影をゲーム本体へ統合しました。8車種、4コース、色・タイヤ・ボディ・エアロの選択、パンク・自動修理、歩行者の横断とペナルティ、ブレーキ・ターボ・サイレンを維持します。通常走行では操作を離した横位置を維持します。「コース」からライバルの3段階の難易度を選べます。初期値は「ふつう」です。

「？」の動作診断から軽量・標準・高画質と自動調整を設定できます。最初のオンライン保存が完了した後はゲーム本体の素材をオフラインで利用できる構成です。iPad第9世代実機のFPS・発熱・長時間動作は未検証です。

[全体統合の仕様と検証範囲](docs/V7-INTEGRATION.md) · [AI基準タイム](docs/AI-BASELINES.json) · [素材・作者・ライセンス](graphics-lab/credits.html)

## 開発

Node.js 22以上で `npm ci` → `npm run build:graphics`。試作とゲーム本体のバンドルを生成します。`node tests/serve.js` を起動し `http://127.0.0.1:8765/my-drive/` を開いてください。

`npm run check`、`npm test`、`npm run test:e2e` で構文・整形・単体・Chromium/WebKitのブラウザテストを実行します。ブラウザは事前にPlaywrightの依存を導入してください。CIは既存の設定を維持し、生成物と記録したハッシュも検証します。

過去の記録：[初期WebGL診断](docs/VERIFICATION.md) · [Ver.5](docs/V5-VERIFICATION.md) · [Ver.6](docs/V6-VERIFICATION.md) · [Phase 1調査](docs/V42-PHASE1.md) · [Phase 2試作](docs/V42-PHASE2.md) · [前輪の補正](docs/WHEEL-ALIGNMENT.md)
