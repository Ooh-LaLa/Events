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

function edit(req, res) {
  Location.findById(req.params.id)
  .then(location => {
    res.render("events/edit", {
      location: location,
      title: "Edit Location"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


function create(req, res) {
  Location.create(req.body)
  .then(location => { //meal isn't needed, but get in the habit for React!
    res.redirect('/locations')
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
    res.redirect(`/locations/${location._id}`)
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
  edit, 
  show,
  update,
}