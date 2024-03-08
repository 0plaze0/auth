import "dotenv/config.js";
import User from "./../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "username or password required" });
  try {
    const result = await User.findOne({ username: username }).exec();
    if (!result) return res.sendStatus(401);

    const match = await bcrypt.compare(password, result.password);

    if (match) {
      const accessToken = await jwt.sign(
        { username, id: result._id },
        process.env.ACCESS_TOKEN_SECRET
      );

      return res
        .status(200)
        .cookie("access-token", accessToken, {
          sameSite: "none",
          secure: "false",
        })
        .json({
          id: result._id,
          username,
        });
    } else return res.sendStatus(401);
  } catch (err) {
    console.log(err.message);
  }
};
export default { loginUser };
