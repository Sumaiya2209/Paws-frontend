import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("petPaws");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [process.env.BETTER_AUTH_URL, process.env.NEXT_PUBLIC_SERVER_URL].filter(Boolean),
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
        clientId: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_SECRET
    }
  },
  session : {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      //max 7days
      maxAge: 7 * 24 * 60 * 60
    }
  },
  plugins: [
    jwt()
  ]
});