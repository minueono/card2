import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 중요: GitHub Pages 저장소 이름에 맞춰 base 경로를 설정해야 합니다.
  // 예: 저장소 이름이 'my-card-app'이면 '/my-card-app/'으로 설정하거나,
  // 빈 문자열 '' 또는 './' 로 설정하면 상대 경로로 자동 처리됩니다.
  base: "/card2/",
});
