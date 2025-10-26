import React from 'react';
import { Listing, ListingType, PaymentType, ListingUser } from '../types';
import CashIcon from './icons/CashIcon';
import SkillIcon from './icons/SkillIcon';
import VerifiedIcon from './icons/VerifiedIcon';

interface ListingCardProps {
  listing: Listing;
  onUserSelect: (user: ListingUser) => void;
  onListingSelect: (listing: Listing) => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, onUserSelect, onListingSelect }) => {
  const { title, description, imageUrl, listingType, isVerified, paymentType, cashPrice, skillPrice, user } = listing;

  const typeColors: { [key in ListingType]: string } = {
    [ListingType.SALE]: 'bg-blue-100 text-blue-800',
    [ListingType.RENTAL]: 'bg-green-100 text-green-800',
    [ListingType.SKILL]: 'bg-indigo-100 text-indigo-800',
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col group">
      <div className="relative">
        <button onClick={() => onListingSelect(listing)} className="block w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-t-xl">
            <img className="h-56 w-full object-cover" src={imageUrl} alt={title} />
        </button>
        <div className={`absolute top-2 right-2 text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[listingType]}`}>
          {listingType}
        </div>
        {isVerified && listingType === ListingType.SKILL && (
          <div className="absolute top-2 left-2" title="Verified Skill">
            <VerifiedIcon className="w-6 h-6 text-white bg-primary rounded-full p-0.5" />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <button onClick={() => onListingSelect(listing)} className="text-left focus:outline-none">
            <h3 className="text-xl font-bold text-gray-800 mb-2 truncate group-hover:text-primary transition-colors">{title}</h3>
        </button>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description.substring(0, 100)}{description.length > 100 ? '...' : ''}</p>
        
        <div className="space-y-3 mb-4">
          {(paymentType === PaymentType.CASH || paymentType === PaymentType.BOTH) && cashPrice != null && (
             <div className="flex items-center text-gray-700">
                <CashIcon className="w-5 h-5 mr-2 text-secondary"/>
                <span className="font-semibold text-lg">${cashPrice.toFixed(2)}</span>
             </div>
          )}
           {(paymentType === PaymentType.SKILL || paymentType === PaymentType.BOTH) && skillPrice && (
             <div className="flex items-start text-gray-700">
                <SkillIcon className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-1"/>
                <span className="text-sm italic">Swap for: <span className="not-italic font-medium">{skillPrice}</span></span>
             </div>
          )}
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
            <button onClick={() => onUserSelect(user)} className="w-full text-left group/user flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                 <img className="h-10 w-10 rounded-full object-cover" src={user.avatarUrl} alt={user.name} />
                <div className="ml-3">
                    <p className={`text-sm font-medium text-gray-900 group-hover/user:text-primary transition-colors`}>{user.name}</p>
                </div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
