import express from 'express'
import { allContacts } from '../controllers/chatControllers.js'
import validation from '../middlewares/validation.js'


const router=express.Router()

router.use(validation)
router.post('/allContacts',allContacts)

export default router