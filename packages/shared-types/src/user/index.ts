import { UserCredentials } from "./credentials";
import { UserIdentifier } from "./identifier";
import { UserProfile } from "./profile";
import { Subscription } from "../subscription";

export interface User {
  id: number;
  stripeCustomerId: string;

  identifier: UserIdentifier;
  profile: UserProfile;

  password: string;
  credentials: UserCredentials;

  subscription: Subscription;

  isConfirmed: boolean;
  isAdmin: boolean;
  hasGuild: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export * from "./credentials";
export * from "./identifier";
export * from "./profile";
