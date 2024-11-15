import React, { useEffect, useState } from 'react';
import { GithubIcon, Code2, Terminal, Cpu, Database, Globe } from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-50" />
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative">
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/50 backdrop-blur-lg' : ''
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Taller de Despliegue Continuo
              </h1>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-purple-400 transition-colors">
                <GithubIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
    
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Desarrollo e Implementación
            </h2>
            <p className="text-xl text-gray-400">
              Universidad Católica de Pereira - Ingeniería de Software
            </p>
            <div className="flex justify-center gap-4">
              <Globe className="w-6 h-6 text-blue-400 animate-pulse" />
              <Database className="w-6 h-6 text-purple-400 animate-pulse delay-100" />
              <Cpu className="w-6 h-6 text-pink-400 animate-pulse delay-200" />
            </div>
          </div>

         
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 mb-12 transform hover:scale-[1.02] transition-all border border-white/10">
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Participantes
            </h3>
            <div className="space-y-6">
              {[
                'Brahian Stiven Gil Arias',
                'Laura Katherine Echeverry Toro',
                'Laura Mayerly Diaz Boada'
              ].map((name, index) => (
                <div key={index} 
                     className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Code2 className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-200">{name}</span>
                </div>
              ))}
            </div>
          </div>

       
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <Terminal className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Profesor
              </h3>
            </div>
            <p className="text-xl font-medium ml-12 text-gray-200">
              Alonso Toro Lazo
            </p>
          </div>
        </main>

        <footer className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} - Ingenieria de Software
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;