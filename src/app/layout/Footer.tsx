import React from 'react';

function Footer() {
  return (
    <footer className="flex bg-gray-50 py-1 px-2 h-8 border-t border-gray-100">
      <div className="flex-none w-72">#footer</div>
      <div className="flex-grow"></div>
      <div className="flex-none w-72 text-right">{process.env.NODE_ENV}</div>
    </footer>
  );
}

export default Footer;
