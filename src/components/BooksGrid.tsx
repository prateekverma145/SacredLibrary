import React from 'react';
import BookCard from './BookCard';

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
  category: string;
  link: string;
}

interface BooksGridProps {
  books: Book[];
  viewMode: 'grid' | 'list';
}

const BooksGrid: React.FC<BooksGridProps> = ({ books, viewMode }) => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
            Explore Sacred Wisdom
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto transition-colors duration-300">
            Dive into our carefully curated collection of transformative spiritual texts, 
            each chosen to guide you on your journey of self-discovery and enlightenment.
          </p>
        </div>
        
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-stagger-in' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
        
        {books.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-xl text-slate-600 dark:text-slate-400">No books found matching your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BooksGrid;