import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'

const router = Router()

// GET /events/new
router.get('/new', eventsCtrl.new)


// POST /events
router.post('/', eventsCtrl.create)

export {
	router
}