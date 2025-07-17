const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))}
  </div>
);

const TestimonialCard = ({
  name,
  business,
  businessType,
  rating = 5,
  testimonial,
  logo,
}: {
  name: string;
  business: string;
  businessType: string;
  rating?: number;
  testimonial: string;
  logo: string;
}) => (
  <div className="flex-shrink-0 w-72 bg-white rounded-2xl border border-gray-100 p-6 mx-2">
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex-shrink-0 flex justify-center items-center">
        <img
          src={logo}
          alt="ndeye-image"
          className="w-15 h-15 rounded-full shadow-lg object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">
          {business} - {businessType}
        </p>
      </div>
    </div>

    <div className="mb-4">
      <StarRating rating={rating} />
    </div>

    <p className="text-gray-600 text-sm leading-relaxed">"{testimonial}"</p>
  </div>
);

export default TestimonialCard;
