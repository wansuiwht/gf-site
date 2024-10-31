package main

import (
	"context"

	"github.com/gogf/gf/v2/container/garray"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gfile"
	"github.com/gogf/gf/v2/text/gregex"
	"github.com/gogf/gf/v2/text/gstr"
)

const (
	path = `/Users/john/Workspace/github/gogf/gf-site/versioned_docs/version-2.6.x`
)

func main() {
	var ctx = context.Background()
	files, err := gfile.ScanDirFile(path, "*.md", true)
	if err != nil {
		panic(err)
	}
	pathArray := garray.NewSortedStrArrayComparator(func(a, b string) int {
		if a == b {
			return 0
		}
		if len(a) == len(b) {
			return -1
		}
		return len(b) - len(a)
	})
	var replaceMap = make(map[string]string)
	for _, file := range files {
		pathArray.Add(file)
		temp := file
		for {
			temp = gfile.Dir(temp)
			if temp == path {
				break
			}
			pathArray.Add(temp)
		}
	}
	pathArray.Unique()
	pathArray.Iterator(func(k int, v string) bool {
		fileName := gfile.Basename(v)
		newFileName, _ := gregex.ReplaceString(`\d+\-(.+)`, `$1`, fileName)
		if newFileName == fileName {
			return true
		}
		replaceMap[fileName] = newFileName
		err = gfile.Move(v, gfile.Dir(v)+gfile.Separator+newFileName)
		if err != nil {
			g.Log().Error(ctx, err)
		}
		return true
	})

	// replacement
	files, err = gfile.ScanDirFile(path, "*.md", true)
	if err != nil {
		panic(err)
	}
	for _, file := range files {
		content := gfile.GetContents(file)
		newContent := gstr.ReplaceByMap(content, replaceMap)
		_ = gfile.PutContents(file, newContent)
	}
}
