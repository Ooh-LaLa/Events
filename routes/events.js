import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.post('/', isLoggedIn, eventsCtrl.create)

// GET /events/new
router.get('/new', isLoggedIn, eventsCtrl.new)


// POST /events
router.post('/new', isLoggedIn, eventsCtrl.create)


// localhost:3000/events/:id
router.delete("/:id", isLoggedIn, eventsCtrl.delete)

router.get('/:id', isLoggedIn, eventsCtrl.show)


// localhost:3000/movies/:id/edit
// router.get("/:id/edit", eventsCtrl.edit)

// localhost:3000/movies/:id
// router.put("/:id", eventsCtrl.update)


// GET /flights/show
router.get('/:id', eventsCtrl.show)


export {
	router
}