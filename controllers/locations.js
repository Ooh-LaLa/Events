import { Location } from '../models/location.js'

function newLocation(req, res) {
  Location.find({})
  .then(locations => {
    res.render('locations/new', {
      title: 'Add Location',
      locations: locations,
    })
  })
  .catch(err => {
    res.redirect("/events")
  })
}
export {
  newLocation as new,
}