import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm">Add your photo here</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500/10 rounded-full"></div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hello! I'm {personalInfo.name}
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate developer with a love for creating innovative
                solutions to complex problems. With several years of experience
                in web development, I've honed my skills in both frontend and
                backend technologies.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work
                on the internet, which led me to dive deep into programming. Today,
                I specialize in building modern web applications that are not only
                functional but also provide great user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while reading about the latest industry trends.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-primary-600">3+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-primary-600">20+</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-primary-600">50+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-primary-600">100%</p>
                <p className="text-sm text-gray-600">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
