// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

//New Code from Shade CN documentation:

// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
//   base: process.env.VITE_BASE_PATH || "/",
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })


//Update as of 5/3/25

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: {
      // Maps '@' to the './src' directory
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
