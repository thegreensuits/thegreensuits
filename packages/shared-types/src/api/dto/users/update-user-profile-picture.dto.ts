import { IsNotEmpty, IsString, IsUrl, Matches } from "class-validator";

import { UserProfile } from "../../../user/profile";
import { IMAGE_URL_REGEX } from "../../constants/regex.constant";

export abstract class UpdateProfilePictureDto
  implements Pick<UserProfile, "profilePictureUrl">
{
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @Matches(IMAGE_URL_REGEX, {
    message: "L'url de l'image n'est pas valide",
  })
  public profilePictureUrl!: string;
}
