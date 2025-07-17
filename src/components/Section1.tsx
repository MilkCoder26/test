import homeIllustration from "../assets/home-illustration.jpg";
import casamancaiseLogo from "../assets/casamancaise-logo.png";
import senicoLogo from "../assets/senico-logo.png";
import soboaLogo from "../assets/soboa-logo.png";
import gmdLogo from "../assets/gmd-logo.png";
import gdsLogo from "../assets/gds-logo.png";
import timacareLogo from "../assets/tima-care-logo.png";
import unileverLogo from "../assets/unilever-logo.png";
import { Link } from "react-router";

export default function Section1() {
  const companies = [
    { name: "ORoyal", logo: casamancaiseLogo },
    { name: "Senico", logo: senicoLogo },
    { name: "SOBOA", logo: soboaLogo },
    { name: "GMD", logo: gmdLogo },
    { name: "GDS", logo: gdsLogo },
    { name: "Tima Care", logo: timacareLogo },
    { name: "Unilever", logo: unileverLogo },
  ];
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-x-12">
        <div className="lg:w-1/2">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              La solution IA tout-en-un pour les restaurants et commerces{" "}
              <span className="text-red-500 relative inline-block">
                alimentaires.
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 rounded"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-800 leading-relaxed">
              Optimisez vos ventes, gérez votre trésorerie, réduisez vos coûts,
              boostez votre croissance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/marketing"
              className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              aria-label="Demander une démo"
            >
              <span>Demander une démo</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <button className="px-4 py-2 border border-red-500 text-red-500 rounded-full text-sm font-medium hover:bg-red-50 transition-colors">
              Contacter nous
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src={homeIllustration}
            alt="Illustration d’accueil"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>

      <div className="mt-24 text-center">
        <p className="text-gray-800 font-medium mb-12 tracking-wide">
          RECONNUS PAR 200+ ENTREPRISES, NOUS DIGITALISONS LES RESTAURANTS.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-2 p-5 w-30 h-35 shadow-xl rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">
                <img src={company.logo} alt={company.logo} />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
