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

  activeSubscription: Subscription | null;
  subscriptions: Subscription[];

  isConfirmed: boolean;
  isAdmin: boolean;
  hasGuild: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export * from "./credentials";
export * from "./profile";
