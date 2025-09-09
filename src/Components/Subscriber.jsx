import avatarMichael from "../assets/micheal-chen.jpg";
import avatarSarah from "../assets/sarah-johnson.jpg";
import avatarDavid from "../assets/david-rodriguez.jpg";
import Headings from './Headings'
const testimonials = [
  {
    quote:
      "FinanceDaily has become an essential part of my morning routine. The insights are spot-on and help me make better investment decisions.",
    author: {
      name: "Michael Chen",
      title: "Portfolio Manager",
      imageUrl: avatarMichael,
    },
  },
  {
    quote:
      "The market analysis is comprehensive yet easy to understand. I recommend it to all my clients who want to stay informed.",
    author: {
      name: "Sarah Johnson",
      title: "Financial Advisor",
      imageUrl: avatarSarah,
    },
  },
  {
    quote:
      "Perfect timing and relevant content. The morning brief gives me exactly what I need before markets open.",
    author: {
      name: "David Rodriguez",
      title: "Day Trader",
      imageUrl: avatarDavid,
    },
  },
];

function Subscriber() {
  return (
    <section className="bg-slate-100 py-20 px-4 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Subscribers Say
          </h2>
        </div> */}
        <Headings Heading={'What Our Subscribers Say'}/>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author.name} className='border px-4 py-5 rounded-xl bg-white border border-[#e5e7eb] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] flex flex-col gap-4'>
                <figcaption className="mt-6 flex items-center gap-x-4 ">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.author.imageUrl}
                    alt={`Photo of ${testimonial.author.name}`}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-gray-600">
                      {testimonial.author.title}
                    </div>
                  </div>
                </figcaption>
                <blockquote className="text-lg leading-7 text-gray-700">
                  <p>{`“${testimonial.quote}”`}</p>
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
}

export default Subscriber;
