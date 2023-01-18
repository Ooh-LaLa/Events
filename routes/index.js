import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'

const router = Router()

// router.get('/', function (req, res) {
//   res.render('index', { title: 'Events' })
// })


router.get('/', eventsCtrl.index)


export {
  router
}
