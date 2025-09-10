import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-cream dark:text-slate-200 transition-colors duration-500">
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-fade-in-up">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="bg-amber-500 dark:bg-amber-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="text-slate-900" size={24} />
              </div>
              <h3 className="font-lora text-2xl font-bold group-hover:text-amber-400 transition-colors duration-300">Sacred Wisdom Library</h3>
            </div>
            <p className="text-slate-300 dark:text-slate-400 text-lg leading-relaxed mb-6 max-w-md transition-colors duration-300">
              Your sanctuary for spiritual growth and enlightenment. Discover timeless wisdom 
              through our carefully curated collection of transformative texts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 dark:bg-slate-700 hover:bg-amber-500 dark:hover:bg-amber-600 p-3 rounded-full transition-all duration-300 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 dark:bg-slate-700 hover:bg-amber-500 dark:hover:bg-amber-600 p-3 rounded-full transition-all duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 dark:bg-slate-700 hover:bg-amber-500 dark:hover:bg-amber-600 p-3 rounded-full transition-all duration-300 hover:scale-110 transform">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-lora text-xl font-bold mb-6 text-amber-500 dark:text-amber-400">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300 hover:translate-x-2 transform inline-block">All Books</a></li>
              <li><a href="#" className="text-slate-300 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300 hover:translate-x-2 transform inline-block">New Releases</a></li>
              <li><a href="#" className="text-slate-300 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300 hover:translate-x-2 transform inline-block">Popular Books</a></li>
              <li><a href="#" className="text-slate-300 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300 hover:translate-x-2 transform inline-block">Authors</a></li>
              <li><a href="#" className="text-slate-300 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300 hover:translate-x-2 transform inline-block">Categories</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-lora text-xl font-bold mb-6 text-amber-500 dark:text-amber-400">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300 dark:text-slate-400 hover:text-amber-400 transition-colors duration-300 group">
                <Mail size={18} />
                <span>wisdom@sacredlibrary.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 dark:text-slate-400 hover:text-amber-400 transition-colors duration-300 group">
                <Phone size={18} />
                <span>+1 (555) 123-WISE</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300 dark:text-slate-400 hover:text-amber-400 transition-colors duration-300 group">
                <MapPin size={18} className="mt-1" />
                <span>123 Serenity Lane<br />Peaceful Valley, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 dark:border-slate-600 mt-12 pt-8 text-center">
          <p className="text-slate-400 dark:text-slate-500">
            © 2025 Sacred Wisdom Library. All rights reserved. | 
            <a href="#" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;