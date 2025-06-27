 
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base:"/AutoMundo/",
  server: {
    host: true,    // si quieres exponerlo en tu LAN
    port: 5173,    // o el puerto que uses
    proxy: {
      // redirige todo /GetData al backend en localhost:3000
      '/GetData': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      } ,
      '/Submit/Message': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      } 
    }
  }
});
 