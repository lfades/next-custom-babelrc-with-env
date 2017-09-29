import express from 'express'
import next from 'next'

// BABEL_ENV is changed to client here so the client can use different presets
// speacially important if we don't need to transpile modules for tree shacking
process.env.BABEL_ENV = 'client'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.DEV_MODE !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
