import "dotenv/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  checkEmail,
  strongPassword,
  hashPassword,
} from "../utils/authUtils.js";
import User from "./../model/userSchema.js";

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "username or password required" });
  try {
    const user = await User.findOne({ username: username }).exec();
    if (!user) return res.sendStatus(401);

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const accessToken = await jwt.sign(
        { username, id: user._id },
        process.env.ACCESS_TOKEN_SECRET
      );

      return res
        .status(200)
        .cookie("access-token", accessToken, {
          sameSite: "none",
          secure: "false",
        })
        .json({
          id: user._id,
          username,
        });
    } else return res.sendStatus(401);
  } catch (err) {
    console.log(err.message);
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!checkEmail(email))
    return res.status(400).json({ message: "enter valid email" });

  try {
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(404).json({ message: "email doesn't exist" });
    res.status(200).json({ redirect: true, id: user._id });
  } catch (err) {
    console.log(err.message);
  }
};

const resetPassword = async (req, res) => {
  const { id, password } = req.body;

  if (!strongPassword(password))
    return res.status(401).json({ message: "make a stronger password" });

  try {
    const salt = parseInt(process.env.SALT);
    const hashPwd = await hashPassword(password, salt);

    const user = await User.findByIdAndUpdate(id, { password: hashPwd });

    res.status(200).json({ message: "password updated" });
  } catch (err) {
    console.log(err.message);
  }
};
export default { loginUser, forgotPassword, resetPassword };
