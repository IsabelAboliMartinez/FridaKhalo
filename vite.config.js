import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            manifest: true,
            input: {
                main: resolve(__dirname,'src/index.html'),
                gallery: resolve(__dirname,'src/pages/gallery/index.html'),
                videos: resolve(__dirname,'src/pages/videos/index.html'),
                phrase: resolve(__dirname,'src/pages/phrase/index.html'),
                contact: resolve(__dirname,'src/pages/contact/index.html'),
            }
        }
    }
})
