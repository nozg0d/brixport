import { useState } from 'react';
import { projects } from '../../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    if (filter === 'completed') return project.status === 'Completed';
    if (filter === 'in-progress') return project.status === 'In Progress';
    return true;
  });

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'completed', label: 'Completed' },
    { key: 'in-progress', label: 'In Progress' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planning':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my work in web development, from concept to deployment
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === filterOption.key
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden">
              {/* Project image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center text-sm py-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your filter to see more projects.</p>
          </div>
        )}

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-accent-50">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a
                href="mailto:your.email@example.com"
                className="btn-secondary"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
