import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'

const router = Router()

// GET /events/new
router.get('/new', eventsCtrl.new)


// POST /events
router.post('/', eventsCtrl.create)


// localhost:3000/events/:id
router.delete("/:id", eventsCtrl.delete)

router.get('/:id', eventsCtrl.show)


// localhost:3000/movies/:id/edit
router.get("/:id/edit", eventsCtrl.edit)

// localhost:3000/movies/:id
// router.put("/:id", eventsCtrl.update)


export {
	router
}