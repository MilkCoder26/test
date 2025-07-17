import { Handshake, HandCoins, Eye, Utensils, Smartphone } from "lucide-react";

const BenefitsProgram = () => {
  const benefits = [
    {
      icon: <Handshake color="red" />,
      title: "Réseau de fournisseurs partenaires",
      description:
        "Accédez à notre réseau exclusif de fournisseurs de qualité avec des conditions préférentielles.",
    },
    {
      icon: <HandCoins color="red" />,
      title: "Financement BPR",
      description:
        "Opportunités de financement en série Bassin en Fonds de Roulement pour soutenir votre croissance.",
    },
    {
      icon: <Eye color="red" />,
      title: "Visibilité renforcée",
      description:
        "Promotion de votre établissement via Mafalia et ses partenaires médias pour une exposition maximale.",
    },
    {
      icon: <Utensils color="red" />,
      title: "Foire Gourmande Mafalia",
      description:
        "Présence garantie à notre événement annuel attirant plus de 3 000 visiteurs avec un stand dédié.",
    },
    {
      icon: <Smartphone color="red" />,
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
              <div className="flex-shrink-0 mr-4 bg-red-50 rounded-4xl p-2">
                {benefit.icon}
              </div>
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
