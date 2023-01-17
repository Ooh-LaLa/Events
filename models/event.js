import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const eventSchema = new Schema({
  name: {type: String, required: true},
  location: { type: Schema.Types.ObjectId, ref: "Location", required: true},
  attended: {type: Boolean, default: false},
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