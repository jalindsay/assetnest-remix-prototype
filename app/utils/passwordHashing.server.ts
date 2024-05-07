import bcrypt from 'bcryptjs'

const saltRounds = 10

export const generatePasswordHash = async (password: string) => {
  const salt = await bcrypt.genSalt(saltRounds)
  return await bcrypt.hash(password, salt)
}

export const comparePasswords = (password: string, passwordHash: string) => {
  return bcrypt.compare(password, passwordHash)
}
