import { Router } from 'express'
import * as locationsCtrl from '../controllers/locations.js'

const router = Router()

router.get('/', locationsCtrl.new)

router.post('/', locationsCtrl.create)

router.get('/:id', locationsCtrl.show)


router.get('/:id/edit', locationsCtrl.edit)

router.delete("/:id", locationsCtrl.delete)

router.put("/:id", locationsCtrl.update)



export {
  router
}