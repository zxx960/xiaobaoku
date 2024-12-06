import React from 'react';
import CategorySection from '../components/CategorySection';
import { categories } from '../data/categories';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="bg-white rounded-2xl px-8 py-16 md:px-12 md:py-20 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                西牧的小宝库
              </h1>
              <p className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 max-w-2xl mx-auto leading-relaxed tracking-wide">
                个人项目作品集
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <CategorySection
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;