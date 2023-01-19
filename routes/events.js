import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.post('/', isLoggedIn, eventsCtrl.create)

// GET /events/new
router.get('/new', eventsCtrl.new)


// POST /events
router.post('/new', eventsCtrl.create)


// localhost:3000/events/:id
router.delete("/:id", eventsCtrl.delete)

router.get('/:id', eventsCtrl.show)


// localhost:3000/movies/:id/edit
// router.get("/:id/edit", eventsCtrl.edit)

// localhost:3000/movies/:id
// router.put("/:id", eventsCtrl.update)


// GET /flights/show
router.get('/:id', eventsCtrl.show)


export {
	router
}