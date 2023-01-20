import { Location } from '../models/location.js'
import { User } from '../models/user.js'

function newLocation(req, res) {
  Location.find({})
  .then(locations => {
    console.log("Locations", locations);
    res.render('locations/index', {
      title: 'Add Location',
      locations: locations,
    })
  })
  .catch(err => {
    res.redirect("/locations")
  })
}


function deleteLocation(req, res) {
  Location.findByIdAndDelete(req.params.id)
  .then(location => {
    res.redirect("/locations")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/locations")
  })
}


function create(req, res) {
  User.findByIdAndDelete(req.user._id)
  .then(location => {
    res.redirect("/locations")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/locations")
  })
  return
  req.body.owner = req.user.profile._id
  Location.create(req.body)
  .then(location => {
    res.redirect('/locations')
  })
  .catch(err => {
    console.log("error", err)
    res.redirect('/')
  })
}


function show(req, res) {
  Location.findById(req.params.id)
  .then(location => {
    Location.find
      res.render('locations/show', {
        title: 'Location Details', 
        location: location,
      })
    })
    .catch(err => {
      console.log(err);
      res.redirect("/")
    })
  }


  function update(req, res) {
  Location.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(location => {
    res.redirect('/locations')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


export {
  newLocation as new,
  deleteLocation as delete,
  create, 
  show,
  update,
}