import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'dotenv/config';
import dotenv from 'dotenv'

export default () => {
  return defineConfig({
    plugins: [react()],
    define: {
      
      'import.meta.env': JSON.stringify(dotenv.config().parsed),
    },
  });
};


