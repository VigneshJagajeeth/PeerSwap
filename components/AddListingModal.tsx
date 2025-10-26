import React, { useState } from 'react';
import { Listing, ListingType, PaymentType } from '../types';

interface AddListingModalProps {
  onAdd: (listingData: Omit<Listing, 'id' | 'user' | 'imageUrl'>) => void;
  onClose: () => void;
}

const AddListingModal: React.FC<AddListingModalProps> = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [listingType, setListingType] = useState<ListingType>(ListingType.SALE);
  const [paymentType, setPaymentType] = useState<PaymentType>(PaymentType.CASH);
  const [cashPrice, setCashPrice] = useState('');
  const [skillPrice, setSkillPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
        alert("Please fill in all required fields.");
        return;
    }
    
    onAdd({
      title,
      description,
      listingType,
      paymentType,
      cashPrice: (paymentType === PaymentType.CASH || paymentType === PaymentType.BOTH) ? parseFloat(cashPrice) : undefined,
      skillPrice: (paymentType === PaymentType.SKILL || paymentType === PaymentType.BOTH) ? skillPrice : undefined,
      isVerified: listingType === ListingType.SKILL ? false : undefined,
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Add a New Listing</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="listingType" className="block text-sm font-medium text-gray-700">Listing Type</label>
            <select
              id="listingType"
              value={listingType}
              onChange={(e) => setListingType(e.target.value as ListingType)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value={ListingType.SALE}>For Sale</option>
              <option value={ListingType.RENTAL}>For Rent</option>
              <option value={ListingType.SKILL}>Skill Exchange</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Option</label>
            <div className="mt-2 space-y-2">
                <div className="flex items-center">
                    <input id="pay-cash" type="radio" value={PaymentType.CASH} checked={paymentType === PaymentType.CASH} onChange={(e) => setPaymentType(e.target.value as PaymentType)} className="focus:ring-primary h-4 w-4 text-primary border-gray-300" />
                    <label htmlFor="pay-cash" className="ml-3 block text-sm font-medium text-gray-700">Cash Only</label>
                </div>
                <div className="flex items-center">
                    <input id="pay-skill" type="radio" value={PaymentType.SKILL} checked={paymentType === PaymentType.SKILL} onChange={(e) => setPaymentType(e.target.value as PaymentType)} className="focus:ring-primary h-4 w-4 text-primary border-gray-300" />
                    <label htmlFor="pay-skill" className="ml-3 block text-sm font-medium text-gray-700">Skill Swap Only</label>
                </div>
                <div className="flex items-center">
                    <input id="pay-both" type="radio" value={PaymentType.BOTH} checked={paymentType === PaymentType.BOTH} onChange={(e) => setPaymentType(e.target.value as PaymentType)} className="focus:ring-primary h-4 w-4 text-primary border-gray-300" />
                    <label htmlFor="pay-both" className="ml-3 block text-sm font-medium text-gray-700">Cash or Skill Swap</label>
                </div>
            </div>
          </div>
          
          {(paymentType === PaymentType.CASH || paymentType === PaymentType.BOTH) && (
            <div>
              <label htmlFor="cashPrice" className="block text-sm font-medium text-gray-700">Cash Price ($)</label>
              <input
                type="number"
                id="cashPrice"
                value={cashPrice}
                onChange={(e) => setCashPrice(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="e.g., 50.00"
                min="0"
                step="0.01"
                required
              />
            </div>
          )}

          {(paymentType === PaymentType.SKILL || paymentType === PaymentType.BOTH) && (
            <div>
              <label htmlFor="skillPrice" className="block text-sm font-medium text-gray-700">Desired Skill Swap</label>
              <input
                type="text"
                id="skillPrice"
                value={skillPrice}
                onChange={(e) => setSkillPrice(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="e.g., Help with a resume"
                required
              />
            </div>
          )}

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-800 font-semibold px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-primary/90 transition-colors"
            >
              Add Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListingModal;
