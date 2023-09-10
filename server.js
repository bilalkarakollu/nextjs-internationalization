/* eslint-disable @typescript-eslint/no-var-requires */
require('events').EventEmitter.defaultMaxListeners = Infinity
const http = require('http')
const { parse } = require('url')

const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const forceTimeout = 60000

app.prepare().then(() => {
  let isAppGoingToBeClosed = false

  // TODO: Create documentation for creating secure certificate and use it here
  const server = http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true)

      if (isAppGoingToBeClosed) {
        res.setHeader('Connection', 'close')
      }

      handle(req, res, parsedUrl)
    })
    .listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')

      if (process.send) {
        process.send('ready')
      }
    })

  function gracefulShutdown() {
    console.log('Either SIGINT or SIGTERM received. Try shutdown gracefully...')

    isAppGoingToBeClosed = true

    server.close(() => {
      console.log('Close remaining connections')
      process.exit()
    })

    setTimeout(() => {
      console.log('Force shutdown cause cannot close all connections after 1 mins')
      process.exit()
    }, forceTimeout)
  }

  process.on('SIGTERM', gracefulShutdown)
  process.on('SIGINT', gracefulShutdown)
})
