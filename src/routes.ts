import { Express, Request, Response } from 'express'
import { downloadHandler } from './controller/download.controller'
import { uploadHandler } from './controller/upload.controller'

function routes(app: Express) {
    app.get('/health', (req: Request, res: Response) => res.sendStatus(200))
    app.get('/download/:file', downloadHandler)
    app.post('/upload', uploadHandler)
}

export default routes