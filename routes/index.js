import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'
import * as indexCtrl from '../controllers/index.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Events' })
// })


router.get('/', isLoggedIn, eventsCtrl.index)

router.get('/signin', indexCtrl.signin)

export {
  router
}
