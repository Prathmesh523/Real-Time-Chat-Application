import express from 'express'
import { allChats, allContacts, postChat } from '../controllers/chatControllers.js'
import validation from '../middlewares/validation.js'


const router=express.Router()

router.post('/allContacts', validation, allContacts)
router.post('/allChats', allChats)
router.post('/postChat', postChat)

export default router