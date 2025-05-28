import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="section-padding min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-center lg:text-left">
          {/* Hero Image */}
          <div className="mb-8 lg:mb-12">
            <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-600 flex items-center justify-center text-white text-4xl lg:text-5xl font-bold shadow-xl">
              B
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Brix Blancaflor
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 mt-4 font-medium">
                Full-Stack Developer & UI/UX Enthusiast
              </h2>
            </div>

            <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
              I'm passionate about creating beautiful, functional, and user-centered digital experiences. 
              With expertise in modern web technologies, I bring ideas to life through clean code and 
              thoughtful design.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'GraphQL'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                to="/projects"
                className="btn-primary text-center"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="btn-secondary text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">5+</div>
              <div className="text-gray-600 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">50+</div>
              <div className="text-gray-600 mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">20+</div>
              <div className="text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">100%</div>
              <div className="text-gray-600 mt-1">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Featured Work Preview */}
        <div className="mt-16 lg:mt-24">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
            Featured Work
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🛒</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">E-Commerce Platform</h4>
              <p className="text-gray-600 mb-4">
                A full-stack e-commerce solution with modern design and seamless user experience.
              </p>
              <Link
                to="/projects"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="card p-6">
              <div className="w-full h-48 bg-gradient-to-br from-accent-100 to-primary-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">📋</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Task Management App</h4>
              <p className="text-gray-600 mb-4">
                Collaborative task management with real-time updates and team features.
              </p>
              <Link
                to="/projects"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
