# 香港教師AI應用指南

專為香港中小學教師設計的AI應用資訊平台，協助教師運用科技減輕負擔、提升教學效能。

## 網站架構

| 頁面 | 路徑 | 內容 |
|------|------|------|
| 首頁 | `/` | 價值主張、統計數據、核心價值 |
| 工作現狀 | `/#/workload` | 三大職責、工時數據、壓力分析 |
| AI解決方案 | `/#/solutions` | 六大應用方向、時間效益 |
| 工具推薦 | `/#/tools` | 10款精選AI工具、對照表 |
| 實踐指南 | `/#/guide` | 推行步驟、倫理檢查清單 |
| 資源中心 | `/#/resources` | 參考文章與研究報告 |

## 技術棧

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router (HashRouter)
- GSAP (動畫)
- Lucide React (圖標)

## 本地開發

```bash
npm install
npm run dev
```

## 部署到 GitHub Pages（自動）

### 步驟一：建立 GitHub 倉庫

1. 前往 [GitHub](https://github.com) 登入你的帳戶
2. 點擊右上角 **+** → **New repository**
3. 輸入 Repository name（建議：`hk-teacher-ai-guide`）
4. 選擇 **Public**
5. 點擊 **Create repository**

### 步驟二：推送代碼到 GitHub

在本地項目目錄中執行：

```bash
# 初始化 git（如果尚未初始化）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 連接到你的 GitHub 倉庫（將 <username> 和 <repo> 替換為你的資訊）
git remote add origin https://github.com/<username>/<repo>.git

# 推送
git branch -M main
git push -u origin main
```

### 步驟三：開啟 GitHub Pages

1. 進入你的 GitHub 倉庫頁面
2. 點擊 **Settings**（上方選單最右邊）
3. 左側選單選擇 **Pages**
4. **Build and deployment** 區塊：
   - Source 選擇 **GitHub Actions**
5. 返回倉庫首頁，點擊 **Actions** 分頁
6. 等待 workflow 執行完成（約 1-2 分鐘）
7. 完成後，你的網站將在 `https://<username>.github.io/<repo>/` 上線

### 步驟四（可選）：綁定自定義域名

1. 在倉庫的 **Settings → Pages** 中
2. 找到 **Custom domain**，輸入你的域名
3. 在域名 DNS 設定中添加 CNAME 記錄指向 `<username>.github.io`

## 自動部署

每次你 push 代碼到 `main` 分支時，GitHub Actions 會自動：
1. 安裝依賴
2. 執行 `npm run build`
3. 部署 `dist/` 到 GitHub Pages

你也可以在 Actions 頁面手動觸發部署（點擊 **Run workflow**）。

## 授權

本專案內容基於公開資料整理，僅供教育參考用途。
