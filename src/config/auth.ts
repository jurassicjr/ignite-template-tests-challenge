export default {
  jwt: {
    secret: process.env.JWT_SECRET as string || "senhaPimpola",
    expiresIn: '1d'
  }
}
