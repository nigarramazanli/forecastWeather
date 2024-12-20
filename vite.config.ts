import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Əgər ehtiyac varsa mühit dəyişənlərini bura əlavə edə bilərsiniz
    // 'process.env': process.env, // İstifadə etməyə ehtiyac varsa açıla bilər
  },
});
