// import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { Mail, MessageSquare } from 'lucide-react';
import heishenhua from './assets/heishenhua.webp';
import guodegang from './assets/guodegang.webp';

function App() {
  const projects = [
    {
      title: "天涯神贴播客",
      description: "一个在线收听天涯神贴播客的项目",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      liveUrl: "https://podcast.tianyashentie.org/",
    },
    {
      title: "黑神话悟空影神图",
      description: "这里收录了《黑神话：悟空》中出现的各类妖魔鬼怪",
      image: heishenhua,
      liveUrl: "https://yingshentu.xiaobaoku.cc/",
    },
    {
      title: "郭德纲相声播客",
      description: "一个在线收听郭德纲相声的项目",
      image: guodegang,
      liveUrl: "https://guodegang.xiaobaoku.cc/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            建造一个
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {" "}小果园
            </span>
          </h1>
          <p className="text-4xl text-gray-600 mb-8 max-w-2xl mx-auto">
            为躺平做准备
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">精选项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">关于我</h2>
              <p className="text-gray-600 mb-6">
                在这里，我会分享网站制作、谷歌广告优化和躺平生活的经验。
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">联系我</h2>
            <p className="text-gray-600 mb-8">
              有兴趣一起合作吗？让我们讨论您的项目！
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
              >
                <Mail className="w-5 h-5" />
                <span>发送邮件</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
              >
                <MessageSquare className="w-5 h-5" />
                <span>预约通话</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            {new Date().getFullYear()} 您的名字。保留所有权利。
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;