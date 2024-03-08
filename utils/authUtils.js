import bcrypt from "bcrypt";

const hashPassword = async (password, saltRound) => {
  const salt = await bcrypt.genSaltSync(saltRound);
  const hsPwd = await bcrypt.hashSync(password, salt);
  return hsPwd;
};

const strongPassword = (password) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};

const checkEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export { hashPassword, strongPassword, checkEmail };
