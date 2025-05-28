import { workExperience } from '../../data/workExperience';

const WorkExperience = () => {
  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in web development and software engineering
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200"></div>

          {workExperience.map((job, index) => (
            <div key={job.id} className="relative mb-12 lg:mb-16">
              {/* Timeline dot */}
              <div className="absolute left-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content */}
              <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
                <div className="card p-6">
                  {/* Job header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.type === 'Full-time' ? 'bg-primary-100 text-primary-800' :
                        job.type === 'Freelance' ? 'bg-accent-100 text-accent-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {job.type}
                      </span>
                      <span className="text-sm text-gray-500">{job.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                    <h4 className="text-lg font-semibold text-primary-600">{job.company}</h4>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4">{job.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-1">
                      {job.responsibilities.slice(0, 3).map((responsibility, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                      {job.responsibilities.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          +{job.responsibilities.length - 3} more responsibilities...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            Core Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend Development</h3>
              <p className="text-gray-600 text-sm mb-3">
                Creating responsive, interactive user interfaces
              </p>
              <div className="flex flex-wrap gap-1">
                {['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-primary-100 text-primary-800 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend Development</h3>
              <p className="text-gray-600 text-sm mb-3">
                Building scalable server-side applications
              </p>
              <div className="flex flex-wrap gap-1">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-accent-100 text-accent-800 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools & DevOps</h3>
              <p className="text-gray-600 text-sm mb-3">
                Development tools and deployment practices
              </p>
              <div className="flex flex-wrap gap-1">
                {['Git', 'Docker', 'AWS', 'Jest', 'Webpack'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
