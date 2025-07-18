import { LoanIcon, MobileIcon, OmnichannelIcon, POSIcon } from "../icons";
import type { Feature } from "./HomeSection2";
import ServiceCard from "./ServiceCard";

export const features: Feature[] = [
  {
    title: "Diagnostic Marketing Personnalisé",
    description:
      "Analyse Complète de votre présence digitale et stratégie marketing actuelle pour identifier les opportunités de croissance.",
    icon: <POSIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Création de contenu",
    description:
      "Photos professionnelles, vidéos engageantes et textes optimisés pour vos réseaux sociaux et site web.",
    icon: <OmnichannelIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Camapgnes digitales locales",
    description:
      "Publicités géociblées sur les plateformes pertinentes pour attirer une clientèle locale et fidèle.",
    icon: <LoanIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Gestion de vos pages",
    description:
      "Administration professionnelle de vos profils Google Business, Instagram et Facebook pour maximiser votre visibilité.",
    icon: <MobileIcon className="w-10 h-10 text-red-600" />,
  },
];

export default function MarketingServices() {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="font-medium text-4xl py-5 text-amber-950">
          Nos Services Marketing
        </h1>
        <h3 className="text-gray-800 ">
          Des solutions adaptées pour faire rayonner votre établissement et
          attirer plus de clients.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5">
          {features.map((feature, index) => (
            <ServiceCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
