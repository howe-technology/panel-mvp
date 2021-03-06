const mongoose = require("mongoose")

const reqInt = {
  type: Number,
  required: true
}
  
const reqStr = {
  type: String,
  required: true
}  

const userSettings = new mongoose.Schema({
  role: reqStr,
  status: reqStr
})

// User
const userSchema = new mongoose.Schema({
  // https://mongoosejs.com/docs/schematypes.html
  googleID: reqStr,
  name: reqStr,
  device: [mongoose.SchemaTypes.ObjectId],
  image: String,
  createdAt: {type: Date, default: Date.now},
  userSettings: userSettings,
  age: reqInt,
  location: reqStr,
  oldData: [mongoose.SchemaTypes.ObjectId]
})

module.exports = mongoose.model("User", userSchema);
