
import React from 'react';
import { Listing, ListingUser, ListingType, PaymentType, UserProfile } from '../types';
import CashIcon from '../components/icons/CashIcon';
import SkillIcon from '../components/icons/SkillIcon';
import VerifiedIcon from '../components/icons/VerifiedIcon';

interface ListingDetailPageProps {
  listing: Listing;
  currentUser: UserProfile | null;
  onBack: () => void;
  onUserSelect: (user: ListingUser) => void;
  onPurchase: (listingId: number) => void;
}

const ListingDetailPage: React.FC<ListingDetailPageProps> = ({ listing, currentUser, onBack, onUserSelect, onPurchase }) => {
  const { id, title, description, imageUrl, listingType, isVerified, paymentType, cashPrice, skillPrice, user } = listing;

  const typeColors: { [key in ListingType]: { bg: string; text: string; border: string; } } = {
    [ListingType.SALE]: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-500' },
    [ListingType.RENTAL]: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-500' },
    [ListingType.SKILL]: { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-500' },
  };
  
  const isOwner = currentUser?.id === user.id;

  const getActionButton = () => {
    if (isOwner) {
      return (
        <button 
          disabled
          className="w-full bg-gray-300 text-gray-500 font-bold py-3 px-6 rounded-lg cursor-not-allowed"
        >
          This is your listing
        </button>
      );
    }
    
    let text = '';
    let priceText = cashPrice ? `$${cashPrice.toFixed(2)}` : '';
    switch (listingType) {
      case ListingType.SALE:
        text = 'Buy Now';
        break;
      case ListingType.RENTAL:
        text = 'Rent Now';
        break;
      case ListingType.SKILL:
        text = 'Request Skill Swap';
        priceText = ''; // No price for skill swap button
        break;
    }
    return (
      <button 
        onClick={() => onPurchase(id)}
        className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
      >
        {text} {priceText && <span className="font-normal opacity-90">{priceText}</span>}
      </button>
    );
  };
  
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <button onClick={onBack} className="text-primary hover:underline font-semibold">
            &larr; Back to Marketplace
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover min-h-[300px] md:h-full" />
              {isVerified && listingType === ListingType.SKILL && (
                <div className="absolute top-4 left-4" title="Verified Skill">
                    <VerifiedIcon className="w-8 h-8 text-white bg-primary rounded-full p-1 shadow-lg" />
                </div>
              )}
            </div>
            
            {/* Details Section */}
            <div className="p-8 flex flex-col">
              <div className={`self-start text-sm font-bold px-3 py-1 rounded-full mb-3 ${typeColors[listingType].bg} ${typeColors[listingType].text}`}>
                {listingType}
              </div>
              
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
              
              <p className="text-gray-600 mb-6 flex-grow">{description}</p>
              
              {/* Pricing Section */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3">
                 <h3 className="font-bold text-gray-800 text-lg">Payment Options</h3>
                 {(paymentType === PaymentType.CASH || paymentType === PaymentType.BOTH) && cashPrice != null && (
                    <div className="flex items-center text-gray-700">
                        <CashIcon className="w-6 h-6 mr-3 text-secondary"/>
                        <div>
                            <span className="font-semibold text-xl">${cashPrice.toFixed(2)}</span>
                            <span className="text-sm text-gray-500"> (Cash Payment)</span>
                        </div>
                    </div>
                )}
                {(paymentType === PaymentType.SKILL || paymentType === PaymentType.BOTH) && skillPrice && (
                    <div className="flex items-start text-gray-700">
                        <SkillIcon className="w-6 h-6 mr-3 text-accent flex-shrink-0 mt-1"/>
                        <div>
                            <span className="font-semibold text-md not-italic">{skillPrice}</span>
                             <span className="text-sm text-gray-500"> (Skill Swap)</span>
                        </div>
                    </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mb-6">
                {getActionButton()}
              </div>

              {/* User Info Section */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <h3 className="font-bold text-gray-500 text-sm uppercase mb-3">Listed By</h3>
                <button onClick={() => onUserSelect(user)} className="flex items-center text-left p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors w-full group">
                  <img className="h-14 w-14 rounded-full object-cover" src={user.avatarUrl} alt={user.name} />
                  <div className="ml-4">
                    <p className="text-lg font-bold text-gray-800 group-hover:text-primary">{user.name}</p>
                    <p className="text-sm text-primary font-semibold">View Profile &rarr;</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPage;
