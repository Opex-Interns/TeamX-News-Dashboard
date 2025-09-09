import {
  ChartBarIcon,
  DocumentTextIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Headings from './Headings'

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
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-Roboto">
      <div className="mx-auto max-w-7xl">
        {/* <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            
          </p>
        </div> */}
        <Headings Heading={'Why Choose FinanceDaily?'} subHeading={'Everything you need to make informed investment decisions'}/>
        {/*Features Grid*/}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-slate-100 p-8 text-center shadow-lg rounded-xl gap-2 flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${feature.iconBgColor}`}
                >
                  <feature.icon
                    className={`h-10 w-10 ${feature.iconTextColor}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Card Text */}
                <h3 className="mt-6 text-lg font-semibold text-black text-center">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-[#4b5563] ">
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
