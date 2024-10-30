package main

import (
	"fmt"
	"path/filepath"

	"github.com/gogf/gf/v2/encoding/gurl"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gfile"
	"github.com/gogf/gf/v2/text/gregex"
	"github.com/gogf/gf/v2/text/gstr"
)

const (
	path = `/Users/john/Workspace/github/gogf/gf-site/docs`
)

func main() {
	files, err := gfile.ScanDirFile(path, "*.md", true)
	if err != nil {
		panic(err)
	}
	fileNameToMdPathMap := make(map[string]string)
	for _, file := range files {
		var fileName = gfile.Name(file)
		fileNameToMdPathMap[fileName] = file
		// 去掉序号前缀
		fileNameWithoutOrder := gstr.SubStrFromEx(fileName, "-")
		fileNameToMdPathMap[fileNameWithoutOrder] = file
	}
	g.DumpJson(fileNameToMdPathMap)
	for _, file := range files {
		content := gfile.GetContents(file)
		newContent, _ := gregex.ReplaceStringFuncMatch(
			`\[([^\]]+?)\]\((/docs/.+?)\)`,
			content,
			func(match []string) string {
				if gstr.HasSuffix(match[2], ".md") {
					return match[0]
				}
				var (
					name     = match[1]
					link     = match[2]
					fileName = gfile.Basename(link)
				)
				if absPath, ok := fileNameToMdPathMap[fileName]; ok {
					newLink := relativePath(file, absPath)
					return fmt.Sprintf(`[%s](%s)`, name, newLink)
				}
				// 第一找不到，尝试decode
				fileName, _ = gurl.Decode(fileName)
				if absPath, ok := fileNameToMdPathMap[fileName]; ok {
					newLink := relativePath(file, absPath)
					return fmt.Sprintf(`[%s](%s)`, name, newLink)
				}
				return fmt.Sprintf(`[%s](%s.md)`, name, link)
			},
		)
		_ = gfile.PutContents(file, newContent)
	}
}

func relativePath(path1, path2 string) string {
	p, _ := filepath.Rel(gfile.Dir(path1), path2)
	return p
}
