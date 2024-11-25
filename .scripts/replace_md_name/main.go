package main

import (
	"context"
	"fmt"

	"github.com/gogf/gf/v2/encoding/gurl"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gfile"
	"github.com/gogf/gf/v2/text/gregex"
	"github.com/gogf/gf/v2/text/gstr"
)

const (
	path = `/Users/john/Workspace/github/gogf/gf-site/i18n/en/docusaurus-plugin-content-docs`
)

func main() {
	var ctx = context.Background()
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
					name    = match[1]
					link    = match[2]
					dirPath = gfile.Dir(file)
				)
				if gstr.HasPrefix(link, "http") {
					return match[0]
				}
				link, _ = gurl.Decode(link)
				if err = gfile.Chdir(dirPath); err != nil {
					g.Log().Warning(context.Background(), err)
					return match[0]
				}
				realPath := gfile.RealPath(link)
				if realPath == "" {
					g.Log().Warningf(
						ctx,
						"file not exists: %s in %s", link, file,
					)
					return match[0]
				}
				// get title from md
				fileContent := gstr.Trim(gfile.GetContents(realPath))
				tempMatch, _ := gregex.MatchString(`title: '(.+?)'`, fileContent)
				if len(tempMatch) > 1 {
					name = tempMatch[1]
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
