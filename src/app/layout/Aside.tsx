import React from 'react';
import Navigation from './Navigation';

function Aside() {
  return (
    <aside className="inset-y-0 z-10 flex-shrink-0 w-48 lg:static dark:border-primary-darker dark:bg-darker focus:outline-none bg-gray-100 px-2 py-1 border-r border-gray-200">
      <Navigation />
    </aside>
  );
}

export default Aside;
