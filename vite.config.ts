import { defineConfig } from 'vite';

// Relative asset URLs support both localhost and GitHub project Pages.
export default defineConfig({ base: './', server: { strictPort: true }, preview: { strictPort: true } });
