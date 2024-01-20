import { IsEmail, IsString, Length } from "class-validator";

export abstract class SignUpDto {
  @IsString()
  @Length(3, 100, {
    message: "Nom d'utilisateur invalide",
  })
  public username!: string;

  @IsString()
  @IsEmail()
  @Length(5, 255)
  public email!: string;

  @IsString()
  @Length(8, 255)
  public password!: string;
}
