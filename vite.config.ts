import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< ours
import { fileURLToPath, URL } from 'node:url';
=======
import path from 'path';
>>>>>>> theirs

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< ours
      '@': fileURLToPath(new URL('./src', import.meta.url))
=======
      '@': path.resolve(__dirname, 'src')
>>>>>>> theirs
    }
  }
});
