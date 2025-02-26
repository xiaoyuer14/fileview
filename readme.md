## 环境使用流程

开发环境已经内置了代码架构 prompts,需要写一个文件的时候按照：

```
  ##需求##: 这里写你的具体需求。
  ##参考文档##：这里@本地文档，或者网站。
  ##代码结构规范##：这里@docs/Guideline/具体要写的模块，进行代码的格式规范
  ##详细描述##：如需要，这里可以补充一些更详细的要求
  ##样式参考##：这里@design里面的对应设计稿或者figma文件进行样式参考
```

如果是第一次打开 cursor,复制对应系统提示进入 Rule for AI:

```
  根据用户提问进行详细回复。
  如果用户的提示词中出现：
   ##需求##，##参考文档##，##代码结构规范##，##详细描述##，##样式参考##，优先理解这些部分的要求，依据相关联的内容对最终回复进行严格的规范
  回复默认统一使用中文
```

## 注意事项

https://registry.npmjs.org/

- npm 镜像下载依赖时： `npm config set registry https://registry.npm.taobao.org` 发布包时：
  `npm config set registry https://registry.npmjs.org` 验证当前设置： `npm config get registry`

  ` npm config set https-proxy http://12.0.0.1:7890` ` npm config set proxy http://12.0.0.1:7890`

-      `yarn config set registry https://registry.npm.taobao.org` ， 最好用yarn镜像来下载，npm保持官网方便进行发布
```
   npm config set proxy http://12.0.0.1:7890 
  npm config set https-proxy http://12.0.0.1:7890
```

## 打包流程

- 激活打包命令

```
 chmod +x patch.sh
```

- 打版本补丁

```
 ./patch.sh
```

- 打包库

```
  npm run build
```

- 发布库

```
 npm run publish:lib
```

- 最终打包结果只包含/application/\*, 排除了所有其他开发环境的代码，详情查看 package.json

```
 "include": [
    "src/application/**/*"
  ],
  "exclude": [
    "node_modules",
    "src/main.tsx",
    "src/Preview.tsx",
    "type.d.ts",
    "vite-env.d.ts"
  ],
```
