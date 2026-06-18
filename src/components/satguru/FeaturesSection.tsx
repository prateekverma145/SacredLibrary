// import { features } from "../../data/satguruPanthData";

// export default function FeaturesSection() {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-6">

//         <h2 className="text-center text-4xl font-bold mb-14">
//           12 प्रमुख विशेषताएँ
//         </h2>

//         <div className="grid lg:grid-cols-3 gap-6">

//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className="p-8 rounded-3xl bg-slate-800/40 border border-amber-500/20"
//             >
//               <h3 className="text-xl text-amber-400 font-semibold mb-4">
//                 {feature.title}
//               </h3>

//               <p className="text-slate-300">
//                 {feature.description}
//               </p>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-slate-900">

      <div className="container mx-auto px-6">


        <div className="max-w-7xl mx-auto">

  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      सतगुरु पंथ की विशेषताएँ
    </h2>


<div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>

<p className="text-slate-400 text-lg">
  आत्मा के प्रत्यक्ष बोध एवं पूर्ण रूपान्तरण का मार्ग
</p>


  </div>

  <div className="grid lg:grid-cols-2 gap-6">
{/* Feature 1 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20">
  <h3 className="text-amber-400 text-2xl font-bold mb-4">
    1. सबका मूल और सार
  </h3>

  <ul className="space-y-2 text-slate-300">
    <li>• सभी मत और पंथों का मूल एवं सार</li>
    <li>• सभी धर्मग्रंथों का मूल एवं सार</li>
    <li>• अध्यात्म का मूल एवं सार</li>
    <li>• अद्वैत आत्मा का मत</li>
    <li>• पूरे अध्यात्म का केन्द्र बिंदु</li>
    <li>• सभी जीवों का लक्ष्य</li>
  </ul>
</div>

{/* Feature 2 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20">
  <h3 className="text-amber-400 text-2xl font-bold mb-4">
    2. चौथा लोक
  </h3>

  <div className="text-slate-300 space-y-3">
    <p>नाम रहे चौथे पद माँही, तुम ढूँढो त्रिलोकी माहीं।</p>
    <p>चार पैर हैं धर्म के, कलि में एक विलुप्त।</p>
  </div>
</div>

{/* Feature 3 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20">
  <h3 className="text-amber-400 text-2xl font-bold mb-4">
    3. परम धर्म
  </h3>

  <p className="text-slate-300">
    जीव का आत्मा के सन्मुख होना परम धर्म है।
    यही सत्य पद है।
  </p>
</div>

{/* Feature 4 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-red-500/20">
  <h3 className="text-red-400 text-2xl font-bold mb-4">
    4. सबसे बड़ा पाप
  </h3>

  <p className="text-slate-300">
    आत्मा से होना विमुख।
  </p>
</div>

{/* Feature 5 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-red-500/20">
  <h3 className="text-red-400 text-2xl font-bold mb-4">
    5. महाअज्ञान
  </h3>

  <p className="text-slate-300">
    आत्मा से होना विमुख।
  </p>
</div>

{/* Feature 6 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-green-500/20">
  <h3 className="text-green-400 text-2xl font-bold mb-4">
    6. सबसे बड़ा पुण्य
  </h3>

  <p className="text-slate-300">
    आत्मा को जानना।
  </p>
</div>

{/* Feature 7 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20">
  <h3 className="text-amber-400 text-2xl font-bold mb-4">
    7. प्रैक्टिकल रूप
  </h3>

  <p className="text-slate-300">
    संतों की शिक्षाओं का प्रत्यक्ष रूप तथा जीव को आत्मा बनाने का मार्ग।
  </p>
</div>

{/* Feature 8 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20">
  <h3 className="text-amber-400 text-2xl font-bold mb-4">
    8. आत्मघट से प्रकट
  </h3>

  <p className="text-slate-300">
    सभी संत आत्मघट से प्रकट होते हैं। जीव को आत्मघट के
    सन्मुख करके आत्मा बनाया जाता है।
  </p>
</div>

{/* Feature 9 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20">
  <h3 className="text-amber-400 text-2xl font-bold mb-4">
    9. आत्मा ही सत्य
  </h3>

  <ul className="space-y-2 text-slate-300">
    <li>• आत्मा ही सत्य है</li>
    <li>• आत्मा ही सनातन है</li>
    <li>• आत्मा को जानना परम धर्म है</li>
  </ul>
</div>

{/* Feature 10 */}
<div className="bg-gradient-to-r from-amber-500/10 to-amber-400/5 rounded-3xl p-8 border border-amber-500/20">
  <h3 className="text-amber-400 text-2xl font-bold mb-4">
    10. सबका मालिक एक
  </h3>

  <div className="flex flex-wrap gap-3">
    {[
      "परमात्मा",
      "आत्मा",
      "अनामी",
      "राधा स्वामी",
      "अनाम",
      "अरूप",
      "सतगुरु"
    ].map((item) => (
      <span
        key={item}
        className="px-4 py-2 rounded-full bg-slate-900/60 text-slate-200"
      >
        {item}
      </span>
    ))}
  </div>

  <p className="text-slate-300 mt-4">
    सभी एक ही परम सत्य के नाम हैं।
  </p>
</div>

{/* Feature 11 */}
<div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20">
  <h3 className="text-amber-400 text-2xl font-bold mb-4">
    11. समुद्र और बूँद
  </h3>

  <p className="text-slate-300">
    समुद्र को बूँद रूप में तथा बूँद को समुद्र रूप में दिखाने का मार्ग।
  </p>
</div>

{/* Feature 12 */}
<div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl p-8 border border-green-500/20">
  <h3 className="text-green-400 text-2xl font-bold mb-4">
    12. केवल सन्मुख होना
  </h3>

  <div className="flex flex-wrap gap-3 mb-4">
    {["ज्ञान", "ध्यान", "जप", "तप", "क्रिया"].map((item) => (
      <span
        key={item}
        className="px-4 py-2 rounded-full bg-slate-900/60 text-slate-300"
      >
        {item} नहीं
      </span>
    ))}
  </div>

  <p className="text-slate-300 font-semibold">
    केवल सन्मुख होना।
  </p>
</div>


  </div>

</div>


      </div>

    </section>
  );
};

export default FeaturesSection;