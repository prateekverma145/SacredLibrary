import React from 'react';
import { BookOpen } from 'lucide-react';

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
  category: string;
  link:string;
}
// const handle= ()->{console.log("kln")};
 const handle = (link: string) => {
    window.open(link, "_blank");
  };
  // const pdfLink = "https://prateekstore123.blob.core.windows.net/contaner1/Aatmbodh-.pdf";

const BookCard: React.FC<BookCardProps> = ({ title, author, cover, description, category , link}) => {
  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl dark:hover:shadow-amber-500/20 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.05] overflow-hidden animate-fade-in-up">
      {/* Book Cover */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full  group-hover:scale-125 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Hover Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <button  onClick={()=>handle(link)} className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-110">
            <BookOpen size={18} />
            Start Reading
          </button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-amber-500/90 text-slate-900 px-3 py-1 rounded-full text-sm font-medium transform group-hover:scale-110 transition-transform duration-300">
            {category}
          </span>
        </div>
      </div>
      
      {/* Book Details */}
      <div className="p-6">
        <h3 className="font-lora text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2 line-clamp-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-amber-600 dark:text-amber-400 font-l mb-3 transition-colors duration-300">द्वारा: {author}</p>
        <p className="text-slate-600 dark:text-slate-400 text-medium font-medium leading-relaxed line-clamp-3 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/30 to-amber-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
    </div>
  );
};

export default BookCard;