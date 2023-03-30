import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  server:{
    port:3001,
    open:true
  },
  build:{
    outDir:"build",
    minify:true,
    manifest:true
  },
  resolve:{
    alias:{
      "@font": resolve("./src/Assets/fonts")
    }
  }
 
})
