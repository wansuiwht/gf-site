#!/usr/bin/env bash
# 定义文件路径变量
CHANGELOG_FILE="docs/docs/changelog.md"
echo "---" > $CHANGELOG_FILE
echo "slug: '/docs/changelog'" >> $CHANGELOG_FILE
echo "title: '文档更新记录'" >> $CHANGELOG_FILE
echo "---" >> $CHANGELOG_FILE
echo "" >> $CHANGELOG_FILE
# 获取最近提交记录
git log -n 100 --pretty=format:"- [%ad](https://github.com/gogf/gf-site/commit/%H) - [%an] - %s" --abbrev-commit --no-merges --date=format:'%m-%d %H:%M' >> $CHANGELOG_FILE
