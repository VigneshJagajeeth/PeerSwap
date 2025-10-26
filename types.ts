export enum ListingType {
  SKILL = 'Skill Exchange',
  SALE = 'For Sale',
  RENTAL = 'For Rent',
}

export enum PaymentType {
  CASH = 'Cash',
  SKILL = 'Skill Swap',
  BOTH = 'Cash or Skill Swap',
}

export interface Review {
  id: number;
  authorName: string;
  authorAvatarUrl: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
}

// A simplified user object for display on listing cards
export interface ListingUser {
  id: number;
  name: string;
  avatarUrl: string;
}

export interface Listing {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  listingType: ListingType;
  isVerified?: boolean; // For skills
  paymentType: PaymentType;
  cashPrice?: number;
  skillPrice?: string; 
  user: ListingUser;
}

// The full, detailed user profile object
export interface UserProfile {
  id: number;
  name: string;
  avatarUrl: string;
  bio: string;
  joinedDate: string;
  averageRating: number;
  totalReviews: number;
  isAccountVerified: boolean;
  reviews: Review[];
  listings: Listing[];
}
