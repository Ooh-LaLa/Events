import { Router } from 'express'
import * as locationsCtrl from '../controllers/locations.js'

const router = Router()

router.get('/', locationsCtrl.new)

router.post('/', locationsCtrl.create)

export {
  router
}