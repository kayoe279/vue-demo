# myapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# git 预览项目
1.切换到gh-pages分支 git checkout -b gh-pages(创建gh-pages并切换到该分支)/ git checkout  gh-pages(切换到gh-pages分支)
2.执行 npm run build 命令 生成dist文件
3.将dist目录下的所有文件夹推送至远程仓库的gh-pages分支
   git add -f dist (强制添加 因为.gitignore忽略了该文件夹)
   git commit -m 'xxxxx' (提交到本地暂存区)
   git subtree push --prefix dist origin gh-pages (部署dist目录下的代码)



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
