---
title: '最快打包部署GoFrame项目到云服务器'
sidebar_position: 7
---

> ```
> 我以Jetbrains公司的Goland这个IDE做演示，不仅仅是Goland可以快速部署，在Eclipse或者是Visual Studio Code等开发编辑器上都支持。
> ```

### 1. 首先需要去安装这个插件，插件名字是: _**[Alibaba Cloud Toolkit。](https://plugins.jetbrains.com/plugin/11386-alibaba-cloud-toolkit)**_

_**![](/markdown/5e285f3e8a30983d14569424b663b190.png)**_

### 2\. 在做下面的事情之前，需要用一个脚本文件deploy.sh

> 注意我下面使用**_###_**注释的地方要小心查看一下，对应好你的应用名称
>
> 其次将这个脚本文件上传到你的云服务器上，最好是和你的应用放在同一个位置。

```
#! /bin/bash

### 你的应用名称(演示使用demo作为项目名称)
APP_NAME=demo
PROFILE=prod

PID=$(ps aux | grep ${APP_NAME} | grep -v grep | awk '{print $2}' )

function check_if_process_is_running {
if [ "$PID" = "" ]; then
return 1
fi
### 同样是你应用名称(演示使用demo作为项目名称)
ps -p $PID | grep demo
return $?
}

case "$1" in
status)
if check_if_process_is_running
then
echo -e "\033[32m $APP_NAME is running \033[0m"
else
echo -e "\033[32m $APP_NAME not running \033[0m"
fi
;;
stop)
if ! check_if_process_is_running
then
echo -e "\033[32m $APP_NAME already stopped \033[0m"
exit 0
fi
kill -9 $PID
echo -e "\033[32m Waiting for process to stop \033[0m"
NOT_KILLED=1
for i in {1..3}; do
if check_if_process_is_running
then
echo -ne "\033[32m . \033[0m"
sleep 1
else
NOT_KILLED=0
fi
done
echo
if [ $NOT_KILLED = 1 ]
then
echo -e "\033[32m Cannot kill process \033[0m"
exit 1
fi
echo -e "\033[32m $APP_NAME already stopped \033[0m"
;;
start)
if [ "$PID" != "" ] && check_if_process_is_running
then
echo -e "\033[32m $APP_NAME already running \033[0m"
exit 1
fi
### 同样是你应用名称(演示使用demo作为项目名称)
chmod 777 demo
### 同样是你应用名称(演示使用demo作为项目名称)
nohup ./demo server >> access.log 2>&1 & echo -ne "\033[32m Starting \033[0m"
for i in {1..3}; do
echo -ne "\033[32m.\033[0m"
sleep 1
done
if check_if_process_is_running
then
echo -e "\033[32m $APP_NAME fail \033[0m"
else
echo -e "\033[32m $APP_NAME started \033[0m"
fi
;;
restart)
$0 stop
if [ $? = 1 ]
then
exit 1
fi
$0 start
;;
*)
echo "Usage: $0 {start|stop|restart|status}"
exit 1
esac

exit 0

```

### 3\. 配置环境

> _**记得将GoFrame配置文件也手动传上去**_
>
> 添加主机，Alibaba Cloud View → Host → Add Host

![](/markdown/67e32bc8601e44af597eda8f6c2e92d1.png)

![](/markdown/4c6292df6b728de9d9d335a8c16a6cff.png)

> 选择Edit Configurations

### ![](/markdown/e6e3fa0be212c6d0fc0dabe8d4e2333c.png)

> 点击+图标，选择Deploy to Host

![](/markdown/3e81048c88747fe7e44272726a471354.png)

> 配置服务器相关信息

![](/markdown/2a4622890ce454853cae40a647005714.png)

运行ok

![](/markdown/6d4c07aef52728121a38aa678941e451.png)