import express from 'express'
import config from 'config'
import routes from './routes'

const port = config.get<number>('port')

const app = express()
app.listen(port, () => {
    console.log('app is running')
    routes(app)
})