// export default function NamdaanSection() {
//   return (
//     <section className="py-20">

//       <div className="container mx-auto px-6">

//         <h2 className="text-4xl font-bold text-center mb-10">
//           नामदान की विशेषताएँ
//         </h2>

//         <div className="max-w-5xl mx-auto bg-slate-800/40 p-10 rounded-3xl">

//           <ul className="space-y-4 text-slate-300">
//             <li>जीव का दूसरा जन्म होता है।</li>
//             <li>जीव आत्मघट से प्रकट होता है।</li>
//             <li>जीव पूर्ण होकर अनामी हो जाता है।</li>
//             <li>मन पूर्ण हो जाता है।</li>
//             <li>विवेक दृष्टि प्राप्त होती है।</li>
//             <li>निष्काम कर्म स्वतः होने लगते हैं।</li>
//             <li>पूर्ण समर्पण हो जाता है।</li>
//           </ul>

//         </div>

//       </div>
//     </section>
//   );
// }


const NamdaanSection = () => {
  return (
    <section id="namdaan" className="py-24 bg-slate-900">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          नामदान की विशेषताएँ
        </h2>

        <div className="max-w-7xl mx-auto">

{/* Heading */}

  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      नामदान की विशेषताएँ
    </h2>

 
<div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>

<p className="text-slate-400 text-lg">
  आत्मा के प्रत्यक्ष बोध एवं पूर्ण रूपान्तरण का दिव्य मार्ग
</p>
 

  </div>

{/* Main Features */}

  <div className="mb-16">

 
<h3 className="text-3xl font-bold text-amber-400 mb-8 text-center">
  नामदान की प्रमुख विशेषताएँ
</h3>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  {[
    "जीव का दूसरा जन्म",
    "आत्मघट से प्रकट होना",
    "सहज दृष्टि",
    "विहंगम चाल",
    "पूर्णता",
    "अनामी अवस्था",
    "परमसंत अवस्था",
  ].map((item) => (
    <div
      key={item}
      className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition"
    >
      <p className="text-white font-medium text-center">
        {item}
      </p>
    </div>
  ))}

</div>
 

  </div>

{/* Transformations */}

  <div>

 
<h3 className="text-3xl font-bold text-amber-400 mb-8 text-center">
  नामदान के बाद होने वाले परिवर्तन
</h3>

<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">

  {[
    "अपरोक्ष",
    "अनन्य",
    "ध्यानातीत",
    "कल्कि अवतरण",
    "थिर अवस्था",
    "सुमिरन",
    "ध्यान",
    "भजन",
    "विचारातीत",
    "भावातीत",
    "निष्काम कर्म",
    "सुमति",
    "परमगति",
    "हंसगति",
    "विवेक दृष्टि",
  ].map((item) => (
    <div
      key={item}
      className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-4 border border-green-500/20 text-center"
    >
      <span className="text-slate-200 font-medium">
        {item}
      </span>
    </div>
  ))}

</div>
 

  </div>

</div>


      </div>

    </section>
  );
};

export default NamdaanSection;