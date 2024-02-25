import bcrypt from 'bcrypt';

const hashPassword = async (plainPassword) => {
  const hash = await bcrypt.hash(plainPassword, 10)
  return hash
}

const comparePasswords = async (plainPassword, hashedPassword) => {
  const match = await bcrypt.compare(plainPassword, hashedPassword);
  return match;
}

export { hashPassword, comparePasswords }