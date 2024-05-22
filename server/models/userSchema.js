const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const options = { discriminatorKey: 'role', collection: 'users' };

const userSchema = new mongoose.Schema({
     photo:{
      type: String,
      default:"",
     },
      name: {
        type: String,
        default: "",
      },
      username: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
      password: {
        type: String,
        default: "",
      },
      cpassword: {
        type: String,
        default: "",
      },
      dob: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "",
      },

      role:{
        type: String,
        default:"",
      },

      declaration:{
        type: Boolean,
        default:false
      }
},options)

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
      this.cpassword = await bcrypt.hash(this.password, 12);
    }
    next();
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, username: this.username }, process.env.TOKEN_SECRET, { expiresIn: "7d" });
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;