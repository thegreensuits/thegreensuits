import { Type } from "class-transformer";
import {
  IsDate,
  IsNotEmpty,
  IsObject,
  IsString,
  Matches,
  MinLength,
  ValidateNested,
} from "class-validator";
import { UserProfile, UserProfileAddress } from "src/user/profile";

import {
  PHONE_NUMBER_REGEX,
  ZIP_CODE_REGEX,
} from "../../constants/regex.constant";

abstract class UpdateUserProfileAddressDto implements UserProfileAddress {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  public street!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  public city!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(ZIP_CODE_REGEX, {
    message: "Le code postal n'est pas valide",
  })
  public zipCode!: string;

  @IsString()
  @IsNotEmpty()
  public country!: string;
}

export abstract class UpdateProfileDto
  implements
    Partial<
      Pick<
        UserProfile,
        | "displayName"
        | "firstName"
        | "lastName"
        | "birthDate"
        | "phoneNumber"
        | "address"
      >
    >
{
  @IsString()
  @MinLength(1)
  public displayName?: string;

  @IsString()
  @MinLength(1)
  public firstName?: string;

  @IsString()
  @MinLength(1)
  public lastName?: string;

  @IsDate()
  @Type(() => Date)
  public birthDate?: Date;

  @IsString()
  @Matches(PHONE_NUMBER_REGEX, {
    message: "Le numéro de téléphone n'est pas valide",
  })
  public phoneNumber?: string;

  @IsObject()
  @ValidateNested({ message: "L'adresse n'est pas valide" })
  @Type(() => UpdateUserProfileAddressDto)
  public address?: UpdateUserProfileAddressDto;
}
