// import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { Mail, MessageSquare } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "电商平台",
      description: "一个功能齐全的在线购物平台，具有实时库存管理功能。",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "社交媒体仪表板",
      description: "用于社交媒体管理和内容计划的分析仪表板。",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "任务管理应用",
      description: "具有实时更新功能的协作项目管理工具。",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
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
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            为退休做准备
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
                我是一名充满激情的网络开发者，擅长构建现代化、响应式和用户友好的应用程序。
                凭借扎实的前端和后端开发基础，我创建无缝的数字体验，解决现实世界的问题。
              </p>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
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