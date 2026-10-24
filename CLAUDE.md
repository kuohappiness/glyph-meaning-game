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
- 其他三個版本尚未提供正式教材，目前明確標示並沿用舊測試題庫。不可把舊題庫當成正式教材。

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

## 發布前檢查

在專案資料夾執行：

    node --check app.js
    node --check four-up-mid-data.js

確認沒有硬編碼本機路徑：

    rg -n "(localhost|127\.0\.0\.1|[A-Za-z]:\\\\)" .

本網站是純靜態 HTML、CSS、JavaScript，正式發布不需要 server.js、Node.js 或資料庫。所有網站資源均為相對路徑，可在 GitHub Pages 的 repo 子路徑運作。

## GitHub 狀態與阻礙

2026-10-24 檢查結果：

- GitHub CLI 已安裝。
- CLI 記得帳號 kuohappiness。
- 目前 GitHub 權杖失效，gh auth status 顯示需要重新登入。
- 尚未建立遠端 repo，也尚未公開網站。

## Claude 接手後的執行步驟

1. 在可見的 PowerShell 視窗重新登入：

       gh auth login -h github.com -p https -w

2. 登入成功後確認帳號：

       gh auth status
       gh api user --jq .login

3. 進入專案並建立 Git：

       cd "D:\【Nancy】\系統預設資料夾\Documents\遊戲設計\glyph-meaning-game"
       git init -b main
       git add .
       git commit -m "Publish glyph meaning game"

4. 建立公開 repo 並推送。預設 repo 名稱使用 glyph-meaning-game；如果同名已存在，先檢查該 repo，禁止直接覆蓋：

       gh repo view glyph-meaning-game
       gh repo create glyph-meaning-game --public --source . --remote origin --push

5. 到 GitHub repo 的 Settings → Pages，將 Source 設為 GitHub Actions。

6. 查看部署狀態：

       gh run list --workflow pages.yml
       gh run watch

7. 部署完成後取得並實際開啟 Pages 網址，確認：

- 首頁顯示四個版本。
- 四上期中顯示第一課至第六課。
- 第一課可填入詞磚並送出。
- 手機寬度沒有橫向溢出。
- 整課完成後分數與 PDF 按鈕正常。

8. 把最終 repo URL 與 GitHub Pages URL 回報給使用者。

## 發布安全注意

- GitHub Pages 網頁會公開在網際網路上。
- 不得加入學生姓名、作答紀錄、病歷、帳密、權杖或其他個人資料。
- 作答資料目前只存在各裝置自己的瀏覽器 localStorage，不會上傳。
- 不要提交原始 Word 教材或解壓出的圖片；公開 repo 只需要本資料夾中的網站檔案。
- 不要把本機 127.0.0.1 網址當成分享網址。

## 後續教材匯入規則

新增其他版本時，先完整讀取該版本教材。每張來源圖片視為一課；相似字與造詞必須逐字核對，不能自行猜測。短文應自然、符合 8 至 12 歲兒童生活經驗，每頁最多 8 個詞磚，答案與詞磚必須在同一頁。

