import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 将 "/api" 前缀替换为实际的 API 地址
      "/oklink": {
        target: "https://www.oklink.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oklink/, '/api/v5/explorer'),
      },
    },
    cors: true,
  },
});
