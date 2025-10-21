import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

function reviewsApi() {
  return {
    name: 'reviews-api',
    configureServer(server) {
      const file = path.resolve(process.cwd(), 'data', 'reviews.json')
      fs.mkdirSync(path.dirname(file), { recursive: true })
      if (!fs.existsSync(file)) fs.writeFileSync(file, '[]', 'utf-8')

      const readJson = () => JSON.parse(fs.readFileSync(file, 'utf-8') || '[]')
      const writeJson = (arr) => fs.writeFileSync(file, JSON.stringify(arr, null, 2), 'utf-8')

      server.middlewares.use('/api/reviews', async (req, res, next) => {
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify(readJson()))
          return
        }
        if (req.method === 'POST') {
          try {
            const chunks = []
            for await (const chunk of req) chunks.push(chunk)
            const body = JSON.parse(Buffer.concat(chunks).toString('utf-8') || '{}')
            const name = String(body.name || '').slice(0, 80).trim() || 'Client'
            const message = String(body.message || '').slice(0, 2000).trim()
            const ratingNum = Number(body.rating)
            const rating = Number.isFinite(ratingNum) ? Math.min(5, Math.max(1, Math.round(ratingNum))) : 5
            if (!message) throw new Error('Message manquant')

            const review = {
              id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
              name,
              message,
              rating,
              createdAt: new Date().toISOString()
            }
            const arr = readJson()
            arr.unshift(review)
            writeJson(arr)
            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.end(JSON.stringify(review))
            return
          } catch (e) {
            res.statusCode = 400
            res.end(JSON.stringify({ error: String(e.message || e) }))
            return
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [vue(), reviewsApi()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
    server: {
    host: true, // expose on network
    allowedHosts: [
      '6884a519d88c.ngrok-free.app', // your ngrok domain
    ]
  }
})
