import React from 'react';
import SiteCard from './SiteCard';

const CategorySection = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <SiteCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;