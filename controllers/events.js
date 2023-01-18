import { Event } from '../models/event.js'
import { Location } from "../models/location.js"



function newEvent(req, res) { 
  Location.find({})
.then(locations => {
  res.render('events/new', {
    locations: locations,
    title: "Add Event",
  })
})
.catch(error => {
  console.log(error)
  // redirect to localhost:3000
  res.redirect('/')
})
}

function create(req, res) {
  console.log("REQ.BODY", req.body)
  for (let key in req.body) { 
    if (req.body[key] === '') delete req.body[key]
  }
  console.log("REQ.BODY", req.body)
  Event.create(req.body)
  .then(event => {
    res.redirect('/')
  })
  .catch(err => {
    console.log("error", err)
    res.redirect('/')
  })
}


function index(req, res) {
  Event.find({})
  .then(events => {
    res.render('events/index', {
      events: events,
      title: "All Events",
    })
  })
  .catch(error => {
    console.log(error)
    // redirect to localhost:3000
    res.redirect('/')
  })
}



function show(req, res) {
  Event.findById(req.params.id)
  .populate('locations')
  .then(event => {
    Location.find({_id: {$nin: event.locations}})
    .then(locations => {
      res.render('events/show', {
        title: 'Event Detail', 
        event: event,
        locations: locations,
      })
    })
    .catch(err => {
      console.log(err);
      res.redirect("/")
    })
  })
}



function deleteEvent(req, res) {
  Event.findByIdAndDelete(req.params.id)
  .then(event => {
    res.redirect("/events")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/events")
  })
}

function edit(req, res) {
  Event.findById(req.params.id)
  .then(event => {
    res.render("events/edit", {
      event: event,
      title: "Edit Event"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


export {
  newEvent as new,
  create,
  index,
  show,
  deleteEvent as delete, 
  edit,
}