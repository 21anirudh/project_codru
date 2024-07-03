const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const options = { discriminatorKey: "role", collection: "users" };

const userSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      default:
        "data:image/png;base64,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",
    },
    name: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
      unique: true,
    },
    email: {
      type: String,
      default: "",
    },
    password: {
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

    declaration: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  options
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
