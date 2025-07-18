import { Calendar, User, ExternalLink, Mail, Phone } from "lucide-react";
import Header from "../components/Header";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import Footer from "../components/Footer";

type PressArticle = {
  id: number;
  title: string;
  date: string;
  author: string;
  link: string;
  excerpt: string;
  image?: string;
};

const Press = () => {
  const pressArticles: PressArticle[] = [
    {
      id: 1,
      title:
        "Sénégal : Les start-ups à l’honneur lors du HEC Challenge+ Afrique",
      date: "02/07/2025",
      author: "La Nouvelle Tribune",
      link: "https://lanouvelletribune.info/2025/07/senegal-les-start-ups-a-lhonneur-lors-du-hec-challenge-afrique/",
      excerpt:
        "Dakar a accueilli, mardi dernier, la deuxième édition du “demo day” du programme HEC Challenge+ Afrique...",
    },
    {
      id: 2,
      title:
        "Mafalia : révolutionner la chaîne d’approvisionnement de la restauration en Afrique francophone",
      date: "10 juin 2025",
      link: "https://h-7.eu/mafalia-revolutionner-la-chaine-dapprovisionnement-de-la-restauration-en-afrique-francophone/",
      author: "Média H7",
      excerpt:
        "Et si la tech permettait à des milliers de restaurants africains d’accéder à une gestion durable...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <Header />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Centre de <span className="text-red-600">Presse</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les dernières actualités, communiqués de presse et
            ressources médias de Mafalia
          </p>
        </section>

        {/* Contact Presse */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Presse
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-gray-700">presse@mafalia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-gray-700">+33 1 23 45 67 89</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Marie Dubois</h3>
              <p className="text-gray-600">Responsable Communication</p>
              <p className="text-sm text-gray-500 mt-2">
                Disponible du lundi au vendredi, 9h-18h
              </p>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Articles de Presse */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Actualités Presse
            </h2>
            <div className="space-y-6">
              {pressArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700`}
                    >
                      Actualités
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 cursor-pointer transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <a
                      href={article.link}
                      className="flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                    >
                      Lire plus
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Chiffres Clés */}
            <div className="bg-gradient-to-br from-red-700 to-red-500 rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-6">Chiffres Clés</h2>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">2M€</div>
                  <div className="text-red-100 text-sm">Levée de fonds</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-red-100 text-sm">
                    Utilisateurs actifs
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">25</div>
                  <div className="text-red-100 text-sm">Collaborateurs</div>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Suivez-nous
              </h2>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-800 transition-colors"
                >
                  <span>
                    <FaLinkedinIn className="text-blue-700" />
                  </span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-800 transition-colors"
                >
                  <span>
                    <FaTwitter className="text-blue-900" />
                  </span>
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-800 transition-colors"
                >
                  <span>
                    <FaYoutube className="text-red-600" />
                  </span>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
