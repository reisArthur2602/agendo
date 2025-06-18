import { Business, User } from "@prisma/client";

type UserSession = User & { business?: Business };

declare module "next-auth" {
  interface Session {
    user: UserSession;
  }
}
