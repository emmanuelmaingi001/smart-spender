import React from 'react';
import { DollarSign } from 'lucide-react';

const Logo = ({ className = "" }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
      <DollarSign className="w-5 h-5 text-white" />
    </div>
    <span className="text-xl font-bold text-gray-800">SmartSpender</span>
  </div>
);

export default Logo;