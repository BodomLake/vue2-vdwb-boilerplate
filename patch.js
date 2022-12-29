export function patchDotEnv() {
  if (import.meta.env) {
    Object.keys(import.meta.env).forEach((envKey) => {
      // 输出vite加载的所有.env变量
      // console.log(envKey, import.meta.env[envKey])
      // 赋值给process.env，这样webpack的开发、生产模式也可以共享这些变量
      Object.defineProperty(process.env, envKey, {
        configurable: true,
        writable: true,
        value: import.meta.env[envKey]
      })
      // process.env[envKey] = import.meta.env[envKey]
    })
    console.log('import.meta.env: ', import.meta.env);
  }
}
