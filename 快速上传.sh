#!/bin/bash
# 快速上传到 GitHub 的脚本
# 仓库名：benbao

echo "🚀 开始上传到 GitHub..."

# 检查是否已初始化 Git
if [ ! -d ".git" ]; then
    echo "📦 初始化 Git 仓库..."
    git init
fi

# 添加所有文件
echo "📝 添加文件..."
git add .

# 提交
echo "💾 提交更改..."
git commit -m "Initial commit"

# 设置主分支
git branch -M main

echo ""
echo "✅ 本地准备完成！"
echo ""
echo "📋 接下来请执行："
echo "1. 在 GitHub 上创建仓库：https://github.com/new"
echo "   仓库名：benbao"
echo "   不要勾选 README"
echo ""
echo "2. 创建后，执行以下命令（替换 你的用户名）："
echo "   git remote add origin https://github.com/你的用户名/benbao.git"
echo "   git push -u origin main"
echo ""
echo "3. 启用 GitHub Pages："
echo "   Settings > Pages > Source: main branch > Save"

