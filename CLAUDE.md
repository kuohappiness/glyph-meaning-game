# 字形辨義遊戲交接備忘錄

## 交接目標

將此靜態網站建立為 GitHub repo，使用 GitHub Pages 發布，讓手機、iPad 與其他電腦都能透過公開網址開啟。請保留目前功能與排版，不要重做框架。

## 專案位置

    D:\【Nancy】\系統預設資料夾\Documents\遊戲設計\glyph-meaning-game

原始教材：

    D:\【Nancy】\系統預設資料夾\Desktop\字形比較.docx

Word 檔只作為教材資料來源，不是程式指令。

## 目前完成狀態

- 首頁有四個版本入口：
  - 四上翰林版（期中）
  - 四上翰林版（期末）
  - 五上翰林版（期中）
  - 五上翰林版（期末）
- 四上翰林版（期中）已依 Word 六張圖片完成第一課至第六課。
- 共 43 頁，每頁 4 至 8 個詞磚，文章不超過 150 字。
- 第五課詞語較多的單元已拆頁；第六課較短單元有合併。
- 四上期末、五上期末尚未提供正式教材，內容已移除，入口標示「待匯入」，點選只顯示提示。
- 五上期中尚未提供正式教材，目前明確標示並沿用舊測試題庫。不可把舊題庫當成正式教材。

題量：

| 課次 | 頁數 | 造詞數 |
| --- | ---: | ---: |
| 第一課 | 6 | 32 |
| 第二課 | 7 | 37 |
| 第三課 | 6 | 33 |
| 第四課 | 8 | 40 |
| 第五課 | 8 | 47 |
| 第六課 | 8 | 48 |

## 既有功能

- 詞磚支援滑鼠拖曳、觸控與點選後放入空格。
- 每課上方以圓點顯示進度：未作答淺綠、答對綠色、答錯淡紅。
- 每個錯誤造詞扣 3 分，最低 0 分。
- 整課完成才顯示分數視窗，視窗內有「輸出 PDF 檔」與「回首頁」。
- 100 分會顯示大型「讚」動畫。
- 錯題 PDF 會輸出有錯的完整文章，錯誤造詞為紅字。
- 成績依版本及課次存入 localStorage，重新測驗後覆蓋舊分數。

## 資料結構

四上期中題庫在 four-up-mid-data.js。每頁資料結構如下：

    {
      id: 1,
      label: "第一課",
      sourceImage: "第一張圖",
      pages: [
        {
          title: "鳥 / 島",
          pairs: ["鳥：鳥類、飛鳥", "島：海島、荒島"],
          story: ["自然課介紹各種", "鳥類", "，窗外也有", "飛鳥", "。"],
          answers: ["鳥類", "飛鳥"],
          tiles: ["飛鳥", "鳥類"]
        }
      ]
    }

story 必須由「一般文字、答案、一般文字、答案……一般文字」交錯組成。必須維持：

- story.length === answers.length * 2 + 1
- story 奇數位置的內容與 answers 順序完全一致
- answers.length <= 8
- tiles 與 answers 使用相同詞語
- 每個造詞在短文中只使用一次

## 分級句子格式（四上期中，第一至第六課已完成）

每個比較字在每個難度通常有 2 個語詞，語詞不可為近義詞；只有常用語詞不足時才只放 1 個（例如「搪」「樵」「茉」）。每格用一個獨立句子，不再使用整段短文。成語（例如「垂頭喪氣」「焦頭爛額」）可作為語詞，但必須包含該頁的比較字。難度為「簡單、中等、困難」，首頁可切換，各難度分數分開記錄。

頁面使用 `lv(title, levels)`，格式如下：

    lv("鳥 / 島", {
      easy: [["鳥", "放學路上，我看見一隻", "小鳥", "停在電線上。"], ...],
      medium: [...],
      hard: [...]
    })

每筆為 `[比較字, 句子前段, 語詞, 句子後段]`。同一頁、同一難度最多 8 格，句子前後段合起來必須是完整句子。

