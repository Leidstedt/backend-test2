
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TestModel = new Schema({
  name: { type: String, required: true, },
  surnamn:  { type: String, required: true, },
  male_or_female: { type: String, required: true, },
  birthyear: { type: Number, required: true, },
  subproject: { type: String, required: true, },
  company: { type: String, required: true, },
  education_hours: { type: Number, required: true, },
  course_title: { type: String, required: true, },
  category: { type: String, required: true, },
})

module.exports = new mongoose.model('Person', TestModel)