// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <header className="bg-gray-200 mb-5 inset-x-0 top-5 flex items-center justify-center z-10">
      <div className="flex items-center">
        <img src={logoSrc} alt="Logo de la empresa" className="mt-5 w-24 h-24 ml-4" />
        <p className="text-lg ml-4 mt-4 font-bold text-center">
          Laboratorio de{' '}
          <span className="text-blue-500">pruebas mecánicas</span>,{' '}
          <span className="text-blue-500">asesoría</span> y{' '}
          <span className="text-blue-500">capacitación en ensayos mecánicos</span>.
        </p>
      </div>
    </header>
  );
};

export default Header;
