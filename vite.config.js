import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig, loadEnv } from "vite";
import { resolve } from "path"
import legacy from '@vitejs/plugin-legacy' // 为打包后的文件提供传统浏览器兼容性支持
import visualizer from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
const outputDir = 'vite-builds'

export default defineConfig(({ command, mode, ssrBuild }) => {

  // nodejs线程执行目录
  const envDir = process.cwd()
  const envPrefix = ["VUE_", "APP_", "BASE_URL", "ENV", "VUE_APP_"]
  //  根据模式，环境文件所在路径，以及环境变量的前缀 来攫取环境变量
  const env = loadEnv(mode, envDir, envPrefix);

  console.log('command:', command);
  console.log('environment variables:', env);
  console.log("environment mode:", mode)

  return {
    plugins: [
      createVuePlugin(),
      visualizer({
        open: false,
        title: "vite build 分析报告",
        filename: "vite-build-report.html",
      }),
      viteCompression({
        threshold: 102400 // 对大于 100KB 的文件进行压缩
      }),
      // 兼容旧时代的API（对于开发模式，大可不用legacy，因为我们总是可以选择先进的开发环境）
      // 兼容问题主要发生在生产模式，webpack作为生产模式的首选，legacy这里可留可不留
      legacy({
        targets: ['defaults', 'ie >= 11', 'chrome 52'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        renderLegacyChunks: true,
        modernPolyfills: ['es.string.replace-all'],
        // polyfills: [
        //   'es.symbol',
        //   'es.array.filter',
        //   'es.promise',
        //   'es.promise.finally',
        //   'es/map',
        //   'es/set',
        //   'es.array.for-each',
        //   'es.object.define-properties',
        //   'es.object.define-property',
        //   'es.object.get-own-property-descriptor',
        //   'es.object.get-own-property-descriptors',
        //   'es.object.keys',
        //   'es.object.to-string',
        //   'web.dom-collections.for-each',
        //   'esnext.global-this',
        //   'esnext.string.match-all',
        // ],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve('src'), // 用@代替src目录
        assets: resolve('src/assets'), // 用assets代替assets目录，可根据自己情况进行修改
        styles: resolve('src/styles'), // 用styles代替css样式目录，可根据自己情况进行修改
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    server: {
      // 一个或者多个host ip地址
      host: true,
      open: true,
      // 指定一个ip地址
      // host: "127.0.0.1",
      port: 3000,
      proxy: {
        '/api': {
          target: 'https://127.0.0.1:8080/',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    define: {
      // 'process.env': process.env,
      'process.env': env,
    },
    base: './',
    publicDir: resolve(__dirname, './public'),
    assetsInclude: resolve(__dirname, 'src/assets'),
    build: {
      outDir: outputDir,
      sourcemap: false,
      // target: ['chrome52'],
      // cssTarget: ["chrome52"],
    },
    // envDir: "env",

    // .env文件中定义的各个变量，以如下前缀开头的都会被挂在到 import.meta.env上面
    /**
  * Env variables starts with `envPrefix` will be exposed to your client source code via import.meta.env.
  * @default 'VITE_'
  */
    envPrefix: envPrefix
  }
}

);
