# tiger-ui

此项目主要基于 antd-design-vue 进行 UI 库的二次开发 && 自定义 UI 组件。

[vite 官网](https://cn.vitejs.dev/guide/)

## VSCode 插件安装

[VSCode](https://code.visualstudio.com/)
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## vite 配置

[Vite Configuration Reference](https://cn.vitejs.dev/config/).

## 项目运行

```sh
pnpm install

pnpm dev

pnpm build
```

### 项目单元测试

[Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### 项目 ESlint

[ESLint](https://eslint.org/)

```sh
pnpm lint
```
