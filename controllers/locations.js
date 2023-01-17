import { Location } from '../models/location.js'

function newLocation(req, res) {
  Location.find({})
  .then(locations => {
    res.render('locations/index', {
      title: 'Add Location',
      locations: locations,
    })
  })
  .catch(err => {
    res.redirect("/locations")
  })
}


function create(req, res) {
  Location.create(req.body)
  .then(location => { //meal isn't needed, but get in the habit for React!
    res.redirect('/locations')
  })
}


export {
  newLocation as new,
  create,
}