import React from 'react';
import { BookOpen, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    // The main section container is slightly longer to accommodate the new content
    <section className="relative py-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900/90 dark:from-slate-950/60 dark:via-slate-950/80 dark:to-slate-950/95 transition-colors duration-500" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-lora text-5xl md:text-7xl font-bold text-cream dark:text-slate-100 mb-6 leading-tight animate-slide-in-down">
            Satguru Panth
            <span className="block text-amber-500 dark:text-amber-400 mt-2 animate-slide-in-up animation-delay-300">Brahmagyan Sansthan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
            Discover transformative spiritual texts and timeless wisdom in our curated collection of enlightening books
          </p>
          
          {/* Featured Book */}
          <div className="relative max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-900">
            <div className="bg-cream/10 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-amber-500/20 dark:border-amber-400/30 hover:border-amber-500/40 dark:hover:border-amber-400/50 transition-all duration-500 hover:bg-cream/15 dark:hover:bg-slate-800/40">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Book Cover */}
                <div className="relative">
                  <div className="relative w-64 h-80 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-700 hover:drop-shadow-2xl">
                    <img 
                      src="https://prateekstore123.blob.core.windows.net/contaner1/Gemini_Generated_Image_9w4uss9w4uss9w4u.png"
                      alt="Book of the Month"
                      className="w-full h-full object-cover rounded-lg shadow-2xl hover:shadow-amber-500/20 transition-shadow duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent rounded-lg hover:from-amber-400/30 transition-all duration-500" />
                  </div>
                </div>
                
                {/* Book Details */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-amber-500 dark:text-amber-400 fill-current animate-pulse" size={20} />
                    <span className="text-amber-500 dark:text-amber-400 font-semibold">Book of the Month</span>
                  </div>
                  <h2 className="font-lora text-3xl md:text-4xl font-bold text-cream dark:text-slate-100 mb-4 hover:text-amber-400 transition-colors duration-300">
                    सतगुरु पंथ
                  </h2>
                  <p className="text-amber-400 dark:text-amber-300 text-lg mb-4">लेखक सुरेशादयाल जी महाराज</p>
                  <p className="text-slate-300 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    केवल “मन” को सन्मुख कराके मन को पूर्ण कराया जाता है । पूर्ण मन जो भी सोंचेगा वह सब पूरा होगा ।
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                      <BookOpen size={20} />
                      Start Reading
                    </button>
                    <button className="border-2 border-amber-500 dark:border-amber-400 text-amber-500 dark:text-amber-400 hover:bg-amber-500 dark:hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform">
                      <a href='https://satguru-panth.vercel.app/'> Visit</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* ===== NEW: About the Author Section ===== */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-1200">
            <div className="bg-cream/10 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-amber-500/20 dark:border-amber-400/30">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Author Image */}
                <div className="md:w-1/3 flex-shrink-0">
                  <img
                    // IMPORTANT: Replace this src with the actual URL of your author's photo
                    src="https://prateekstore123.blob.core.windows.net/contaner1/author-banner.png" // Placeholder using your uploaded image
                    alt="परम संत सद्गुरु वक्त सुरेशदयाल जी महाराज"
                    className="w-full h-auto object-cover rounded-xl shadow-xl border-4 border-amber-500/50 dark:border-amber-400/50 transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                {/* Author Details */}
                <div className="md:w-2/3 text-left">
                  <p className="text-amber-500 dark:text-amber-400 font-semibold mb-2 text-lg">
                    संस्थापक
                  </p>
                  <h3 className="font-lora text-3xl md:text-4xl font-bold text-cream dark:text-slate-100 mb-4">
                    परम संत सद्गुरु वक्त सुरेशदयाल जी महाराज
                  </h3>
                  <p className="text-slate-300 dark:text-slate-400 text-lg leading-relaxed">
                    साहित्य के क्षेत्र में, लेखक वास्तुकार बन जाते हैं, सावधानीपूर्वक जटिल कहानियाँ गढ़ते हैं जो दिल और दिमाग के बीच पुल बनाते हैं।
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-1500">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-amber-500 dark:text-amber-400 mb-2 group-hover:text-amber-400 dark:group-hover:text-amber-300 transition-colors duration-300">1,247</div>
              <div className="text-slate-300 dark:text-slate-400">Sacred Texts</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-amber-500 dark:text-amber-400 mb-2 group-hover:text-amber-400 dark:group-hover:text-amber-300 transition-colors duration-300">50k+</div>
              <div className="text-slate-300 dark:text-slate-400">Readers</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-amber-500 dark:text-amber-400 mb-2 group-hover:text-amber-400 dark:group-hover:text-amber-300 transition-colors duration-300">24/7</div>
              <div className="text-slate-300 dark:text-slate-400">Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;