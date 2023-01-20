import { Router } from 'express'
import * as locationsCtrl from '../controllers/locations.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, locationsCtrl.new)

router.post('/', isLoggedIn, locationsCtrl.create)

router.get('/:id', isLoggedIn, locationsCtrl.show)


router.delete("/:id", isLoggedIn, locationsCtrl.delete)

router.put("/:id", isLoggedIn, locationsCtrl.update)



export {
  router
}