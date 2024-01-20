import { User } from "../../user";

export interface CreateUserDto extends Partial<User> {
  email: string;
  username: string;
  password: string;
}
