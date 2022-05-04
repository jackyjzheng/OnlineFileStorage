import { Request, Response } from 'express'
import multer from 'multer'
import path from 'path'

// Multer namespace conflict?
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
}).single('files')

export async function uploadHandler(req: Request, res: Response) {
    try {
        upload(req, res, () => {
            if (req.file == undefined) {
                res.sendStatus(400)
            } else {
                res.sendStatus(201)
            }
        })
    } catch (err: any) {
        return res.status(500)
    }
}