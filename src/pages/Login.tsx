import { Link } from "react-router";
import mafaliaLogo from "../assets/mafalia-logo.jpeg";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="px-4 py-4">
        <Link
          to="/"
          className="group cursor-pointer flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
        >
          <svg
            className="w-6 h-6 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src={mafaliaLogo}
              alt="mafalia-logo"
              className="w-32 sm:w-40"
            />
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-600 mb-2">
                Connectez-vous maintenant
              </h2>
              <p className="text-gray-600 text-sm">
                Utilisez votre identifiant de travail pour vous connecter
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail ou numéro de téléphone *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Minimum 8 caractères"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 pr-12"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-left">
                <a
                  href="#"
                  className="text-red-500 hover:text-red-600 text-sm font-medium"
                >
                  Mot de passe oublié
                </a>
              </div>

              {/* Login Button */}
              <button className="w-full bg-linear-to-r from-red-800 to-red-600 text-white font-semibold py-2 rounded-xl transition-colors duration-200 transform hover:scale-[1.02]">
                Se connecter
              </button>

              {/* Footer Links */}
              <div className="text-center text-sm text-gray-500 space-x-2">
                <span>Vous n'avez pas de compte ?</span>
                <Link
                  to="/sign-up"
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  Inscrivez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
