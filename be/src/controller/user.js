import { User } from "../../model/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
let { JWT_SECRET, JWT_EXPIRES } = process.env;
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
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
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
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES },
      (err, token) => {
        if (err) {
          throw new Error("Error creating token");
        }
        res.status(200).json({ token });
      }
    );
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
