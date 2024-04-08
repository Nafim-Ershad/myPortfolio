import { defineConfig } from 'vite';
import sass from 'vite-plugin-sass';
 
export default defineConfig({
    server: {
        host: 'localhost',
        port: 8000
    },
    plugins: [
        sass()
    ],
});