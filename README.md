# easy-icons-example

`easy-icons` 示例项目。

## 生成 icons 组件

`easy-icons` 自 `1.0.0` 版本后不再提供命令行，只能以 `Node API` 形式调用。
生成 `React icons` 代码可参考 `scripts/generateIcons`。

```bash
node scripts/generateIcons
# or yarn icons
```

## 启动项目

本项目使用 `vite` 作为开发服务

```bash
yarn vite
```

> yarn start 会先生成 `icons` 再启动 `vite` 服务。

## 注意事项

由于大部分 `React` 项目都会和 `antd` 一起使用，`antd` 依赖 `classnames` 和 `@ant-design/colors` 两个依赖。
如果没有安装 `antd`，则需要手动安装这两个依赖，就和本项目意义。

另外生成的 `React icon` 在使用时，会向页面插入一段 `anticon` 样式，类似这样

```css
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

具体可见 `index.html` 内容。

如果使用了 `antd`，这段代码可以不用插入，否则**需要自己手动插入到 `html` 文件中**。

> 关于这段样式代码如何优雅地插入页面还在考虑。
