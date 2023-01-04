# Git基本指令

## 一. Git的使用

### 1.1. 版本控制

* 什么是版本控制?
* 版本控制的历史
* 集中式版本控制和分布式版本控制的区别

### 1.2. Git的安装

* 安装Git
* Git安装的几个工具:
  * Git bash
  * git cmd
  * git gui

### 1.3. Git的配置

* git config --global user.name ""
* git config --global user.email ""

### 1.4. 初始化仓库

* 本地 git init
* 远程 git clone

### 1.5. 本地文件的状态

* 未跟踪:
* 已跟踪:
  * 暂缓区中的文件状态;
  * 已修改文件状态;
  * 未修改稳健状态;

* 查看文档状态
  * git status

### 1.6. 常见的操作

* git add .
* git commit -m ""
* git commit -a -m ""

### 1.7. 历史记录

* git log
* git log --prettty=oneline
* git log --prettty=oneline --graph

### 1.8. 版本回退

* git reset --hard HEAD^
* git reset --hard HEAD~100
* git reset --hard commitid

### 1.9. 远程仓库

* GitHub
* Gitee
* gitlab: 自己搭建

### 1.10. 身份认证

* https的账号密码凭证
* ssh的公钥和私钥

### 1.11. 添加远程的服务器

## 二. 问题的处理

### 2.1. 设置上游分支(跟踪分支)

```shell
git fetch
git branch --set-upstream-to=origin/main
```

### 2.2. 合并没有共同base分支

```shell
git merge --allow-unrelated-histories
```

### 2.3. Github的使用

#### 2.3.1. GitHub的作用

#### 2.3.2. GitHub查找和下载开源项目

#### 2.3.3. GitHub创建远程仓库

```shell
# 初始化本地仓库
git init

# 添加远程仓库
git remote add origin xxxx


# 从远程仓库获取内容
git fetch
git branch --set-upstream-to=origin/main
git merge --allow-unrelated-histories

# git push
git config push.default upstream

# 换一种做法
git checkout main
```

### 2.4. Gitlab的使用

## 三. git tag

```shell
git tag v1.0.0

git tag

git tag -d v1.0.0

# 将本地tag push远程仓库
git push origin v1.0.0
git push origin --tags

# 删除远程的tag
git push origin -d v1.0.0
```

## 四. git的原理(git如何保存内容)

```shell
git add .
# .git/objects/00 40

git commit -m "aaa"
# .git/object/eb -> 提交信息/作者/tree
# .git/object/aa
# aaa.js -> 00
# bbb.js -> 40
```

## 五. 分支结构

### 5.1. 本地分支的使用

创建分支

```shell
git branch testing
git checkout testing
# 合并
git checkout -b testing
```

合并分支

```shell
git merge testing
git add .
git commit -m ""
```

查看所有的分支

```shell
git branch

# 删除本地分支
git branch -d testing
```

### 5.2. 远程分支的操作

```shell
# 初始化本地仓库
git init

# 添加远程仓库
git remote add origin xxxx


# 从远程仓库获取内容
git fetch
git branch --set-upstream-to=origin/main
git merge --allow-unrelated-histories

# git push
git config push.default upstream

# 换一种做法
git checkout main
```

推送一个远程分支:

```shell
git push origin develop

# 李四操作
git checkout develop
```

删除远程分支

```shell
git push origin -d develop
```

### 5.3. git flow工作流

第一图:

* master: 记录主要的版本
* develop: 开发版本
* topic: 新主题

第二图:

* master: 记录主要的版本
  * tag
* hotfix: 热修复
  * merge master
  * merge develop
* develop: 开发分支
* release: 上线的分支
  * merge master
  * merge develop
* feature: 新特性

### 5.4. git rebase

* 改变某一个分支base, 目的让log的历史记录更加的简洁
* 黄金原则: 不要在主分支中使用rebase

## 六. Git中常见的命令总结

基础的命令: (必须掌握)

```shell
git clone xxxxxxxx

git add .
git commit -m "xxxx"

git pull ->(git fetch + git merge)
git push
```

进阶的命令:

* main
* develop
* feature

```shell
git checkout develop
# 1.检查服务器是否有origin/develop这个分支
# 2.创建一个本地的develop分支
# 3.让本地的develop分支自动跟踪origin/develop
# 4.切换到develop分支

git add .
git commit -m ""
git pull
git push
```

高级的命令:

```shell
git tag

git checkout -b develop
git push origin develop

git merge develop
git rebase
```
