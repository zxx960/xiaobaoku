import React from 'react';

const SiteCard = ({ name, url, icon }) => {
  return (
    <a
      href={url}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-lg">
          {name}
        </div>
      </div>
    </a>
  );
};

export default SiteCard;