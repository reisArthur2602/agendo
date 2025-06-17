import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST!,
        port: Number(process.env.EMAIL_SERVER_PORT!),
        auth: {
          user: process.env.EMAIL_SERVER_USER!,
          pass: process.env.EMAIL_SERVER_PASSWORD!,
        },
      },
      from: process.env.EMAIL_FROM!,
      async sendVerificationRequest({ identifier, url, provider }) {
        const { host } = new URL(url);
        const nodemailer = await import("nodemailer");
        const transport = nodemailer.createTransport(provider.server);

        await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: "Seu link de acesso",
          text: `Acesse sua conta em ${host}\n${url}`,
          html: `<p>Acesse sua conta em <strong>${host}</strong></p><p><a href="${url}">Clique aqui para entrar</a></p>`,
        });
      },
    }),
  ],
});
