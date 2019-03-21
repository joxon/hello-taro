# hello-taro

taro 试水项目

## 文件用途备忘

- `.editorconfig`是编辑器通用配置，保证 VSCode、Atom、ST3 等之间的部分配置保持同步。一些代码风格比如 indent_style（缩进风格用制表符或者空格）、indent_size（缩进大小，一般是两个空格）、charset（字符集，一般为 utf-8）、trim_trailing_whitespace（是否删掉行末空格）、insert_final_newline（插入最后空行）
- `.eslintrc`是 ESLint 的 RC 文件（Run Commands，同 bashrc、npmrc 的各种 rc 配置）。这里 extends 了 taro 的预设。要使用 ESLint，先要-g（全局）或-D（devDependencies）安装 eslint 的 npm 包，然后 VSCode 安装 ESLint 插件，并关掉 javascript.validate。
- `.gitignore`是指示 git 忽略哪些文件的配置。
- `.npmrc`是 npm 在当前项目的配置。可以指定 npm 的 registry，这里可以用 taobao 的源。
- `global.d.ts`是 TypeScript 的全局声明文件。TypeScript 相比 JavaScript 增加了类型声明。这些类型声明帮助编译器识别类型，从而防止开发者“搬起石头砸自己的脚”。原则上，TypeScript 需要开发者做到先声明后使用。这就导致开发者在调用很多原生接口（浏览器、Node.js）或者第三方模块的时候，因为某些全局变量或者对象的方法并没有声明过，导致编译器的类型检查失败。
- `package.json`是本项目作为一个 npm 包的配置文件，说明了本项目的名字、作者、依赖、脚本命令等。
- `project.config.json`是小程序的配置文件。不属于 npm 开发的范围。
- `tsconfig.json`是本项目作为 TypeScript 项目的配置文件，规定了一些 TS 的特性。
