import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="flex bg-gray-50 py-1 px-2 h-8 border-t border-gray-100">
      <div className="flex-none w-72">#footer</div>
      <div className="flex-grow"></div>
      <div className="flex-none w-72 text-right">
        <FontAwesomeIcon icon={faCodeBranch} className="text-gray-700" />
        {process.env.NODE_ENV}
      </div>
    </footer>
  );
}
