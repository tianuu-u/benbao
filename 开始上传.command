#!/bin/bash
# 自动上传到 GitHub 脚本
# 仓库名：benbao

cd "$(dirname "$0")"

echo "=========================================="
echo "🚀 开始准备上传到 GitHub"
echo "=========================================="
echo ""

# 检查 Git 是否安装
if ! command -v git &> /dev/null; then
    echo "❌ 错误：未检测到 Git"
    echo "请先安装 Git：https://git-scm.com/download/mac"
    exit 1
fi

# 初始化 Git（如果还没有）
if [ ! -d ".git" ]; then
    echo "📦 初始化 Git 仓库..."
    git init
    echo "✅ Git 仓库初始化完成"
else
    echo "✅ Git 仓库已存在"
fi

echo ""
echo "📝 添加文件到 Git..."
git add .

echo ""
echo "💾 提交更改..."
git commit -m "Initial commit" || echo "⚠️  提交可能已存在，继续..."

echo ""
echo "🌿 设置主分支..."
git branch -M main

echo ""
echo "=========================================="
echo "✅ 本地准备完成！"
echo "=========================================="
echo ""
echo "📋 接下来请按以下步骤操作："
echo ""
echo "1️⃣  在浏览器打开：https://github.com/new"
echo "   - Repository name: benbao"
echo "   - 选择 Public 或 Private"
echo "   - ⚠️  不要勾选 README"
echo "   - 点击 Create repository"
echo ""
echo "2️⃣  创建仓库后，在终端执行（替换 你的用户名）："
echo "   git remote add origin https://github.com/你的用户名/benbao.git"
echo "   git push -u origin main"
echo ""
echo "3️⃣  启用 GitHub Pages："
echo "   - 打开你的 benbao 仓库"
echo "   - Settings > Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main, 文件夹: / (root)"
echo "   - Save"
echo ""
echo "4️⃣  等待几分钟，访问：https://你的用户名.github.io/benbao"
echo ""
echo "按任意键关闭窗口..."
read -n 1

