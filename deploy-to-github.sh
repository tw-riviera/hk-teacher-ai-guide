#!/bin/bash
# 香港教師AI應用指南 - GitHub Pages 部署腳本
# 使用方式：
#   1. 修改下方的 GITHUB_USERNAME 和 REPO_NAME
#   2. 在專案根目錄執行：bash deploy-to-github.sh

GITHUB_USERNAME="YOUR_GITHUB_USERNAME"
REPO_NAME="hk-teacher-ai-guide"

echo "========================================"
echo "  香港教師AI應用指南 - GitHub 部署"
echo "========================================"

# 檢查是否已設定 GitHub 用戶名
if [ "$GITHUB_USERNAME" = "YOUR_GITHUB_USERNAME" ]; then
    echo ""
    echo "請先修改此腳本，將 GITHUB_USERNAME 設為你的 GitHub 用戶名！"
    echo "編輯 deploy-to-github.sh 檔案，將第一行修改為你的用戶名。"
    echo ""
    exit 1
fi

REMOTE_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo ""
echo "GitHub 用戶名：$GITHUB_USERNAME"
echo "倉庫名稱：$REPO_NAME"
echo "遠端網址：$REMOTE_URL"
echo ""

# 初始化 git（如果尚未初始化）
if [ ! -d .git ]; then
    echo "→ 初始化 git 倉庫..."
    git init
else
    echo "→ git 倉庫已存在"
fi

# 添加所有文件
echo "→ 添加文件到 git..."
git add .

# 提交
echo "→ 提交更改..."
git commit -m "feat: initial deploy to GitHub Pages"

# 設定遠端
echo "→ 設定 GitHub 遠端..."
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_URL"

# 推送
echo "→ 推送到 GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "========================================"
echo "  推送完成！"
echo "========================================"
echo ""
echo "接下來請到 GitHub 完成設定："
echo ""
echo "1. 前往 https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "2. 點擊 Settings → Pages"
echo "3. Build and deployment → Source 選擇 'GitHub Actions'"
echo "4. 點擊 Actions 分頁，等待部署完成"
echo ""
echo "部署後網址：https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
