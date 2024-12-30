import { FaMusic, FaUtensils, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiPokerHand } from 'react-icons/gi';

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center px-8 md:px-12">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex flex-col">
          <p className="text-amber-700 mb-2">Hello, I'm</p>
          
          <h1 className="flex items-baseline gap-3 mb-1">
            <span className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Miki
            </span>
            <span className="text-xl md:text-2xl font-light text-gray-400 tracking-wide">
              /ˈmiːki/
            </span>
          </h1>
          
          <p className="text-base text-gray-600 italic mb-4">
            software engineer | builder | amatus sum
          </p>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            I'm a software engineer specializing in distributed systems and AI applications, focused on creating
            elegant solutions to real-world problems through innovative technology.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <FaMusic className="w-5 h-5 text-amber-700" />
                </div>
                <span className="text-gray-700 group-hover:text-amber-700 transition-colors">
                  Exploring the world of music
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <FaUtensils className="w-5 h-5 text-amber-700" />
                </div>
                <span className="text-gray-700 group-hover:text-amber-700 transition-colors">
                  Experimenting with new recipes in the kitchen
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <GiPokerHand className="w-8 h-8 text-amber-700" />
                </div>
                <span className="text-gray-700 group-hover:text-amber-700 transition-colors">
                  Playing poker and practicing trading strategy
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/arielmiki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#24292e]"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/arielmiki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0A66C2]"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 