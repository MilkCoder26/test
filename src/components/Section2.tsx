import type { JSX } from "react";
import {
  POSIcon,
  AccountingIcon,
  AnalyticsIcon,
  CRMIcon,
  InventoryIcon,
  LoanIcon,
  MarketplaceIcon,
  MasspayIcon,
  MicrositeIcon,
  MobileIcon,
  OmnichannelIcon,
  WalletIcon,
} from "../icons";
import ServiceCard from "./ServiceCard";
export type Feature = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export const features: Feature[] = [
  {
    title: "POS",
    description: "Caisse numérique, paiements intégrés.",
    icon: <POSIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Omnicanal",
    description: "Vente unifiée (boutique, mobile, web).",
    icon: <OmnichannelIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Microsite",
    description: "Mini-site personnalisé par commerçant.",
    icon: <MicrositeIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Inventaire",
    description: "Gestion des stocks en temps réel.",
    icon: <InventoryIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Financement De Stocks",
    description: "Accéder aux services de prêts pour le financement du BFR",
    icon: <LoanIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "App Mobile - TPE",
    description: "Gestion simple depuis le smartphone.",
    icon: <MobileIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Analyse",
    description: "Tableaux de bord & indicateurs.",
    icon: <AnalyticsIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Marketplace",
    description: "Connexion directe aux producteurs et fournisseurs.",
    icon: <MarketplaceIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Pré-Comptabilité",
    description: "Données prêtes pour l'expert-comptable.",
    icon: <AccountingIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "CRM",
    description: "Gestion des clients, ventes et campagnes marketing.",
    icon: <CRMIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Wallet",
    description: "Envoi, réception de fonds et paiement de factures.",
    icon: <WalletIcon className="w-10 h-10 text-red-600" />,
  },
  {
    title: "Masspay",
    description: "Gestion des paiements groupés à plusieurs bénéficiaires.",
    icon: <MasspayIcon className="w-10 h-10 text-red-600" />,
  },
];

const Section2 = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Avec <span className="text-red-500">Mafalia</span>, passez à la
          vitesse supérieure
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          plus de fonctionnalités, plus de puissance pour votre commerce. La
          solution tout-en-un pour maîtriser et faire grandir votre entreprise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ServiceCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
