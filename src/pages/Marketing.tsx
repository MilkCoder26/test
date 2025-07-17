import Footer from "../components/Footer";
import Header from "../components/Header";
import MarketingServices from "../components/MarketingServices";
import RestaurantPartners from "../components/RestaurantPartners";
import Section6 from "../components/HomeSection6";
import BenefitsProgram from "../components/BenefitsProgram";
import Partners from "../components/Partners";
import MafaliaContactForm from "../components/MafaliaContact";

function Marketing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Shared container */}
      <div className="max-w-6xl mx-auto px-6">
        <Header />

        {/* Main Content */}
        <main className="py-16 flex flex-col items-center gap-20">
          <Section6 />
          <MarketingServices />
          <RestaurantPartners />
          <BenefitsProgram />
          <Partners />
          <MafaliaContactForm />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Marketing;
