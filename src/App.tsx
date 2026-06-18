// import  { useState, useMemo } from 'react';
// import DarkModeToggle from './components/DarkModeToggle';
// import HeroSection from './components/HeroSection';
// import SearchFilter from './components/SearchFilter';
// import BooksGrid from './components/BooksGrid';
// import Footer from './components/Footer';
// import { books } from './data/books';

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All Categories');
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

//   const filteredBooks = useMemo(() => {
//     return books.filter((book) => {
//       const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           book.description.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchesCategory = selectedCategory === 'All Categories' || 
//                              book.category === selectedCategory;
      
//       return matchesSearch && matchesCategory;
//     });
//   }, [searchTerm, selectedCategory]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`}>
//       <DarkModeToggle isDark={isDarkMode} toggle={toggleDarkMode} />
//       <HeroSection />
//       <SearchFilter 
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//         viewMode={viewMode}
//         setViewMode={setViewMode}
//       />
//       <BooksGrid books={filteredBooks} viewMode={viewMode} />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SatguruPanthPage from "./pages/SatguruPanthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/satguru-panth"
          element={<SatguruPanthPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;