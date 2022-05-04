import { Express, Request, Response } from 'express'
import { uploadHandler } from './controller/upload.controller'

function routes(app: Express) {
    app.get('/health', (req: Request, res: Response) => res.sendStatus(200))
    app.post('/upload', uploadHandler)
}

export default routes