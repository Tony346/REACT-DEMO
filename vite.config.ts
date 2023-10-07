import { defineConfig, ProxyOptions } from "vite";
import react from "@vitejs/plugin-react";

/**
 * 组装vite proxy代理参数
 * @param proxyPaths 代理匹配路径
 * @param config 代理配置
 */
// const genMultipleProxy = (proxyPaths: string[], config: ProxyOptions) => {
//   const proxy = {};
//   proxyPaths.forEach((proxyPath) => {
//     proxy[proxyPath] = config;
//   });
//   return proxy;
// };
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    open: true,
    // proxy: {
    //   ...genMultipleProxy(["/sse", "/test"], {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //     followRedirects: true,
    //     headers: {
    //       Host: "localhost:3000",
    //       Referer: "http://localhost:3000",
    //     },
    //   }),
    // },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global.scss";`,
      },
    },
  },
});
