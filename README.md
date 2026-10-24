# 字形辨義

給 8 至 12 歲兒童使用的繁體中文字形辨義遊戲。支援手機、平板與電腦，使用滑鼠、觸控拖曳或點選詞磚完成短文。

## 目前內容

- 四上翰林版（期中）：已完成第一課至第六課，共 43 頁。
- 四上翰林版（期末）：尚未匯入正式教材，目前顯示既有測試題庫。
- 五上翰林版（期中）：尚未匯入正式教材，目前顯示既有測試題庫。
- 五上翰林版（期末）：尚未匯入正式教材，目前顯示既有測試題庫。

## 遊戲功能

- 相似字與常用造詞對照。
- 每頁最多 8 個可拖曳或點選的詞磚。
- 答對、答錯與未作答進度圈。
- 整課滿分 100 分，每錯一個造詞扣 3 分。
- 分數依版本與課次儲存在瀏覽器中，新成績覆蓋舊成績。
- 完成後可輸出錯題 PDF；錯誤造詞會以紅字呈現。

## 本機預覽

從上層「遊戲設計」資料夾執行：

```powershell
node server.js
```

然後開啟：

```text
http://127.0.0.1:5173/glyph-meaning-game/index.html
```

`127.0.0.1` 只供這台電腦使用，且終端機中的服務必須持續執行。其他裝置請使用 GitHub Pages 公開網址。

## GitHub Pages

本 repo 已包含 `.github/workflows/pages.yml`。建立公開 GitHub repo 並推送 `main` 後，到：

`Settings` → `Pages` → `Build and deployment` → `Source` → `GitHub Actions`

之後每次推送到 `main` 都會自動更新網站。

部署流程只會發布遊戲必要的 HTML、CSS 與 JavaScript，不會把交接文件當成網站內容。設定方式可參考 [GitHub Pages 官方文件](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 主要檔案

- `index.html`：版本、課次、遊戲與結算畫面。
- `styles.css`：桌面、平板、手機與列印樣式。
- `app.js`：互動、評分、儲存、動畫與錯題 PDF。
- `four-up-mid-data.js`：四上翰林版期中正式題庫。
- `CLAUDE.md`：交接說明與後續發布步驟。

