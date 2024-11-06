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
	path = `/Users/john/Workspace/github/gogf/gf-site`
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
				if realPath != "" {
					return match[0]
				}
				link = gfile.Join(
					gfile.Dir(link),
					gfile.Name(link),
					gfile.Name(link)+".md",
				)
				realPath = gfile.RealPath(link)
				if realPath == "" {
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
