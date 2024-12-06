import React from 'react';

const SearchBar = () => {
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <div className="flex items-center bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="搜索网站、工具、资源..."
          className="w-full px-6 py-4 rounded-l-lg focus:outline-none"
        />
        <button className="px-8 py-4 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors">
          <div className="flex space-x-1">
            <span>搜</span>
            <span>索</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;