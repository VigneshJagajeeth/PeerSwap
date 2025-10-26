import React from 'react';
import { UserProfile } from '../types';

interface LoginModalProps {
  users: UserProfile[];
  onLogin: (userId: number) => void;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ users, onLogin, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full m-4 max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Log In As...</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl leading-none">&times;</button>
        </div>
        
        <div className="overflow-y-auto -mr-4 pr-4 space-y-3">
          {users.map(user => (
            <button 
              key={user.id}
              onClick={() => onLogin(user.id)}
              className="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="ml-4">
                <p className="font-semibold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500 truncate">{user.bio}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;