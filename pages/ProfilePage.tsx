import React, { useState } from 'react';
import { UserProfile, Listing, ListingUser } from '../types';
import ListingCard from '../components/ListingCard';
import ReviewCard from '../components/ReviewCard';
import VerifiedIcon from '../components/icons/VerifiedIcon';
import StarIcon from '../components/icons/StarIcon';
import AddListingModal from '../components/AddListingModal';

interface ProfilePageProps {
  user: UserProfile;
  onBack: () => void;
  isCurrentUser: boolean;
  onAddNewListing: (listing: Omit<Listing, 'id' | 'user' | 'imageUrl'>) => void;
  onListingSelect: (listing: Listing) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onBack, isCurrentUser, onAddNewListing, onListingSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalReviews = user.reviews.length;

  const handleAddListing = (listingData: Omit<Listing, 'id' | 'user' | 'imageUrl'>) => {
    onAddNewListing(listingData);
    setIsModalOpen(false);
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} className="w-5 h-5 text-yellow-400" filled={i < Math.round(rating)} />
    ));
  };

  const handleUserSelectOnCard = (user: ListingUser) => {
      // Clicking on the user card from their own profile page should not navigate.
      // FIX: Corrected a type error. `user.id` is a number and `isCurrentUser` is a boolean, they cannot be compared.
      if (isCurrentUser) return;
  }

  return (
    <>
      {isModalOpen && <AddListingModal onAdd={handleAddListing} onClose={() => setIsModalOpen(false)} />}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button onClick={onBack} className="text-primary hover:underline font-semibold">
              &larr; Back to Marketplace
            </button>
          </div>
          
          {/* Profile Header */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-8 md:flex md:items-center md:space-x-8">
            <div className="md:flex-shrink-0 text-center md:text-left">
              <img 
                className="h-32 w-32 rounded-full object-cover mx-auto md:mx-0" 
                src={user.avatarUrl} 
                alt={user.name} 
              />
            </div>
            <div className="mt-4 md:mt-0 flex-grow">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                {user.isAccountVerified && <VerifiedIcon className="w-7 h-7 text-primary" title="Verified Account" />}
              </div>
              <p className="text-gray-500 mt-1">Joined {user.joinedDate}</p>
              <div className="flex items-center mt-2 justify-center md:justify-start">
                {renderStars(user.averageRating)}
                {totalReviews > 0 ? (
                  <>
                    <span className="ml-2 text-gray-600 font-semibold">{user.averageRating.toFixed(1)}</span>
                    <span className="ml-1 text-gray-500">({totalReviews} reviews)</span>
                  </>
                ) : (
                  <span className="ml-2 text-gray-500">No reviews yet</span>
                )}
              </div>
              <p className="text-gray-700 mt-4 max-w-xl text-center md:text-left">{user.bio}</p>
              <div className="mt-4 text-center md:text-left">
                {isCurrentUser ? (
                  <button onClick={() => setIsModalOpen(true)} className="bg-secondary text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-secondary/90 transition-transform transform hover:scale-105">
                    + Add New Listing
                  </button>
                ) : (
                  <button className="bg-primary text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-primary/90 transition-transform transform hover:scale-105">
                    Contact {user.name.split(' ')[0]}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="space-y-12">
            {/* Listings Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Listings ({user.listings.length})</h2>
              {user.listings.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {user.listings.map(listing => (
                    <ListingCard 
                        key={listing.id} 
                        listing={listing} 
                        onUserSelect={handleUserSelectOnCard}
                        onListingSelect={onListingSelect}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-gray-500 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">No Listings Yet</h3>
                  <p className="mt-2">{isCurrentUser ? "Time to add your first item or skill!" : "This user hasn't listed any items or skills."}</p>
                </div>
              )}
            </div>

            {/* Reviews Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews ({user.reviews.length})</h2>
              {user.reviews.length > 0 ? (
                <div className="space-y-6 max-w-3xl mx-auto">
                  {user.reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-gray-500 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">No Reviews Yet</h3>
                  <p className="mt-2">This user hasn't received any reviews.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;