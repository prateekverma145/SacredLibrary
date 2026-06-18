// const points = [
//   "सतगुरु पंथ राधास्वामी मत से निकला है",
//   "यह राधास्वामी मत की नई शिक्षा है",
//   "यह पूर्ण सनातन मत का मूल और सार है",
//   "यह चौथे लोक अर्थात आत्मा की शिक्षा है",
// ];

// export default function EducationSection() {
//   return (
//     <section className="py-20 bg-slate-900">
//       <div className="container mx-auto px-6">

//         <h2 className="text-4xl font-bold text-center mb-12">
//           सतगुरु पंथ की शिक्षा
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           {points.map((item) => (
//             <div
//               key={item}
//               className="p-6 rounded-3xl bg-slate-800 border border-amber-500/20"
//             >
//               {item}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">

        

        <div className="max-w-6xl mx-auto bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-amber-500/20 shadow-2xl">

  <div className="text-center mb-10">
    <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-4">
      Spiritual Teachings
    </span>


<h3 className="text-4xl font-bold text-white mb-4">
  सतगुरु पंथ की शिक्षा
</h3>

<div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>


  </div>

  <div className="grid md:grid-cols-2 gap-6 mb-10">


<div className="bg-slate-900/50 rounded-2xl p-6">
  <h4 className="text-amber-400 font-semibold text-lg mb-3">
    मूल आधार
  </h4>

  <ul className="space-y-3 text-slate-300">
    <li>• सतगुरु पंथ राधा स्वामी मत से निकला है।</li>
    <li>• यह राधा स्वामी मत की नई शिक्षा है।</li>
    <li>• यह पूर्ण सनातन मत पर आधारित है।</li>
    <li>• यह सनातन मत का मूल एवं सार है।</li>
  </ul>
</div>

<div className="bg-slate-900/50 rounded-2xl p-6">
  <h4 className="text-amber-400 font-semibold text-lg mb-3">
    मुख्य उद्देश्य
  </h4>

  <ul className="space-y-3 text-slate-300">
    <li>• चौथे लोक "आत्मा" की शिक्षा।</li>
    <li>• आत्मा का प्रत्यक्ष बोध।</li>
    <li>• जीव का रूपान्तरण।</li>
    <li>• आध्यात्मिक कायाकल्प।</li>
  </ul>
</div>


  </div>

  <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 rounded-3xl p-8 border border-amber-500/20">


<h4 className="text-2xl font-bold text-white mb-4">
  सतगुरु पंथ में क्या शिक्षा दी जाती है?
</h4>

<p className="text-slate-300 text-lg leading-relaxed">
  सतगुरु पंथ में जीव को सन्मुख करके आत्मा का प्रत्यक्ष एवं
  प्रैक्टिकल बोध कराया जाता है। इसके माध्यम से जीव का
  आध्यात्मिक कायाकल्प और रूपान्तरण होता है, जिससे वह
  अपने वास्तविक स्वरूप को पहचानकर आत्मिक उन्नति की ओर
  अग्रसर होता है।
</p>


  </div>

</div>


      </div>
    </section>
  );
};

export default EducationSection;