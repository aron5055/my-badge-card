import { MD5 } from "crypto-js";

export default function getAvatar(email, size = 80) {
  const hash = MD5(email.trim().toLowerCase()).toString();
  return `https://0.gravatar.com/avatar/${hash}?s=${size}`;
}
