import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-600 text-white text-sm pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-4">Entreprise</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link to="/press" className="hover:text-white transition-colors">
                Presse
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Bridge+
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                hangers Africa
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Légal</h4>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Conditions générales d'utilisation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
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
            {/* <a href="#" aria-label="GitHub">
              <FaGithub className="hover:text-white" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
