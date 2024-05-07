export const passwordValid = (password: string) => {
  // Minimum 12 characters
  return password.length >= 12
}
