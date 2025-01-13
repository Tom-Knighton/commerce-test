import { SessionOptions } from "iron-session";

export interface SessionData {
  cartId?: string;
  customerAuth?: string;
  sessionId?: string;
  sessionRotation?: string;
  hostRotation?: string;
  csrf?: string;
}

export const defaultSession: SessionData = {

};

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_PASSWORD as string,
  cookieName: process.env.IRON_NAME as string,
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    secure: true,
  },
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
