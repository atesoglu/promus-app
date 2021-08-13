import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-50 p-2 h-12 border-t border-gray-100">
      #footer <br />
      {process.env.NODE_ENV}
    </footer>
  );
}

export default Footer;
