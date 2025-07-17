import bakeliLogo from "../assets/bakeli-logo.jpg";
import sonacosLogo from "../assets/sonacos-logo.jpg";
import legacyLogo from "../assets/legacy-logo.jpg";
import edenly from "../assets/edenly-logo.jpg";
import kerbyLogo from "../assets/kerby-logo.jpg";
import alrahmaLogo from "../assets/alrahma-logo.jpg";
import lafLogo from "../assets/lafricamobile-logo.jpg";

export default function Partners() {
  const companies = [
    { name: "Bakeli", logo: bakeliLogo },
    { name: "Sonacos", logo: sonacosLogo },
    { name: "Legacy Farms", logo: legacyLogo },
    { name: "Edenly", logo: edenly },
    { name: "Kerby", logo: kerbyLogo },
    { name: "Alrahma", logo: alrahmaLogo },
    { name: "Lafricamobile", logo: lafLogo },
  ];
  return (
    <div>
      <div className="text-center mb-16 flex flex-col gap-5 items-center justify-center">
        <h1 className="font-medium text-4xl py-5 text-amber-950">
          <p>Nos Partenaires</p>
        </h1>
        <h3 className="text-gray-800 ">
          Nous collaborons avec ces entreprises de confiance pour vous offrir le
          meilleur service possible..
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-2 p-5 w-30 h-40 shadow-xl rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
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
      </div>
    </div>
  );
}
