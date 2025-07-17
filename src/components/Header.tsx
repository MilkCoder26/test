import { Link } from "react-router";
import mafaliaLogo from "../assets/mafalia-logo.jpeg";

export default function Header() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center justify-center">
          <img src={mafaliaLogo} alt="mafalia-logo" className="w-32 sm:w-40" />
        </Link>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition-colors">
            Démarrer maintenant
          </button>
          <Link
            to="/sign-in"
            className="px-4 py-2 border border-red-500 text-red-500 rounded-full text-sm font-medium hover:bg-red-50 transition-colors"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </header>
  );
}
