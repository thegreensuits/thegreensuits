// checks if a password has at least one uppercase letter and a number or special character
export const PASSWORD_REGEX =
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

// checks if a string has only letters, numbers, spaces, apostrophes, dots and dashes
export const NAME_REGEX = /(^[\p{L}\d'\\.\s\\-]*$)/u;

// checks if a string is a valid slug, useful for usernames
export const SLUG_REGEX = /^[a-z\d]+(?:(\.|-|_)[a-z\d]+)*$/;

// validates if passwords are valid bcrypt hashes
export const BCRYPT_HASH = /\$2[abxy]?\$\d{1,2}\$[A-Za-z\d\\./]{53}/;

export const PHONE_NUMBER_REGEX =
  /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

export const ZIP_CODE_REGEX = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;

export const IMAGE_URL_REGEX = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi;
