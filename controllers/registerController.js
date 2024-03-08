import "dotenv/config.js";
import User from "../model/userSchema.js";
import {
  hashPassword,
  strongPassword,
  checkEmail,
} from "../utils/authUtils.js";

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(401).json({ message: "Fill all the field" });

  //regex for valid email
  if (!checkEmail(email))
    return res.status(401).json({ message: "send a valid email" });

  //regex for stronger password
  if (!strongPassword(password))
    return res.status(401).json({ message: "make a stronger password" });

  try {
    //check for duplicate
    const duplicate = await User.findOne({ email }).exec();
    if (duplicate)
      return res.status(401).json({ message: "email already exists" });

    //password hashing
    const salt = parseInt(process.env.SALT);
    const hashPwd = await hashPassword(password, salt);

    const newUser = {
      username,
      email,
      password: hashPwd,
    };
    const result = await User.create(newUser);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
    console.log(err);
  }
};

export default { registerUser };
