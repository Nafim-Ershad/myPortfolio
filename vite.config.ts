import {resolve} from 'path';
import { defineConfig } from 'vite';
 
export default defineConfig({
    base: '/',
    server: {
        host: 'localhost',
        port: 8000
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contact: resolve(__dirname, 'pages/contact/index.html'),
                downloads: resolve(__dirname, 'pages/downloads/index.html')
            },
        },
    },
    plugins: [],
});