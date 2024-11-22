#!/usr/bin/env bash
echo "---" > docs/docs/changelog.md
echo "slug: '/docs/changelog'" >> docs/docs/changelog.md
echo "title: '文档最近更新'" >> docs/docs/changelog.md
echo "sidebar_position: 99" >> docs/docs/changelog.md
echo "---" >> docs/docs/changelog.md
echo "" >> docs/docs/changelog.md
# 获取最近提交记录
git log -n 100 --pretty=format:"- [%ad](https://github.com/gogf/gf-site/commit/%H) - [%an] - %s" --abbrev-commit --no-merges --date=format:'%m-%d %H:%M' >> docs/docs/changelog.md
