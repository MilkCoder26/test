import homeIllustration from "../assets/home-illustration.jpg";

export default function Section5() {
  const benefits = [
    "50% d'économies sur les prix d'achat",
    "70% de réduction des émissions de CO2",
    "80% de diminution des files d'attente",
    "0 papier, 100% digital",
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-blue-50 p-4 rounded-3xl shadow-md w-full max-w-md">
            <img
              src={homeIllustration}
              alt="Dashboard analytics"
              className="rounded-2xl w-full object-contain"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
            Proposition de valeur
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            La solution IA tout-en-un pour digitaliser votre commerce{" "}
            <span className="text-red-500 relative inline-block">
              alimentaire
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-red-500 rounded-full"></span>
            </span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Notre plateforme intelligente, alimentée par la data et l'IA,
            anticipe la demande, optimise les stocks et automatise les
            commandes, réduisant ainsi le gaspillage et maximisant la
            rentabilité.
          </p>

          <ul className="space-y-3 pt-2">
            {benefits.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-800"
              >
                <span className="w-5 h-5 mt-0.5 shrink-0 text-green-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
