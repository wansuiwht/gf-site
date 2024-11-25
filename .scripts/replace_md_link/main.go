package main

import (
	"fmt"

	"github.com/gogf/gf/v2/os/gfile"
	"github.com/gogf/gf/v2/text/gregex"
	"github.com/gogf/gf/v2/text/gstr"
)

const (
	path = `/Users/john/Workspace/github/gogf/gf-site/i18n/en/docusaurus-plugin-content-docs`
)

func main() {
	files, err := gfile.ScanDirFile(path, "*.md", true)
	if err != nil {
		panic(err)
	}
	for _, file := range files {
		content := gfile.GetContents(file)
		newContent, _ := gregex.ReplaceStringFuncMatch(
			`\[([^\]]+?)\]\(([^\)]+?\.md)\)`,
			content,
			func(match []string) string {
				var (
					name = match[1]
					link = match[2]
				)
				if gstr.HasPrefix(link, "http") {
					return match[0]
				}
				if gstr.Contains(link, " ") {
					link = gstr.Replace(link, " ", "%20")
				}
				return fmt.Sprintf(`[%s](%s)`, name, link)
			},
		)
		_ = gfile.PutContents(file, newContent)
	}
}
