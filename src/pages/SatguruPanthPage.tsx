import IntroSection from "../components/satguru/IntroSection";
import EducationSection from "../components/satguru/EducationSection";
import FeaturesSection from "../components/satguru/FeaturesSection";
import SadhanaSection from "../components/satguru/SadhanaSection";
import NamdaanSection from "../components/satguru/NamdaanSection";
import QuotesSection from "../components/satguru/QuotesSection";
import FAQAccordion from "../components/satguru/FAQAccordion";
import ContactSection from "../components/satguru/ContactSection";
import ExamplesSection from "../components/satguru/ExamplesSection";
import TransformationSection from "../components/satguru/TransformationSection";
const SatguruPanthPage = () => {
  return (
    <main className="bg-slate-950 text-white">
     <IntroSection />
<EducationSection />
<TransformationSection />
<FeaturesSection />
<SadhanaSection />
<NamdaanSection />
<ExamplesSection />
<QuotesSection />
<FAQAccordion />
<ContactSection />
    </main>
  );
};

export default SatguruPanthPage;