// const sadhana = [
//   "चौथे पद आत्मा की भक्ति",
//   "तन, मन और सुरत से परे",
//   "अपरोक्ष होना",
//   "पाँच तत्वों से न्यारा",
//   "विहंगम चाल",
//   "सहज मार्ग",
//   "दृष्टि का पंथ",
//   "विवेक दृष्टि",
// ];

// export default function SadhanaSection() {
//   return (
//     <section className="py-20 bg-slate-900">
//       <div className="container mx-auto px-6">

//         <h2 className="text-4xl text-center font-bold mb-12">
//           साधना की विशेषताएँ
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           {sadhana.map((item) => (
//             <div
//               key={item}
//               className="rounded-2xl p-6 bg-slate-800"
//             >
//               {item}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


const SadhanaSection = () => {
  return (
    <section id="sadhana" className="py-24">

      <div className="container mx-auto px-6">

        
<div className="max-w-7xl mx-auto">

  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      साधना की विशेषताएँ
    </h2>


<div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>

<p className="text-slate-400 text-lg">
  आत्मा की प्राप्ति के लिए सहज एवं प्रत्यक्ष मार्ग
</p>


  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-6 border border-amber-500/20">
  <h3 className="text-amber-400 text-xl font-bold mb-3">
    1. चौथे पद की भक्ति
  </h3>

  <p className="text-slate-300">
    तन, मन और सुरत से परे आत्मा की भक्ति।
  </p>
</div>

<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-6 border border-amber-500/20">
  <h3 className="text-amber-400 text-xl font-bold mb-3">
    2. तन, मन, सुरत का उपयोग नहीं
  </h3>

  <p className="text-slate-300">
    साधना में तन, मन और सुरत का सहारा नहीं लिया जाता।
  </p>
</div>

<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-6 border border-amber-500/20">
  <h3 className="text-amber-400 text-xl font-bold mb-3">
    3. अपरोक्ष होना
  </h3>

  <p className="text-slate-300">
    जीव का प्रत्यक्ष आत्मबोध एवं आत्मस्वरूप का अनुभव।
  </p>
</div>

<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-6 border border-amber-500/20">
  <h3 className="text-amber-400 text-xl font-bold mb-3">
    4. पाँच तत्वों से न्यारा
  </h3>

  <p className="text-slate-300">
    शब्द, स्पर्श, रूप, रस और गंध से परे अवस्था।
  </p>
</div>

<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-6 border border-amber-500/20">
  <h3 className="text-amber-400 text-xl font-bold mb-3">
    5. विहंगम चाल
  </h3>

  <p className="text-slate-300">
    सीधे अनामी धाम तक पहुँचने का मार्ग।
  </p>
</div>

<div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-6 border border-green-500/20">
  <h3 className="text-green-400 text-xl font-bold mb-3">
    6. सहज मार्ग
  </h3>

  <p className="text-slate-300">
    प्रयास रहित, सरल एवं स्वाभाविक साधना।
  </p>
</div>

<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-6 border border-amber-500/20">
  <h3 className="text-amber-400 text-xl font-bold mb-3">
    7. दृष्टि का पंथ
  </h3>

  <p className="text-slate-300">
    केवल दृष्टि बदलकर जीव का उद्धार।
  </p>
</div>

<div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-3xl p-6 border border-amber-500/20">
  <h3 className="text-yellow-400 text-xl font-bold mb-3">
    8. विवेक दृष्टि
  </h3>

  <p className="text-slate-300">
    सत्य और असत्य का स्पष्ट ज्ञान कराने वाली दृष्टि।
  </p>
</div>


  </div>

</div>

      </div>

    </section>
  );
};

export default SadhanaSection;