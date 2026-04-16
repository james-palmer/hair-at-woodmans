import { ScissorsIcon } from './Icons';

const services = [
  {
    title: 'Cut & Blow Dry',
    description:
      'A classic cut tailored to your face shape and style, finished with a professional blow dry for a polished, lasting look.',
  },
  {
    title: 'Colour & Tinting',
    description:
      'Whether you want to cover grey, refresh your natural shade, or try something new, our colour treatments are gentle and beautifully applied.',
  },
  {
    title: 'Highlights & Lowlights',
    description:
      'Add dimension and depth to your hair with expertly placed highlights or lowlights that complement your natural tone.',
  },
  {
    title: 'Perms & Sets',
    description:
      'From soft body waves to classic sets, we offer a full range of perming and setting services for beautiful, long-lasting results.',
  },
  {
    title: 'Styling & Occasions',
    description:
      'Looking your best for a special day? We offer up-dos, blow-dries, and occasion styling for weddings, parties, and more.',
  },
  {
    title: 'Treatments & Finishing',
    description:
      'Nourish and restore your hair with conditioning treatments, plus expert finishing touches that leave your hair looking its absolute best.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase font-lato text-rose-700 mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-900 mb-4">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-rose-300" />
            <ScissorsIcon size={18} className="text-rose-700" />
            <div className="h-px w-16 bg-rose-300" />
          </div>
          <p className="mt-6 font-lato font-light text-warm-700 max-w-xl mx-auto">
            We offer a wide range of hair services to suit every need and occasion. To find out more or to make a booking, simply give us a call.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-cream-100 border border-rose-200 p-6 hover:border-rose-700 hover:shadow-sm transition-all duration-200 group"
            >
              <div className="w-8 h-0.5 bg-rose-800 mb-4 group-hover:w-12 transition-all duration-300" />
              <h3 className="font-serif text-xl text-warm-900 mb-3">{service.title}</h3>
              <p className="font-lato text-sm text-warm-700 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-lato text-warm-700 mb-5">
            To enquire about any of our services or to book an appointment:
          </p>
          <a
            href="tel:+447771606009"
            className="inline-flex items-center gap-2 bg-rose-800 text-white px-8 py-3.5 text-sm tracking-wide uppercase font-lato font-semibold hover:bg-rose-900 transition-all duration-200 active:scale-95"
          >
            <ScissorsIcon size={16} />
            Call Us: 07771 606009
          </a>
        </div>
      </div>
    </section>
  );
}
