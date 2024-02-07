// src/components/Quote.tsx

import React from 'react';

const Quote: React.FC = () => {
  return (
    <div className="bg-gray-200 mt-5 text-center mb-8 left-0 right-0 z-0">
      <p className="text-3xl font-bold">
      “Mientras tu <span className="text-blue-500">produces,</span> nosotros vamos por tus <span className="text-red-500">muestras.”</span>
      </p>
    </div>
  );
};

export default Quote;
