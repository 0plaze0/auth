import bcrypt from "bcrypt";

const hashPassword = async (password, saltRound) => {
  const salt = await bcrypt.genSaltSync(saltRound);
  const hsPwd = await bcrypt.hashSync(password, salt);
  return hsPwd;
};

export { hashPassword };
