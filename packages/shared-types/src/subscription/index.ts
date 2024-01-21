import { User } from "../user";

export interface Subscription {
  user: User;
  active: boolean;
  status: string;
  subscriptionId?: string;
  activeSince?: Date;
  activeUntil?: Date;
}
