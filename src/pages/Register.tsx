import { Link } from "react-router";
import mafaliaLogo from "../assets/mafalia-logo.jpeg";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center">
              <img
                src={mafaliaLogo}
                alt="mafalia-logo"
                className="w-32 sm:w-40"
              />
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-600 mb-2">
                Créer un compte
              </h2>
              <p className="text-gray-600 text-sm">
                Rejoignez Mafalia pour digitaliser et optimiser votre commerce
                alimentaire
              </p>
            </div>

            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Informations personnelles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sexe *
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="homme"
                        className="mr-2 text-red-500"
                      />
                      <span className="text-gray-700">Homme</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="femme"
                        className="mr-2 text-red-500"
                      />
                      <span className="text-gray-700">Femme</span>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de naissance *
                  </label>
                  <input
                    type="date"
                    placeholder="jj/mm/aaaa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Informations de contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      placeholder="+221 77 XXX XX XX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pays *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200">
                      <option>Choisir un pays</option>
                      <option>Sénégal</option>
                      <option>Mali</option>
                      <option>Burkina Faso</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ville *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200">
                      <option>Choisir une ville</option>
                      <option>Dakar</option>
                      <option>Thiès</option>
                      <option>Saint-Louis</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Informations de l'entreprise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de l'entreprise *
                    </label>
                    <input
                      type="text"
                      placeholder="Nom de votre entreprise"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type d'établissement *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200">
                      <option>Sélectionner un type</option>
                      <option>Restaurant</option>
                      <option>Fast Food</option>
                      <option>Café</option>
                      <option>Boulangerie</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre d'emplacements *
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="establishments"
                        value="1"
                        className="mr-2 text-red-500"
                      />
                      <span className="text-gray-700">1</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="establishments"
                        value="2-5"
                        className="mr-2 text-red-500"
                      />
                      <span className="text-gray-700">2-5</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="establishments"
                        value="6-10"
                        className="mr-2 text-red-500"
                      />
                      <span className="text-gray-700">6-10</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="establishments"
                        value="11-25"
                        className="mr-2 text-red-500"
                      />
                      <span className="text-gray-700">11-25</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="establishments"
                        value="26-50"
                        className="mr-2 text-red-500"
                      />
                      <span className="text-gray-700">26-50</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="establishments"
                        value=">50"
                        className="mr-2 text-red-500"
                      />
                      <span className="text-gray-700">50</span>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comment avez-vous entendu parler de nous ? *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200">
                    <option>Sélectionner un canal</option>
                    <option>Réseaux sociaux</option>
                    <option>Bouche à oreille</option>
                    <option>Publicité</option>
                    <option>Partenaire</option>
                  </select>
                </div>
              </div>

              {/* Account Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Informations du compte
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom d'utilisateur *
                    </label>
                    <input
                      type="text"
                      placeholder="Choisissez un nom d'utilisateur"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mot de passe *
                    </label>
                    <input
                      type="password"
                      placeholder="Minimum 8 caractères"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmer le mot de passe *
                    </label>
                    <input
                      type="password"
                      placeholder="Confirmez votre mot de passe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Technique (PO) *
                    </label>
                    <input
                      type="text"
                      placeholder="Télécharger le document"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 text-red-500" />
                  <span className="text-sm text-gray-700">
                    Je souhaite recevoir des emails concernant le produit, les
                    mises à jour et les fonctionnalités, les évènements et le
                    marketing.
                  </span>
                </label>

                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 text-red-500" />
                  <span className="text-sm text-gray-700">
                    En créant un compte, vous acceptez les Conditions
                    d'utilisation et la Politique de confidentialité *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-linear-to-r from-red-800 to-red-600 text-white font-semibold py-2 rounded-xl transition-colors duration-200 transform hover:scale-[1.02]">
                S'inscrire
              </button>

              {/* Footer Link */}
              <div className="text-center text-sm text-gray-500 space-x-2">
                <span>Vous avez déjà un compte ?</span>
                <Link
                  to="/sign-in"
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  Connectez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Register;
