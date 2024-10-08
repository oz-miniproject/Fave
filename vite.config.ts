import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://openapi.naver.com', // 네이버 API 주소
        changeOrigin: true,
        secure: false, // HTTPS를 사용하는 경우 필요할 수 있습니다.
        rewrite: (path) => path.replace(/^\/api/, ''), // /api를 제거
      },
    },
  },
});
