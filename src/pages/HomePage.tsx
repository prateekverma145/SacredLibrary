import { useState, useMemo } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import HeroSection from "../components/HeroSection";
import SearchFilter from "../components/SearchFilter";
import BooksGrid from "../components/BooksGrid";
import Footer from "../components/Footer";
import { books } from "../data/books";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");
  const [viewMode, setViewMode] =
    useState<"grid" | "list">("grid");

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        book.author
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        book.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <DarkModeToggle
        isDark={isDarkMode}
        toggle={() => setIsDarkMode(!isDarkMode)}
      />

      <HeroSection />

      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <BooksGrid
        books={filteredBooks}
        viewMode={viewMode}
      />

      <Footer />
    </div>
  );
};

export default HomePage;