import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface DarkModeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 text-amber-400 transition-all duration-500 ${
            isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} 
          size={24} 
        />
        <Moon 
          className={`absolute inset-0 text-slate-300 transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
          }`} 
          size={24} 
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;