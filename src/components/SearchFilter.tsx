import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  viewMode,
  setViewMode
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categories = [
    'All Categories',
    'Spiritual'
  ];

  return (
    <section className="bg-cream dark:bg-slate-900 py-12 border-b border-slate-200 dark:border-slate-700 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 dark:text-slate-400 transition-colors duration-300" size={20} />
            <input
              type="text"
              placeholder="Search for spiritual wisdom, authors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none transition-all duration-300 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-sm hover:shadow-md focus:shadow-lg"
            />
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-amber-500 dark:hover:border-amber-400 px-4 py-2 rounded-lg transition-all duration-300 text-slate-900 dark:text-slate-100 hover:scale-105 transform"
              >
                <Filter size={18} />
                <span className="font-medium">Filter</span>
              </button>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-amber-500 dark:hover:border-amber-400 px-4 py-2 rounded-lg focus:border-amber-500 dark:focus:border-amber-400 focus:outline-none transition-all duration-300 text-slate-900 dark:text-slate-100 hover:scale-105 transform"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-lg p-1 hover:scale-105 transform transition-all duration-300">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-amber-500 dark:bg-amber-600 text-white' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-amber-500 dark:bg-amber-600 text-white' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;