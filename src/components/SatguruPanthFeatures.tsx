
import {
  Sparkles,
  BookOpen,
  Heart,
  Star,
  Eye,
  Bird,
  Sun,
  Crown,
} from "lucide-react";

const features = [
  {
    icon: <BookOpen size={24} />,
    title: "सबका मूल और सार",
    desc: "सभी मत, पंथ, वेद, पुराण एवं अध्यात्म का मूल और सार।",
  },
  {
    icon: <Star size={24} />,
    title: "चौथा लोक",
    desc: "आत्मा की शिक्षा, चौथा पद एवं धर्म का चौथा आधार।",
  },
  {
    icon: <Heart size={24} />,
    title: "परम धर्म",
    desc: "जीव का आत्मा के सन्मुख होना ही परम धर्म है।",
  },
  {
    icon: <Sparkles size={24} />,
    title: "सबसे बड़ा पुण्य",
    desc: "आत्मा को जानना ही सबसे बड़ा पुण्य माना गया है।",
  },
  {
    icon: <Crown size={24} />,
    title: "सबका मालिक एक",
    desc: "परमात्मा, आत्मा, अनामी, सतगुरु — सभी एक ही सत्य।",
  },
  {
    icon: <Eye size={24} />,
    title: "दृष्टि का पंथ",
    desc: "केवल दृष्टि बदलकर जीव का उद्धार।",
  },
  {
    icon: <Bird size={24} />,
    title: "विहंगम चाल",
    desc: "जीव सीधे अनामी धाम की ओर अग्रसर होता है।",
  },
  {
    icon: <Sun size={24} />,
    title: "सहज मार्ग",
    desc: "ज्ञान, जप, तप से परे सहज एवं प्रयास रहित मार्ग।",
  },
];

const SatguruPanthFeatures = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400">
            <Sparkles size={18} />
            सतगुरु पंथ
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            सतगुरु पंथ की विशेषताएँ
          </h2>

          <div className="w-32 h-1 bg-amber-500 mx-auto rounded-full mt-6" />

          <p className="mt-8 text-slate-300 text-lg leading-relaxed">
            आत्मा के प्रत्यक्ष बोध, सहज मार्ग एवं पूर्ण रूपांतरण का आध्यात्मिक पंथ।
          </p>
        </div>

        {/* Intro Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-slate-800/30 backdrop-blur-lg border border-amber-500/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-amber-400 mb-6">
              सतगुरु पंथ के बारे में
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-2">स्थापना</h4>
                <p className="text-slate-300">वर्ष 2003</p>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-2">संस्थापक</h4>
                <p className="text-slate-300">
                  परम संत सद्गुरु वक्त
                  <br />
                  सुरेशादयाल जी महाराज
                </p>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-2">मुख्य केंद्र</h4>
                <p className="text-slate-300">
                  मोचकला, बिसवाँ
                  <br />
                  सीतापुर, उत्तर प्रदेश
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-md rounded-3xl border border-amber-500/10 hover:border-amber-500/40 p-6 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-amber-500/10 border border-amber-500/20 rounded-3xl p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              "आत्मा को ही जानना,
              <br />
              सबसे बड़ा है पुण्य"
            </h3>

            <p className="text-slate-300 text-lg">
              आत्मा का प्रत्यक्ष बोध ही सतगुरु पंथ का मूल संदेश है।
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SatguruPanthFeatures;