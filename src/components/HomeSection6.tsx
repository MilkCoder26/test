import homeIllustration from "../assets/home-illustration.jpg";

export default function Section6() {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
            Marketing V&S
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Boostez la croissance de votre restaurant avec les{" "}
            <span className="text-red-600">
              <span className="text-red-600 relative inline-block">
                services marketing
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-red-500 rounded-full"></span>
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {" "}
                de
              </span>{" "}
              Mafalia.
            </span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Stratégie digitale, création de contenu, visibilité locale : tout
            pour multiplier votre chiffre d’affaires.
          </p>

          <button
            className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            aria-label="Demander une démo"
          >
            <span>Voir plus</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          </button>
        </div>

        {/* Right Image + Floating Cards */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="bg-blue-50 p-4 rounded-3xl shadow-md w-full max-w-md relative">
            <img
              src={homeIllustration}
              alt="Marketing dashboard"
              className="rounded-2xl w-full object-contain"
            />

            {/* Floating Cards */}
            <div className="absolute top-4 right-4 bg-white shadow-md px-4 py-2 rounded-xl text-xs text-gray-700 font-medium animate-floatDown">
              <span className="text-red-500 font-bold">95%</span> Taux de
              satisfaction
              <br />
              <span className="text-[10px] text-gray-400">de nos clients</span>
            </div>

            <div className="absolute -bottom-5 left-4 bg-white shadow-md px-4 py-2 rounded-xl text-xs text-gray-700 font-medium animate-floatUp">
              <span className="text-red-500 font-bold">95%</span> Taux de
              satisfaction
              <br />
              <span className="text-[10px] text-gray-400">de nos clients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
