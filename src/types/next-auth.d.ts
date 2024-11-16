import { Char } from "@/db/schema/char";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      chars?: Char[];
    };
  }
}
