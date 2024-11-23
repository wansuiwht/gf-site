#!/usr/bin/env bash
# 不编码显示中文文件路径
git config --global core.quotepath false
# 定义文件路径变量
CHANGELOG_FILE="docs/docs/changelog.md"
echo "---" > $CHANGELOG_FILE
echo "slug: '/docs/changelog'" >> $CHANGELOG_FILE
echo "title: '文档更新记录'" >> $CHANGELOG_FILE
echo "hide_title: true" >> $CHANGELOG_FILE
echo "sidebar_position: 9999" >> $CHANGELOG_FILE
echo "---" >> $CHANGELOG_FILE
echo "" >> $CHANGELOG_FILE
# 获取最近提交记录，只包含 .md 文件的修改
git log -n 20 --pretty=format:"- [%ad](https://github.com/gogf/gf-site/commit/%H) - [%an] - %s" --abbrev-commit --no-merges --date=format:'%m-%d %H:%M' -- '*.md' | while read -r line; do
    echo "$line" >> $CHANGELOG_FILE
    # 从输出中提取提交哈希
    commit_hash=$(echo "$line" | grep -oP '(?<=commit/)[a-f0-9]+') 
    # 显示修改的文件
    if [ -n "$commit_hash" ]; then
        git diff-tree --no-commit-id --name-only -r "$commit_hash" -- '*.md' | while read -r changefile; do
            filename=$(basename "$changefile")
            filename="${filename%.*}"
            # 提取文件头中的 slug 路径
            if [ -f "$changefile" ]; then
                slug_path=$(grep 'slug:' "$changefile" | awk -F"'" '{print $2}')
                title=$(grep "title: '" "$changefile" | awk -F"'" '{print $2}')
                if [ -n "$slug_path" ]; then
                    if [ -z "$title" ]; then
                        # 标题不存在的时候用文件名作为标题
                        title="$filename"
                    fi
                    echo "    - [$title]($slug_path)" >> $CHANGELOG_FILE
                fi
            fi
        done
    fi
    echo "" >> $CHANGELOG_FILE
done