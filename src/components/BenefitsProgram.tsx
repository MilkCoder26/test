const BenefitsProgram = () => {
  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Réseau de fournisseurs partenaires",
      description:
        "Accédez à notre réseau exclusif de fournisseurs de qualité avec des conditions préférentielles.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      title: "Financement BPR",
      description:
        "Opportunités de financement en série Bassin en Fonds de Roulement pour soutenir votre croissance.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Visibilité renforcée",
      description:
        "Promotion de votre établissement via Mafalia et ses partenaires médias pour une exposition maximale.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 2v7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V2l-9-2L3 2z" />
          <path d="M12 8v8l5-4-5-4z" />
        </svg>
      ),
      title: "Foire Gourmande Mafalia",
      description:
        "Présence garantie à notre événement annuel attirant plus de 3 000 visiteurs avec un stand dédié.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Solution digitale gratuite",
      description:
        "Testez notre solution digitale complète pendant 1 mois sans aucun engagement.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium text-amber-950 mb-4">
          Avantages Exclusifs du Programme
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Bénéficiez de ces privilèges réservés aux membres de notre programme
          d'accompagnement.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 mr-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                {benefit.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsProgram;
