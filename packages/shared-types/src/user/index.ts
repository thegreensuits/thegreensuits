import { Credentials } from "./credentials";
import { UserProfile } from "./profile";

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  confirmed: boolean;
  isAdmin: boolean;
  profile: UserProfile;
  credentials: Credentials;
  createdAt: Date;
  updatedAt: Date;
}

export * from "./credentials";
export * from "./profile";
