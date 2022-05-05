import { Request, Response } from 'express'

// serving static files might be better handled independently with nginx
// https://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express
export async function downloadHandler(req: Request, res: Response) {
    let filename = req.params.file
    res.download('./public/uploads/' + filename)
}