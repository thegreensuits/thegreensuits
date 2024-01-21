import { UserCredentials } from "./credentials";
import { UserProfile } from "./profile";
import { Subscription } from "../subscription";

export interface User {
  id: number;
  stripeCustomerId: string;
  username: string;
  email: string;
  password: string;
  confirmed: boolean;
  isAdmin: boolean;
  profile: UserProfile;
  credentials: UserCredentials;
  subscriptions: Subscription[];
  createdAt: Date;
  updatedAt: Date;
}

export * from "./credentials";
export * from "./profile";
