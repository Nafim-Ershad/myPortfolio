import {resolve} from 'path';
import { defineConfig } from 'vite';
 
export default defineConfig({
    server: {
        host: 'localhost',
        port: 8000
    },
    build: {
        rollupOptions: {
            input: {
            main: resolve(__dirname, 'index.html'),
            nested: resolve(__dirname, 'pages/contact/index.html'),
            },
        },
    },
    plugins: [],
});