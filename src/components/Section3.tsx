import deliverIllustration from "../assets/deliverIllustration.png";
import farmerIllustration from "../assets/farmerIllustration.png";

export default function Section3() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Commencez à traiter vos <br />
            commandes en <span className="text-red-500">15 min</span> seulement
          </h2>
          <p className="mt-6 text-gray-600 text-base max-w-md">
            Notre solution simple et rapide à mettre en place vous permet de
            digitaliser votre commerce en un temps record.
          </p>
          <button
            className="px-6 py-3 mt-6 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-6 items-start relative">
          {/* Delivery Man Image */}
          <div className="relative h-[460px] overflow-visible">
            {/* Image */}
            <img
              src={deliverIllustration}
              alt="Livreur"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Floating Satisfaction Badge */}
            <div className="absolute top-4 -left-20 bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 z-10">
              <span className="text-red-500 font-bold text-lg bg-red-50 rounded-4xl p-2">
                95%
              </span>
              <div className="text-xs text-gray-600 leading-tight">
                <p className="font-semibold">Taux de satisfaction</p>
                <p>de nos clients</p>
              </div>
            </div>
          </div>

          {/* Right stack: Stats + Farmer */}
          <div className="flex flex-col gap-6 h-[460px]">
            {/* Stats */}
            <div className="flex gap-4">
              <div className="flex-1 bg-black text-white rounded-xl px-5 py-4 text-center shadow">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Années d’expérience</p>
              </div>
              <div className="flex-1 bg-linear-to-r from-red-800 to-red-600 text-white rounded-xl px-5 py-4 text-center shadow">
                <p className="text-2xl font-bold">1.2K</p>
                <p className="text-sm">Clients heureux</p>
              </div>
            </div>

            {/* Farmer Image */}
            <div className="relative h-[460px] overflow-visible">
              <img
                src={farmerIllustration}
                alt="Agriculteur"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 -right-20 bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="text-red-500 font-bold text-lg bg-red-50 rounded-4xl p-2">
                  95%
                </span>
                <div className="text-xs text-gray-600 leading-tight">
                  <p className="font-semibold">Taux de satisfaction</p>
                  <p>de nos clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
