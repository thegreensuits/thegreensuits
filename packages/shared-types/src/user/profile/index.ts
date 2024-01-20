export interface UserProfileAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface UserProfile {
  displayName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePictureUrl: string;
  birthDate: Date;
  address: UserProfileAddress;
}
