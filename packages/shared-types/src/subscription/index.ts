import { User } from "../user";

export interface Subscription {
  user: User;
  active: boolean;
  status: string;
  subscriptionId?: string;
  invoiceUrl: string;
  activeSince?: Date;
  activeUntil?: Date;
}
