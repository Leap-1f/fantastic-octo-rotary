import User from "../model/user";
import bcrypt from "bcrypt";
const saltRounds = 10;
const hashedPassword = async () => {
  const password = "Password.";
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    throw new Error("Error hashing password");
  }
};
// Use when creating a new user.
