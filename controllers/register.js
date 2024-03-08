import User from "./../model/UserSchema.js";

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  //check if password exists
  //regex for email and password
  try {
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
    console.log(err);
  }
};

export default { registerUser };
