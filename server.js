const express = require('express')
const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 4300
const app = next({ dev })
const handle = app.getRequestHandler()
const apiRoutes = require('./server/routes/apiRoutes.js')

app.prepare().then(() => {
  const server = express()

  server.use('/api', apiRoutes)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  /* eslint-disable no-console */
  server.listen(port, err => {
    if (err) throw err
    console.log(`Server ready on http://localhost:${port}`)
  })
})
