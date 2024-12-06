import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">关于我们</h3>
            <p className="text-gray-300">
              我们致力于为用户提供最优质的导航服务，帮助您快速找到所需的资源。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <p className="text-gray-300">邮箱：contact@navsite.com</p>
            <p className="text-gray-300">电话：(+86) 123-4567-890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">微信</a>
              <a href="#" className="text-gray-300 hover:text-white">微博</a>
              <a href="#" className="text-gray-300 hover:text-white">知乎</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© 2023 NavSite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;