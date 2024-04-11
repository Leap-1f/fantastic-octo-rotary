import { User } from "../../model/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
let { JWT_SECRET, JWT_EXP, EMAILUSER, EMAILPASS, EMAILTOKEN } = process.env;
var transport = nodemailer.createTransport({
  service: "Mail.ru",
  auth: {
    user: EMAILUSER,
    pass: EMAILTOKEN,
    auth: EMAILPASS,
  },
});
dotenv.config();
const saltRounds = 10;
async function hashPassword(ePassword) {
  const password = ePassword;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    throw new Error("Error hashing password");
  }
}
// Use when creating a new user.

// This is the registration function.
export const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const user = new User({
      username: name,
      email: email,
      password: hashedPassword,
      role: role,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// This is the login function.
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid password");
    }
    jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXP },
      (err, token) => {
        if (err) {
          throw new Error("Error creating token");
        }
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const forgotPassword = async (request, response) => {
  const { email } = request.body;
  const user = await User.find(
    {
      email: email,
    },
    {
      email: 1,
      id: 1,
    }
  );
  if (user.id != undefined) {
    var code = Math.floor(1000 + Math.random() * 9000);
    const users = await User.findByIdAndUpdate(user.id, {
      code: code,
    });
    const mailOptions = {
      from: EMAILUSER, // sender address
      to: email, // list of receivers
      subject: "Password reset.", // Subject line
      text: `Your reset password code is ${code}`, // plaintext body
      html: `<b>Your reset password code is ${code}</b>`, // html body
    };
    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
    });
    response.status(200).json({ message: "Email sent" });
  } else {
    response.status(400).json({ message: "Email not found" });
  }
};
export const forgotPassword_code = async (request, response) => {
  const { email, code } = request.body;
  const user = await User.find(
    {
      email: email,
    },
    {x
      email: 1,
      id: 1,
      code: 1,
    }
  );
  if (id != "") {
    if (user.code === parseInt(code)) {
      // change to jwt is possible.
      var tempauth = uuidv4();
      const users = await User.findByIdAndUpdate(user.id, {
        code: tempauth,
      });
      response.status(200);
      response.send({ temp: tempauth });
    } else {
      response.status(400);
      response.send("Email is not correct.");
    }
  } else {
    response.status(400);
    response.send("Email is not correct.");
  }
};
export const forgotPassword_change = async (request, response) => {
  const { email, code, pass } = request.body;
  const user = await User.find(
    {
      email: email,
    },
    {
      email: 1,
      id: 1,
      code: 1,
    }
  );
  if (id != "") {
    if (user.code === parseInt(code)) {
      const users = await User.findByIdAndUpdate(user.id, {
        password: pass,
      });
      response.status(200);
      response.send("Code is correct.");
    } else {
      response.status(400);
      response.send("Code is not correct.");
    }
  } else {
    response.status(400);
    response.send("Email is not correct.");
  }
};
