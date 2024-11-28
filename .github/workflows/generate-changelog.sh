#!/usr/bin/env bash
# 不编码显示中文文件路径
git config --global core.quotepath false

# 记录个数
RECORD_COUNT=20

# 定义文件路径变量
CHANGELOG_FILE="docs/docs/changelog.md"

# 不同语言的匹配正则
MARKDOWN_REGEX="docs/*.md"

# 定义支持的语言列表
LANGUAGES=("zh-Hans" "en")

# 循环生成每种语言的 changelog
for lang in "${LANGUAGES[@]}"; do
    echo "Generating changelog for $lang..."
    # 不同语言切换不同的文件路径，例如默认中文，英文路径i18n/en/docusaurus-plugin-content-docs/current/docs/changelog.md
    if [ "$lang" == "en" ]; then
        CHANGELOG_FILE="i18n/en/docusaurus-plugin-content-docs/current/docs/changelog.md"
        MARKDOWN_REGEX="i18n/en/docusaurus-plugin-content-docs/current/*.md"
    fi

    echo "---" >$CHANGELOG_FILE
    echo "slug: '/docs/changelog'" >>$CHANGELOG_FILE
    if [ "$lang" == "en" ]; then
        echo "title: 'Changelog'" >>$CHANGELOG_FILE
    else
        echo "title: '文档更新记录'" >>$CHANGELOG_FILE
    fi
    echo "hide_title: true" >>$CHANGELOG_FILE
    echo "sidebar_position: 9999" >>$CHANGELOG_FILE
    echo "---" >>$CHANGELOG_FILE
    echo "" >>$CHANGELOG_FILE

    # 获取最近提交记录，只包含 .md 文件的修改
    echo "RECORD_COUNT: $RECORD_COUNT"
    echo "MARKDOWN_REGEX: $MARKDOWN_REGEX"
    git log -n $((RECORD_COUNT + 1)) --pretty=format:"- [%ad](https://github.com/gogf/gf-site/commit/%H) - [%an] - %s" --abbrev-commit --no-merges --date=format:'%m-%d %H:%M' -- "$MARKDOWN_REGEX" | while read -r line; do
        echo "$line" >>$CHANGELOG_FILE
        echo "$line"
        # 从输出中提取提交哈希
        commit_hash=$(echo "$line" | grep -oP '(?<=commit/)[a-f0-9]+')
        # 显示修改的文件
        if [ -n "$commit_hash" ]; then
            git diff-tree --no-commit-id --name-only -r "$commit_hash" -- "$MARKDOWN_REGEX" | while read -r changefile; do
                echo "  - $changefile"
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
                        echo "    - [$title]($slug_path)" >>$CHANGELOG_FILE
                    fi
                fi
            done
        fi
        echo "" >>$CHANGELOG_FILE
    done
done

