# vue2-vdwb(vite dev + webpack build)-boilerplate


### [Vue3+Vite4 开发配置](vite.config.js)
### [Vue3+Webpack 构建配置](vue.config.js)
### [Vite指定的入口文件](index.html)
### [Webpack指定的入口文件](./public/index.html)

## Project Info
```
Vue2.6(尝试兼容IE9)
Webpack5(integrated in @vue/cli-service)
Vuex(instead of Pinia)

```


### Webpack
```
开发模式 :npm run webpack:dev
构建产物 :npm run webpack:build
预览产物 :npm run webpack:preview
Webpack构建产物已经默认放置到了webpack-builds文件夹下
```

### Vite
```
开发模式 :npm run vite:dev
构建产物 :npm run vite:build
预览产物 :npm run vite:preview
Vite构建产物已经默认放置到了vite-builds文件夹下
```

### 补充
```
无论是在vite或者webpack的开发模式下，还是生产模式，都可以在vue和js文件中使用 process.env。
放弃使用Pinia的原因是，Vite无法加载Pinia所引用的Vue-demi的cjs文件中import的Composition-API
```


### 相关工具链的文档
 [Vue API Reference](https://vuejs.org/api/).

 [Vue-Router API Reference](https://router.vuejs.org/api/).

 [Vuex Reference](https://vuex.vuejs.org/api/).

 [Vue-cli Configuration Reference](https://cli.vuejs.org/zh/config/).

 [Vite Configuration Reference](https://vitejs.bootcss.com/config/).