import MarqueeRow from "./MarqueeRow";
import TestimonialCard from "./TestimonialCard";

const Section4 = () => {
  const testimonials = [
    {
      name: "LEO",
      business: "LEO",
      businessType: "Restaurant-Coffee Shop",
      rating: 5,
      testimonial:
        "They has greatly saved my life and is still doing so! So I am highly appreciative of all Otter's services.",
      logoColor: "bg-teal-600",
    },
    {
      name: "La Plancha",
      business: "La Plancha",
      businessType: "Buffet Restaurant",
      rating: 5,
      testimonial:
        "They has greatly saved my life and is still doing so! So I am highly appreciative of all Otter's services.",
      logoColor: "bg-yellow-500",
    },
    {
      name: "Exotik Beach",
      business: "Exotik Beach",
      businessType: "Eat-Chill-Grill",
      rating: 5,
      testimonial:
        "They has greatly saved my life and is still doing so! So I am highly appreciative of all Otter's services.",
      logoColor: "bg-amber-700",
    },
    {
      name: "Al Afifa",
      business: "Al Afifa",
      businessType: "Restaurant",
      rating: 5,
      testimonial:
        "They has greatly saved my life and is still doing so! So I am highly appreciative of all Otter's services.",
      logoColor: "bg-blue-900",
    },
    {
      name: "Caesar's Lounge",
      business: "Caesar's Lounge",
      businessType: "Eat-Drink-Enjoy",
      rating: 5,
      testimonial:
        "They has greatly saved my life and is still doing so! So I am highly appreciative of all Otter's services.",
      logoColor: "bg-red-600",
    },
    {
      name: "Le Carre",
      business: "Le Carre",
      businessType: "Restaurant",
      rating: 5,
      testimonial:
        "They has greatly saved my life and is still doing so! So I am highly appreciative of all Otter's services.",
      logoColor: "bg-orange-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Découvrez ce que nos clients disent de{" "}
          <span className="text-red-500">Mafalia</span>
        </h2>

        <div className="space-y-8">
          <MarqueeRow direction="right">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} {...t} />
            ))}
          </MarqueeRow>

          <MarqueeRow direction="left">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} {...t} />
            ))}
          </MarqueeRow>
        </div>
      </div>
    </section>
  );
};

export default Section4;
