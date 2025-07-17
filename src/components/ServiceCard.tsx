import type { Feature } from "./HomeSection2";

type ServicecardProps = {
  feature: Feature;
};

export default function Servicecard({ feature }: ServicecardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md p-6 flex flex-col items-center text-center transition duration-200">
      <div className="bg-red-50 p-3 rounded-full mb-4">{feature.icon}</div>
      <h3 className="text-md font-semibold text-gray-900 mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </div>
  );
}
