import React from 'react';
import { ArrowDown } from 'lucide-react';
import { BackgroundCircles } from './ui/BackgroundCircles';

const Hero = () => {
  return (
    <BackgroundCircles
      title="Selva Sivam B"
      description={
        <>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-500/30">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
                alt="Selva Sivam B"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Software Engineer | Team Lead
              <span className="block mt-4">
                Passionate Software Engineer with expertise in backend and full-stack development.
                Leading teams to deliver high-quality solutions and mentoring the next generation of developers.
              </span>
            </div>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 mt-8 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Learn More
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </>
      }
      variant="senary"
      className="relative"
    />
  );
};

export default Hero;