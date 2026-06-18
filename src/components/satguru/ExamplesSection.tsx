const ExamplesSection = () => {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          उदाहरण
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-800 rounded-3xl p-8">
            <h3 className="text-amber-400 text-2xl font-bold mb-4">
              दूध और पानी
            </h3>

            <p className="text-slate-300">
              पानी दूध में मिलकर दूध बन जाता है।
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8">
            <h3 className="text-amber-400 text-2xl font-bold mb-4">
              गंगा और यमुना
            </h3>

            <p className="text-slate-300">
              यमुना गंगा में समर्पित होकर गंगा बन जाती है।
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ExamplesSection;