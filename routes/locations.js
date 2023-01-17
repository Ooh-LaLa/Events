import { Router } from 'express'
import * as locationsCtrl from '../controllers/locations.js'

const router = Router()

router.get('/new', locationsCtrl.new)

export {
  router
}