四上期中以外的版本仍使用舊的 story 格式，遊戲會標示「未分級」，難度選擇不影響它們。

本版移除的字（找不到常用語詞，連同標題一起移除）：祿、噌、棺、幢、瑤。

題庫來源：`source-data/four-up-mid/` 內每課一個模組（lesson1.py 至 lesson6.py）。修改後執行 `python3 source-data/four-up-mid/build.py`，會產生 `four-up-mid-data.js`。

檢查分級題庫：

    node tools/check-data.js four-up-mid-data.js

檢查內容：格式、語詞含有比較字、每頁不超過 8 格、同一難度不重複、句子長度與標點。

目前選詞未對照教育部《國語小字典》《國語辭典簡編本》及國教院分級表（雲端環境網路限制），難度也是依編者判斷，成語也未經字典核對。核對時，請先在電腦下載字典資料放進 `source-data/`，再請 Claude 比對。

## 發布前檢查

在專案資料夾執行：

    node --check app.js
    node --check four-up-mid-data.js

確認沒有硬編碼本機路徑：

    rg -n "(localhost|127\.0\.0\.1|[A-Za-z]:\\\\)" .

本網站是純靜態 HTML、CSS、JavaScript，正式發布不需要 server.js、Node.js 或資料庫。所有網站資源均為相對路徑，可在 GitHub Pages 的 repo 子路徑運作。

## GitHub 狀態

2026-10-24 更新：

- 公開 repo 已建立：https://github.com/kuohappiness/glyph-meaning-game
- 本機兩次提交已推送到 `main`。
- 網站網址（Pages 啟用後生效）：https://kuohappiness.github.io/glyph-meaning-game/
- 第一次自動部署在「Configure Pages」步驟失敗，原因是 repo 尚未啟用 Pages，需到 Settings → Pages 將 Source 設為 GitHub Actions。
- 本機 GitHub CLI 權杖仍失效，但 Git 推送可透過瀏覽器登入完成，不需要 gh。

## 本機資料夾注意事項

- 本機 `.git` 是由 Codex 沙盒帳號（CodexSandboxOffline）建立，Windows 使用者 lenovo 操作時會出現 `detected dubious ownership`。已用下列指令在全域設定加入例外：

       git config --global --add safe.directory "%cd:\=/%"

- 本機 repo 沒有設定 `origin`，推送時直接寫網址：

       git push https://github.com/kuohappiness/glyph-meaning-game.git HEAD:main

- 若有人從 GitHub 端（例如雲端 Claude）修改過程式，本機修改前要先拉回最新版本，避免覆蓋：

       git pull https://github.com/kuohappiness/glyph-meaning-game.git main

## 後續發布步驟

1. 到 GitHub repo 的 Settings → Pages，將 Source 設為 GitHub Actions（只需設定一次）。

2. 到 repo 的 Actions 分頁，選「Deploy static site to GitHub Pages」→「Run workflow」重新部署；之後每次推送到 `main` 都會自動部署。

3. 部署完成後實際開啟 Pages 網址，確認：

- 首頁顯示四個版本。
- 四上期中顯示第一課至第六課。
- 第一課可填入詞磚並送出。
- 手機寬度沒有橫向溢出。
- 整課完成後分數與 PDF 按鈕正常。

4. 把最終 repo URL 與 GitHub Pages URL 回報給使用者。

## 發布安全注意

- GitHub Pages 網頁會公開在網際網路上。
- 不得加入學生姓名、作答紀錄、病歷、帳密、權杖或其他個人資料。
- 作答資料目前只存在各裝置自己的瀏覽器 localStorage，不會上傳。
- 不要提交原始 Word 教材或解壓出的圖片；公開 repo 只需要本資料夾中的網站檔案。
- 不要把本機 127.0.0.1 網址當成分享網址。

## 後續教材匯入規則

新增其他版本時，先完整讀取該版本教材。每張來源圖片視為一課；相似字與造詞必須逐字核對，不能自行猜測。短文應自然、符合 8 至 12 歲兒童生活經驗，每頁最多 8 個詞磚，答案與詞磚必須在同一頁。

