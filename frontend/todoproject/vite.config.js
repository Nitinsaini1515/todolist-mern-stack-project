// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
// proxy:{
//   '/api':'http://localhost:4000',
// }
//   },
// })

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins:[react() ,  tailwindcss(),],
   
  server:{
    proxy:{
      '/api':'https://todolist-mern-backend-9sd9.onrender.com'
    }
  }
})