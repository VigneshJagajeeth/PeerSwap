
import React from 'react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Buy Smart. Rent Easy. Exchange Skills.
            <br />
            <span className="text-primary">Your Campus Marketplace.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            PeerSwap is where students connect. Exchange skills for goods, rent what you need, or find great deals. All powered by cash or your own talents.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={onGetStarted}
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
