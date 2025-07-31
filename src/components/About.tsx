
import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for creating amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 3 years of experience 
              creating web applications. I love turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or enjoying a good cup of coffee 
              while brainstorming the next big idea.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-400">Years Exp</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Code size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
                <p className="text-gray-300">
                  Building robust applications with modern technologies and best practices.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Palette size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-300">
                  Creating intuitive and beautiful user interfaces that users love.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="p-2 bg-green-600 rounded-lg">
                <Rocket size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300">
                  Ensuring fast, scalable, and maintainable solutions for the long term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
