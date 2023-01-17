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
    res.redirect('/events')
  })
  .catch(err => {
    res.redirect('/events')
  })
}




export {
  newEvent as new,
  create,
}