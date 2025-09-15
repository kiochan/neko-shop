import { Session } from "@/generated/prisma";

export type CheckSessionRequest = {
  sessionId: string;
};

export type CheckSessionResponse = { valid: boolean };
