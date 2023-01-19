import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const eventSchema = new Schema({
  name: {type: String, required: true},
  location: { type: Schema.Types.ObjectId, required: true, ref: "Location"},
  attended: {type: String},
  date: {type: Date},
  price: {type: Number},
  notes: {type: String},
}, 
{timestamps: true,
  })

const Event = mongoose.model('Event', eventSchema)

export {
  Event
}