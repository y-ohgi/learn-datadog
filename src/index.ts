import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { ENV } from './env'
import './tracer'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

console.log(`Server is running on ${ENV.HOST}:${ENV.PORT}`)

const server =serve({
  fetch: app.fetch,
  port: ENV.PORT ? Number(ENV.PORT) : 3000,
  hostname: ENV.HOST,
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
    process.exit(0)
  })
})


