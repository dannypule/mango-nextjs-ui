const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const pathMatch = require('path-match')
const port = parseInt(process.env.PORT, 10) || 4300
const app = next({ dev })
const handle = app.getRequestHandler()
const { parse } = require('url')

const apiRoutes = require('./server/routes/apiRoutes.js')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.use(
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    })
  )

  server.use('/api', apiRoutes)

  // Server-side
  const route = pathMatch()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  /* eslint-disable no-console */
  server.listen(port, err => {
    if (err) throw err
    console.log(`Server ready on http://localhost:${port}`)
  })
})
