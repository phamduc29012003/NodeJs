const mongooseDelete = require('mongoose-delete');
const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String,require:true },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  videoId: { type: String,require:true },
  level: { type: String, maxLength: 255 },
  slug: { type: String, slug: "name",unique:true },
},{
  timestamps: true
});

Course.plugin(mongooseDelete,  { 
  overrideMethods: 'all' ,
  deletedAt:true,
});
mongoose.plugin(slug);

module.exports.Course = mongoose.model("Course", Course);

const User = new Schema({
  email: { type: String, require: true },
  password: { type: String, maxLength: 600, require: true },
  phoneNumber: { type: String, maxLength: 255 },
  confirm: { type: String },
}, { collection: 'user' });

User.plugin(slug);
module.exports.User = mongoose.model("User", User);
