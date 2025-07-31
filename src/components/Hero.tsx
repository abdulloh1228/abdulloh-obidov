
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Abdulloh Obidov
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            I create beautiful, functional, and user-friendly digital experiences. 
            Passionate about turning ideas into reality through code and design.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-slide-up animation-delay-600">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full text-white hover:bg-green-600 transition-all duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="space-x-4 animate-slide-up animation-delay-800">
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
