// const quotes = [
//   "आत्मा को ही जानना, सबसे बड़ा है पुण्य",
//   "आत्मा से होना विमुख, सबसे बड़ा है पाप",
//   "नाम रहे चौथे पद माँही",
// ];

// export default function QuotesSection() {
//   return (
//     <section className="py-20 bg-slate-900">

//       <div className="container mx-auto px-6">

//         <h2 className="text-center text-4xl font-bold mb-12">
//           प्रमुख उद्धरण
//         </h2>

//         <div className="space-y-8 max-w-4xl mx-auto">

//           {quotes.map((quote) => (
//             <blockquote
//               key={quote}
//               className="text-center text-2xl italic text-amber-400"
//             >
//               "{quote}"
//             </blockquote>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

const QuotesSection = () => {
  return (
    <section className="py-24 bg-slate-900">

      <div className="container mx-auto px-6">

        

     <div className="max-w-5xl mx-auto">

  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      प्रमुख उद्धरण
    </h2>

 
<div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>

<p className="text-slate-400 text-lg">
  सतगुरु पंथ की मूल शिक्षाओं का सार
</p>
 

  </div>

  <div className="grid md:grid-cols-2 gap-8">

 
<div className="bg-gradient-to-br from-amber-500/10 to-amber-400/5 border border-amber-500/20 rounded-3xl p-8">
  <div className="text-5xl text-amber-400 mb-4">❝</div>

  <blockquote className="text-xl text-slate-200 leading-relaxed">
    नाम रहे चौथे पद माँही,
    <br />
    तुम ढूँढो त्रिलोकी माहीं।
  </blockquote>
</div>

<div className="bg-gradient-to-br from-red-500/10 to-red-400/5 border border-red-500/20 rounded-3xl p-8">
  <div className="text-5xl text-red-400 mb-4">❝</div>

  <blockquote className="text-xl text-slate-200 leading-relaxed">
    आत्मा से होना विमुख,
    <br />
    सबसे बड़ा है पाप।
  </blockquote>
</div>

<div className="bg-gradient-to-br from-green-500/10 to-green-400/5 border border-green-500/20 rounded-3xl p-8">
  <div className="text-5xl text-green-400 mb-4">❝</div>

  <blockquote className="text-xl text-slate-200 leading-relaxed">
    आत्मा को ही जानना,
    <br />
    सबसे बड़ा है पुण्य।
  </blockquote>
</div>

<div className="bg-gradient-to-br from-blue-500/10 to-blue-400/5 border border-blue-500/20 rounded-3xl p-8">
  <div className="text-5xl text-blue-400 mb-4">❝</div>

  <blockquote className="text-xl text-slate-200 leading-relaxed">
    ज्ञान, ध्यान, जप, तप नहीं।
  </blockquote>
</div>
 

  </div>

  <div className="mt-8">

 
<div className="bg-slate-800/40 backdrop-blur-lg border border-amber-500/20 rounded-3xl p-10 text-center">

  <div className="text-5xl text-amber-400 mb-4">❝</div>

  <blockquote className="text-2xl md:text-3xl font-semibold text-white">
    तन थिर, मन थिर, सुरत थिर
  </blockquote>

  <p className="text-slate-400 mt-4">
    सहज मार्ग की पूर्ण स्थिर अवस्था
  </p>

</div>
 

  </div>

</div>


      </div>

    </section>
  );
};

export default QuotesSection;