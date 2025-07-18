import homeIllustration from "../assets/home-illustration.jpg";
import oroyalLogo from "../assets/oroyal-logo.jpg";
import sonacosLogo from "../assets/sonacos-logo.jpg";
import nestleLogo from "../assets/nestle-logo.jpg";
import bictorysLogo from "../assets/bictorys-logo.jpg";
import ILogo from "../assets/1.jpg";
import kerbyLogo from "../assets/kerby-logo.jpg";
import saprolaitLogo from "../assets/saprolait-logo.jpg";
import { Link } from "react-router";

export default function Section1() {
  const companies = [
    { name: "ORoyal", logo: oroyalLogo },
    { name: "Sonacos", logo: sonacosLogo },
    { name: "Nestle", logo: nestleLogo },
    { name: "Bictorys", logo: bictorysLogo },
    { name: "inconnu", logo: ILogo },
    { name: "Kerby", logo: kerbyLogo },
    { name: "Saprolait", logo: saprolaitLogo },
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
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right-icon lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
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
          RECONNU PAR LES ENTREPRISES LES PLUS INFLUENTES DU SENEGAL.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center text-center p-5 w-36 h-40 bg-white shadow-xl rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-contain"
                />
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
