package main

import "C"
import (
    "context"
    "path/filepath"

    "github.com/gogf/gf/v2/errors/gerror"
    "github.com/gogf/gf/v2/frame/g"
    "github.com/gogf/gf/v2/os/gfile"
    "github.com/gogf/gf/v2/text/gstr"
    "github.com/sashabaranov/go-openai"
)

const (
    zhDocPath = `/Users/john/Workspace/github/gogf/gf-site/docs`
    enDocPath = `/Users/john/Workspace/github/gogf/gf-site/i18n/en/docusaurus-plugin-content-docs/current`
    initAIMsg = `
我在给docusaurus的站点文档做翻译，我给你markdown中文内容，你翻译为英文。
不要在外层给我包装markdown标签，不要改变内容中的任何标签，只将中文翻译为英文。
如果文件顶部的front matter中的description内容中含有单引号，那么将description的值由单引号改为双引号包裹。
`
)

var (
    ignoreFileNames = []string{
        "来杯咖啡",
    }
)

func main() {
    var ctx = context.Background()
    aiClient := openai.NewClient(g.Cfg().MustGet(ctx, "openai.secret").String())
    files, err := gfile.ScanDirFile(zhDocPath, "*.*", true)
    if err != nil {
        panic(err)
    }
    for _, file := range files {
        g.Log().Infof(ctx, `handle: %s`, file)
        fileName := gfile.Name(file)
        if gstr.InArray(ignoreFileNames, fileName) {
            g.Log().Noticef(ctx, `ignore: %s`, file)
            continue
        }
        relativePath, err := filepath.Rel(zhDocPath, file)
        if err != nil {
            g.Log().Warningf(ctx, "filepath.Rel error: %s", err)
            continue
        }
        enFilePath := gfile.Join(enDocPath, relativePath)
        if gfile.Exists(enFilePath) {
            continue
        }

        if gfile.ExtName(file) != "md" {
            gfile.CopyFile(file, enFilePath)
            continue
        }

        content := gfile.GetContents(file)
        newContent, err := doAITrans(ctx, aiClient, content)
        if err != nil {
            g.Log().Warningf(ctx, "doAITrans error: %s", err)
            continue
        }
        if newContent == "" {
            g.Log().Warningf(ctx, "doAITrans empty content")
            continue
        }
        _ = gfile.PutContents(enFilePath, newContent)
    }
}

func doAITrans(
    ctx context.Context,
    aiClient *openai.Client,
    fileContent string,
) (string, error) {
    messages := make([]openai.ChatCompletionMessage, 0)
    messages = append(messages, openai.ChatCompletionMessage{
        Role:    openai.ChatMessageRoleUser,
        Content: initAIMsg,
    })
    messages = append(messages, openai.ChatCompletionMessage{
        Role:    openai.ChatMessageRoleUser,
        Content: fileContent,
    })
    resp, err := aiClient.CreateChatCompletion(
        ctx,
        openai.ChatCompletionRequest{
            Model:    openai.GPT4o,
            Messages: messages,
        },
    )
    if err != nil {
        return "", err
    }
    if len(resp.Choices) == 0 || len(resp.Choices[0].Message.Content) < 50 {
        return "", gerror.New("no response")
    }
    content := resp.Choices[0].Message.Content
    return content, nil
}
