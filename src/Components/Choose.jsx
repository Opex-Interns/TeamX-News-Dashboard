import {
  ChartBarIcon,
  DocumentTextIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Headings from "./Headings";

const features = [
  {
    name: "Daily Market Updates",
    description:
      "Get comprehensive market summaries and breaking news delivered every morning.",
    icon: DocumentTextIcon,
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-600",
  },
  {
    name: "Expert Analysis",
    description:
      "Professional insights and analysis from seasoned financial experts.",
    icon: ChartBarIcon,
    iconBgColor: "bg-orange-100",
    iconTextColor: "text-orange-600",
  },
  {
    name: "Investment Ideas",
    description:
      "Curated investment opportunities and portfolio recommendations.",
    icon: LightBulbIcon,
    iconBgColor: "bg-green-100",
    iconTextColor: "text-green-600",
  },
];

function Choose() {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-Roboto">
      <div className="mx-auto max-w-7xl">
        <Headings
          Heading={"Why Choose FinanceDaily?"}
          subHeading={
            "Everything you need to make informed investment decisions"
          }
        />

        {/* Features Grid */}
        <div className="mt-10 sm:mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-slate-100 p-6 sm:p-8 text-center shadow-md rounded-xl flex flex-col items-center hover:shadow-lg transition"
              >
                {/* Icon */}
                <div
                  className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full ${feature.iconBgColor}`}
                >
                  <feature.icon
                    className={`h-10 w-10 sm:h-12 sm:w-12 ${feature.iconTextColor}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Card Text */}
                <h3 className="mt-6 text-base sm:text-lg font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Choose;
