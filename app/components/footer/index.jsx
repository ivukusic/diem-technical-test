import { NavLink } from '@remix-run/react';

import logo from '../../../assets/logoDiem.avif';

export const Footer = () => (
  <footer className="container relative z-50 mx-auto border-t border-gray-200/70 py-6 leading-6">
    <div className="w-full text-center text-sm font-light text-gray-900/70">
      Developed by Ivan @{new Date().getFullYear()}
    </div>
  </footer>
);
