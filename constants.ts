import { Listing, ListingType, PaymentType, UserProfile, ListingUser } from './types';

// Base User Profiles
const ALICE_JOHNSON_PROFILE: UserProfile = {
  id: 1,
  name: 'Alice Johnson',
  avatarUrl: 'https://i.pravatar.cc/150?u=alice',
  bio: 'Senior CS student passionate about UI/UX design and web development. Also a semi-pro photographer. Let\'s connect and create something amazing!',
  joinedDate: 'August 2022',
  averageRating: 4.8,
  totalReviews: 2,
  isAccountVerified: true,
  reviews: [
    { id: 1, authorName: 'Charlie Brown', authorAvatarUrl: 'https://i.pravatar.cc/150?u=charlie', rating: 5, comment: 'Alice designed a fantastic logo for my class project. Super creative and delivered it ahead of schedule. Highly recommend!', date: '2 days ago' },
    { id: 3, authorName: 'Bob Williams', authorAvatarUrl: 'https://i.pravatar.cc/150?u=bob', rating: 4, comment: 'Good communication and helped me with my social media graphics. Just took a little longer than expected, but the quality was great.', date: '3 weeks ago' },
  ],
  listings: [], // Will be populated below
};

const BOB_WILLIAMS_PROFILE: UserProfile = { id: 2, name: 'Bob Williams', avatarUrl: 'https://i.pravatar.cc/150?u=bob', bio: 'Mechanical engineering major. I build things for fun.', joinedDate: 'January 2023', averageRating: 4.5, totalReviews: 1, isAccountVerified: false, reviews: [], listings: [] };
const CHARLIE_BROWN_PROFILE: UserProfile = { id: 3, name: 'Charlie Brown', avatarUrl: 'https://i.pravatar.cc/150?u=charlie', bio: 'Film student and aspiring director.', joinedDate: 'March 2023', averageRating: 5.0, totalReviews: 1, isAccountVerified: true, reviews: [], listings: [] };
const DIANA_PRINCE_PROFILE: UserProfile = { id: 4, name: 'Diana Prince', avatarUrl: 'https://i.pravatar.cc/150?u=diana', bio: 'History major with a love for ancient artifacts.', joinedDate: 'February 2022', averageRating: 4.9, totalReviews: 0, isAccountVerified: false, reviews: [], listings: [] };
const ETHAN_HUNT_PROFILE: UserProfile = { id: 5, name: 'Ethan Hunt', avatarUrl: 'https://i.pravatar.cc/150?u=ethan', bio: 'Just a student. Definitely not an international spy.', joinedDate: 'October 2022', averageRating: 4.7, totalReviews: 1, isAccountVerified: false, reviews: [], listings: [] };
const FIONA_GLENANNE_PROFILE: UserProfile = { id: 6, name: 'Fiona Glenanne', avatarUrl: 'https://i.pravatar.cc/150?u=fiona', bio: 'Loves the great outdoors and adventure sports.', joinedDate: 'May 2023', averageRating: 4.6, totalReviews: 0, isAccountVerified: false, reviews: [], listings: [] };
const GEORGE_COSTANZA_PROFILE: UserProfile = { id: 7, name: 'George Costanza', avatarUrl: 'https://i.pravatar.cc/150?u=george', bio: 'Architecture enthusiast. I have many thoughts on building design.', joinedDate: 'December 2022', averageRating: 4.2, totalReviews: 0, isAccountVerified: false, reviews: [], listings: [] };
const HANNAH_ABBOTT_PROFILE: UserProfile = { id: 8, name: 'Hannah Abbott', avatarUrl: 'https://i.pravatar.cc/150?u=hannah', bio: 'Political science student and debate club president.', joinedDate: 'November 2021', averageRating: 4.8, totalReviews: 0, isAccountVerified: true, reviews: [], listings: [] };

// Simplified user objects for listings
const toListingUser = (user: UserProfile): ListingUser => ({
  id: user.id,
  name: user.name,
  avatarUrl: user.avatarUrl,
});

