import Footer from "../components/Footer";
import Header from "../components/Header";
import Section1 from "../components/HomeSection1";
import Section2 from "../components/HomeSection2";
import Section3 from "../components/HomeSection3";
import Section4 from "../components/HomeSection4";
import Section5 from "../components/HomeSection5";
import Section6 from "../components/HomeSection6";
import Section7 from "../components/HomeSection7";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Shared container */}
      <div className="max-w-6xl mx-auto px-6">
        <Header />

        {/* Main Content */}
        <main className="py-16 flex flex-col items-center gap-20 overflow-hidden">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </main>
      </div>
      <Footer />
    </div>
  );
}
