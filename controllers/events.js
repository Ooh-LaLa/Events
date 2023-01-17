import { Event } from '../models/event.js'


function newEvent(req, res) {
  res.render("events/new", {
    title: "Add Event",
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
  .then(flight => {
    Location.find({_id: {$nin: event.locations}})
    .then(locations => {
      res.render('flights/show', {
        title: 'Flight Detail', 
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

// function update(req, res) {
//   req.body.nowShowing = !!req.body.nowShowing
//   for (let key in req.body) {
//     if(req.body[key] === "") delete req.body[key]
//   }
//   Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
//   .then(movie => {
//     res.redirect(`/movies/${movie._id}`)
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect("/")
//   })
// }



export {
  newEvent as new,
  create,
  index,
  show,
  deleteEvent as delete, 
  edit,
  // update
}