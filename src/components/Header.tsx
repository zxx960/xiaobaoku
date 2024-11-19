import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              个人网站
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">
              项目
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              关于
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              联系
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-500 hover:text-gray-700">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:your.email@example.com"
                className="text-gray-500 hover:text-gray-700">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
              项目
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
              关于
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
              联系
            </a>
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}