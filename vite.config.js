import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  server:{
    port:3000,
    open:true
  },
  build:{
    outDir:"build",
    minify:true,
    manifest:true
  }
})