export const MOCK_LISTINGS_DATA: Listing[] = [
  {
    id: 1,
    title: 'Graphic Design for Social Media',
    description: 'I can create stunning graphics for your social media posts. Experienced with Canva and Adobe Suite.',
    imageUrl: 'https://picsum.photos/seed/skill1/600/400',
    listingType: ListingType.SKILL,
    isVerified: true,
    paymentType: PaymentType.BOTH,
    cashPrice: 25,
    skillPrice: 'Proofread my essay',
    user: toListingUser(ALICE_JOHNSON_PROFILE),
  },
  {
    id: 2,
    title: 'Barely Used Mechanical Keyboard',
    description: 'Selling my Keychron K2 mechanical keyboard. Great condition, brown switches. Perfect for coding or gaming.',
    imageUrl: 'https://picsum.photos/seed/item2/600/400',
    listingType: ListingType.SALE,
    paymentType: PaymentType.CASH,
    cashPrice: 70,
    user: toListingUser(BOB_WILLIAMS_PROFILE),
  },
  {
    id: 3,
    title: 'Rent my Professional Camera',
    description: 'Rent my Sony A7III for your projects. Comes with a 24-70mm lens. Daily and weekly rates available.',
    imageUrl: 'https://picsum.photos/seed/item3/600/400',
    listingType: ListingType.RENTAL,
    paymentType: PaymentType.BOTH,
    cashPrice: 50,
    skillPrice: 'Help me build a website portfolio',
    user: toListingUser(CHARLIE_BROWN_PROFILE),
  },
  {
    id: 4,
    title: 'Python Tutoring Session',
    description: 'Struggling with Python? I can help you with basics, data structures, and algorithms. 1-hour sessions.',
    imageUrl: 'https://picsum.photos/seed/skill4/600/400',
    listingType: ListingType.SKILL,
    paymentType: PaymentType.CASH,
    cashPrice: 30,
    user: toListingUser(DIANA_PRINCE_PROFILE),
  },
  {
    id: 5,
    title: 'Textbook: "Introduction to Algorithms"',
    description: 'Latest edition of the CLRS algorithms textbook. No markings, like new. A must-have for any CS student.',
    imageUrl: 'https://picsum.photos/seed/item5/600/400',
    listingType: ListingType.SALE,
    paymentType: PaymentType.BOTH,
    cashPrice: 45,
    skillPrice: 'A session on guitar basics',
    user: toListingUser(ETHAN_HUNT_PROFILE),
  },
  {
    id: 6,
    title: 'Rent my Camping Tent (2-person)',
    description: 'Spacious and waterproof 2-person tent for your next adventure. Easy to set up.',
    imageUrl: 'https://picsum.photos/seed/item6/600/400',
    listingType: ListingType.RENTAL,
    paymentType: PaymentType.SKILL,
    skillPrice: 'Help moving furniture next weekend',
    user: toListingUser(FIONA_GLENANNE_PROFILE),
  },
    {
    id: 7,
    title: 'Video Editing Services',
    description: 'I will edit your vlogs, short films, or project videos. Proficient in Final Cut Pro and Adobe Premiere.',
    imageUrl: 'https://picsum.photos/seed/skill7/600/400',
    listingType: ListingType.SKILL,
    paymentType: PaymentType.BOTH,
    cashPrice: 100,
    skillPrice: 'Fix my bike',
    user: toListingUser(GEORGE_COSTANZA_PROFILE),
  },
  {
    id: 8,
    title: 'Nintendo Switch Lite',
    description: 'Selling a yellow Nintendo Switch Lite in perfect working condition. Comes with a charger and a case.',
    imageUrl: 'https://picsum.photos/seed/item8/600/400',
    listingType: ListingType.SALE,
    paymentType: PaymentType.CASH,
    cashPrice: 150,
    user: toListingUser(HANNAH_ABBOTT_PROFILE),
  },
  {
    id: 9,
    title: 'Resume & Cover Letter Review',
    description: 'As a senior with multiple internship offers, I can help you polish your resume and cover letter to land interviews.',
    imageUrl: 'https://picsum.photos/seed/skill9/600/400',
    listingType: ListingType.SKILL,
    isVerified: false,
    paymentType: PaymentType.SKILL,
    skillPrice: 'A large pizza',
    user: toListingUser(ALICE_JOHNSON_PROFILE),
  },
];

// Populate user listings
ALICE_JOHNSON_PROFILE.listings = MOCK_LISTINGS_DATA.filter(l => l.user.id === ALICE_JOHNSON_PROFILE.id);
BOB_WILLIAMS_PROFILE.listings = MOCK_LISTINGS_DATA.filter(l => l.user.id === BOB_WILLIAMS_PROFILE.id);
CHARLIE_BROWN_PROFILE.listings = MOCK_LISTINGS_DATA.filter(l => l.user.id === CHARLIE_BROWN_PROFILE.id);
DIANA_PRINCE_PROFILE.listings = MOCK_LISTINGS_DATA.filter(l => l.user.id === DIANA_PRINCE_PROFILE.id);
ETHAN_HUNT_PROFILE.listings = MOCK_LISTINGS_DATA.filter(l => l.user.id === ETHAN_HUNT_PROFILE.id);
FIONA_GLENANNE_PROFILE.listings = MOCK_LISTINGS_DATA.filter(l => l.user.id === FIONA_GLENANNE_PROFILE.id);
GEORGE_COSTANZA_PROFILE.listings = MOCK_LISTINGS_DATA.filter(l => l.user.id === GEORGE_COSTANZA_PROFILE.id);
HANNAH_ABBOTT_PROFILE.listings = MOCK_LISTINGS_DATA.filter(l => l.user.id === HANNAH_ABBOTT_PROFILE.id);

export const MOCK_USERS: UserProfile[] = [
    ALICE_JOHNSON_PROFILE,
    BOB_WILLIAMS_PROFILE,
    CHARLIE_BROWN_PROFILE,
    DIANA_PRINCE_PROFILE,
    ETHAN_HUNT_PROFILE,
    FIONA_GLENANNE_PROFILE,
    GEORGE_COSTANZA_PROFILE,
    HANNAH_ABBOTT_PROFILE,
];
