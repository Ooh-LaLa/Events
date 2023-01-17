import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const eventSchema = new Schema({
  
  location: { type: Schema.Types.ObjectId, ref: "Location"},
  attended: {type: Boolean},
  date: {type: Date}},
  {timestamps: true,
  })

const Event = mongoose.model('Event', eventSchema)

export {
  Event
}