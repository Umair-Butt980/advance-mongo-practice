const mongoose = require('mongoose');
require('dotenv').config()

const { MONGO_URI } = process.env;
console.log(MONGO_URI , "<==MONGO_URI=====>")

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });