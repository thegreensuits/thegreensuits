export interface UserProfileAddress {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface UserProfile {
  displayName: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string;
  profilePictureUrl: string;
  birthDate: Date;
  address: UserProfileAddress;
}
