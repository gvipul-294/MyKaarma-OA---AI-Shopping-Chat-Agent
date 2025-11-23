import React from 'react';
import { Phone } from '../types';

interface PhoneCardProps {
  phone: Phone;
  onCompare?: (phone: Phone) => void;
}

export const PhoneCard: React.FC<PhoneCardProps> = ({ phone, onCompare }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col w-64 flex-shrink-0 snap-center">
      <div className="h-48 overflow-hidden bg-slate-100 relative">
        <img 
          src={phone.imageUrl} 
          alt={phone.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
           ₹{phone.price.toLocaleString('en-IN')}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-slate-800 text-lg truncate" title={phone.name}>{phone.name}</h3>
        <p className="text-xs text-slate-500 mb-2">{phone.brand}</p>
        
        <div className="flex-grow space-y-1 mb-3">
            <div className="flex items-center text-xs text-slate-600">
                <span className="font-semibold w-16">Display:</span> {phone.specs.display.split(' ')[0]}
            </div>
            <div className="flex items-center text-xs text-slate-600">
                <span className="font-semibold w-16">Chip:</span> <span className="truncate">{phone.specs.processor}</span>
            </div>
            <div className="flex items-center text-xs text-slate-600">
                <span className="font-semibold w-16">Cam:</span> <span className="truncate">{phone.specs.camera.split('+')[0]}</span>
            </div>
        </div>

        <div className="flex gap-2 mt-auto">
            {onCompare && (
                <button 
                    onClick={() => onCompare(phone)}
                    className="flex-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg font-medium transition-colors"
                >
                    Compare
                </button>
            )}
            <button className="flex-1 text-xs bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition-colors">
                Buy
            </button>
        </div>
      </div>
    </div>
  );
};
