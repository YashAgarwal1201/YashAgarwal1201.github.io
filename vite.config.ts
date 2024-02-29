import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/',
//   server: {
//     port: 5174, // Change this to the desired port
//   },
// });

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
          port: 5374, // Change this to the desired port
        },
  }

  if (command !== 'serve') {
    config.base = '/'
  }

  return config
})