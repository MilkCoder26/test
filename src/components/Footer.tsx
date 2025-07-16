import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import mafaliaLogo from "../assets/mafalia-logo-dark.jpeg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-600 text-white text-sm pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="mb-4">
            <img src={mafaliaLogo} alt="Mafalia logo" className="h-6" />
          </div>
          <p className="leading-relaxed text-white/80">
            La solution IA tout-en-un pour digitaliser votre commerce
            alimentaire : POS – Paiement mobile – Gestion de stock – Financement
            – Microsite web – Business Analyse.
          </p>
        </div>

        {/* Produit */}
        <div>
          <h4 className="font-semibold mb-2">Produit</h4>
          <ul className="space-y-1 text-white/80">
            <li>
              <a href="#">Fonctionnalités</a>
            </li>
            <li>
              <a href="#">Tarification</a>
            </li>
            <li>
              <a href="#">Témoignages</a>
            </li>
            <li>
              <a href="#">Nos équipements</a>
            </li>
            <li>
              <a href="#">Marketing VAS</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Entreprise */}
        <div>
          <h4 className="font-semibold mb-2">Entreprise</h4>
          <ul className="space-y-1 text-white/80">
            <li>
              <a href="#">À propos</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Carrières</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Légal */}
        <div>
          <h4 className="font-semibold mb-2">Légal</h4>
          <ul className="space-y-1 text-white/80">
            <li>
              <a href="#">Conditions d'utilisation</a>
            </li>
            <li>
              <a href="#">Politique de confidentialité</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-8 pt-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white/70 text-xs">
          <p>© 2025 Mafalia SAS. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-white" />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
