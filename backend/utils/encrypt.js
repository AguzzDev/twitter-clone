import crypto from "crypto-js"

export const encrypt = (text) =>
crypto.AES.encrypt(JSON.stringify(text), process.env.ENCRYPT_PASSWORD).toString()
