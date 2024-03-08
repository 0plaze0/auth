import "dotenv/config.js";
import User from "../model/userSchema.js";
import { hashPassword } from "./../utils/authUtils.js";

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  //check if password exists
  //regex for email and password
  try {
    const hashPwd = hashPassword(password, process.env.SALT);
    const newUser = {
      username,
      email,
      password: hashPassword,
    };
    const result = await User.create;
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
    console.log(err);
  }
};

export default { registerUser };
