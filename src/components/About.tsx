import { ScissorsIcon } from './Icons';

const INTERIOR_1 = 'https://raw.githubusercontent.com/james-palmer/new-image/master/WhatsApp-Image-2021-04-11-at-1.09.20-AM-640x400.jpeg';
const SALON_FRONT = 'https://raw.githubusercontent.com/james-palmer/new-image/master/Salon-front-side-640x400.jpeg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase font-lato text-rose-700 mb-3">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-900 mb-4">
            A Friendly, Local Salon
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-rose-300" />
            <ScissorsIcon size={18} className="text-rose-700" />
            <div className="h-px w-16 bg-rose-300" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-lato text-lg font-light text-warm-700 leading-relaxed mb-5">
              Hair at Woodmans is run by <strong className="font-semibold text-warm-900">Linda Kirby</strong>, a passionate and experienced hairdresser who has been serving the Brentwood community for many years.
            </p>
            <p className="font-lato text-base text-warm-700 leading-relaxed mb-5">
              Joined by her colleague, Linda and the team pride themselves on delivering a warm, unhurried, and thoroughly personal service. Every client is treated as an individual &mdash; whether you&rsquo;re coming in for a regular trim or something a little more special.
            </p>
            <p className="font-lato text-base text-warm-700 leading-relaxed mb-8">
              We are a small, friendly salon where you will always be made to feel welcome. We believe great hair starts with great conversation, and we take the time to understand exactly what you want.
            </p>
            <div className="border-l-4 border-rose-800 pl-5 py-1">
              <p className="font-serif text-xl italic text-warm-800 leading-relaxed">
                &ldquo;We treat every client like a friend &mdash; because most of them are.&rdquo;
              </p>
              <p className="font-lato text-sm text-rose-700 mt-2 tracking-wide">
                &mdash; Linda Kirby, Proprietor
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden">
              <img
                src={SALON_FRONT}
                alt="Hair at Woodmans salon front"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden mt-8">
              <img
                src={INTERIOR_1}
                alt="Inside the salon"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = SALON_FRONT;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
