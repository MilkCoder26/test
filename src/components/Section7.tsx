const faqs = [
  {
    question: "Comment fonctionne l'essai gratuit de 14 jours ?",
    answer:
      "Notre essai gratuit de 14 jours vous donne un accès complet à toutes les fonctionnalités de la plateforme. Aucune carte de crédit requise. À la fin de l’essai, vous pouvez choisir de vous abonner à l’un de nos plans ou votre compte sera automatiquement converti en plan gratuit avec …",
  },
  {
    question: "Puis-je changer de plan plus tard ?",
    answer:
      "Oui, vous pouvez améliorer ou réduire votre plan à tout moment. Lorsque vous passez à un plan supérieur, les nouvelles fonctionnalités seront immédiatement disponibles. Si vous réduisez, les changements prendront effet au début de votre prochain cycle de facturation.",
  },
  {
    question: "Y a-t-il des frais d'installation ?",
    answer:
      "Non, il n’y a pas de frais d’installation pour aucun de nos plans. Vous ne payez que les frais d’abonnement mensuels ou annuels pour le plan que vous choisissez.",
  },
  {
    question: "Mafalia propose-t-il du financement ?",
    answer:
      "Grâce à notre scoring, vous accédez à une marketplace de prêteurs pour financer votre BFR.",
  },
  {
    question: "Quelle est la sécurité de mes données ?",
    answer:
      "Nous prenons la sécurité très au sérieux. Toutes les données sont cryptées à la fois en transit et au repos. Nous utilisons des pratiques de sécurité conformes aux normes de l’industrie et subissons régulièrement des audits de sécurité pour garantir la protection de vos données.",
  },
];

export default function Section7() {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-red-500 bg-red-100 rounded-full mb-4">
          Questions courantes
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Questions fréquemment posées
        </h2>
        <p className="text-gray-500 text-sm">
          Trouvez des réponses aux questions courantes concernant notre
          plateforme et nos services.
        </p>
      </div>

      <div className="mt-12 space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border-1 border-red-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-md font-semibold text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-sm text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
