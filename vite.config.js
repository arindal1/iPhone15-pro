import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "arindal-char",
    project: "iphone13",
    server: {
      port: 5000, // Specify the port you want to use
    }
  })],

  build: {
    sourcemap: true
  }
})