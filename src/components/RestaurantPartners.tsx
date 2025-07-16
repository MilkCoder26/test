import caesarLogo from "../assets/caesar-logo.png";
import alafifaLogo from "../assets/al-afifa-logo.jpg";
import exoticbeachLogo from "../assets/exotic-beach-logo.png";
import laplanchaLogo from "../assets/la-plancha-logo.png";
import leoLogo from "../assets/leo-logo.jpg";
import lecarreLogo from "../assets/le-carre-logo.jpg";

export default function RestaurantPartners() {
  const companies = [
    { name: "LEO", logo: leoLogo },
    { name: "CAESAR'S", logo: caesarLogo },
    { name: "La Plancha", logo: laplanchaLogo },
    { name: "Le Carré", logo: lecarreLogo },
    { name: "Exotic Beach", logo: exoticbeachLogo },
    { name: "Al Afifa", logo: alafifaLogo },
    { name: "CAESAR'S", logo: caesarLogo },
  ];
  return (
    <div>
      <div className="text-center mb-16 flex flex-col gap-5 items-center justify-center">
        <h1 className="font-medium text-4xl py-5 text-amber-950">
          <p>Découvrez les restaurants qui font partie</p>
          <p>de notre nouvelle cohorte</p>
        </h1>
        <h3 className="text-gray-800 ">
          Rejoignez ces établissements qui ont choisi notre Programme
          d'Accompagnement Mafalia pour accélérer leur croissance.
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-2 p-5 w-30 h-35 shadow-xl rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity w-20 h-20 flex items-center justify-center">
                <img src={company.logo} alt={company.logo} />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
        <button
          className="px-6 py-3 mt-5 border-1 border-red-700 text-red-700 rounded-full font-medium flex items-center justify-center space-x-2"
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
        </button>
      </div>
    </div>
  );
}
