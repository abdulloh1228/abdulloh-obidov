
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MYDoctor.uz",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://mydoctoruz.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations, contact forms, and a blog section. Built with modern web technologies.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Analytics",
      description: "An analytics dashboard for social media metrics with data visualization, automated reporting, and multi-platform integration.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "Python", "Flask"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "A comprehensive LMS with course creation, video streaming, progress tracking, and student-teacher interaction features.",
      image: "/placeholder.svg",
      technologies: ["Angular", "Node.js", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
