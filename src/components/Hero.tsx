import { PhoneIcon, MapPinIcon } from './Icons';

const SALON_WIDER = 'https://raw.githubusercontent.com/james-palmer/new-image/master/Salon-wider-640x400.jpeg';
const SALON_FRONT = 'https://raw.githubusercontent.com/james-palmer/new-image/master/Salon-front-side-640x400.jpeg';

export default function Hero() {
  return (
    <section id="top" className="pt-[80px] bg-cream-50">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs tracking-widest uppercase font-lato text-rose-700 mb-4">
              Est. in Brentwood, Essex
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-warm-900 leading-tight mb-6">
              Hair at<br />
              <em className="not-italic text-rose-800">Woodmans</em>
            </h1>
            <div className="w-16 h-0.5 bg-rose-800 mb-6" />
            <p className="text-lg font-lato font-light text-warm-700 leading-relaxed mb-8">
              A warm, welcoming salon in the heart of Brentwood. Expert hair care from a friendly, experienced team who take the time to get to know you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+447771606009"
                className="flex items-center justify-center gap-2 bg-rose-800 text-white px-7 py-3.5 text-sm tracking-wide uppercase font-lato font-semibold hover:bg-rose-900 transition-all duration-200 active:scale-95"
              >
                <PhoneIcon size={16} />
                Call to Book
              </a>
              <a
                href="https://maps.google.com/?q=1-3+Hanging+Hill+Lane,+Brentwood,+Essex,+CM13+2DD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-rose-800 text-rose-800 px-7 py-3.5 text-sm tracking-wide uppercase font-lato font-semibold hover:bg-rose-800 hover:text-white transition-all duration-200 active:scale-95"
              >
                <MapPinIcon size={16} />
                Get Directions
              </a>
            </div>
            <p className="mt-5 text-sm font-lato text-warm-700">
              <span className="font-semibold text-warm-900">07771 606009</span>
              &nbsp;&middot;&nbsp;
              Open Monday &ndash; Saturday
            </p>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative overflow-hidden">
              <img
                src={SALON_WIDER}
                alt="Hair at Woodmans salon exterior"
                className="w-full object-cover h-72 md:h-96"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 overflow-hidden border-4 border-cream-50 shadow-md hidden md:block">
              <img
                src={SALON_FRONT}
                alt="Salon entrance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-3 -right-3 bg-rose-800 text-white px-4 py-3 text-center shadow-md hidden md:block">
              <p className="font-serif text-lg leading-none">Mon &ndash; Sat</p>
              <p className="text-xs tracking-widest uppercase font-lato mt-1">Open</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-rose-200 bg-rose-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/90 font-lato text-sm tracking-wide text-center sm:text-left">
            Book your appointment today &mdash; just give us a call
          </p>
          <a
            href="tel:+447771606009"
            className="text-white font-lato font-bold text-lg tracking-wide hover:text-rose-200 transition-colors duration-200 flex items-center gap-2"
          >
            <PhoneIcon size={18} />
            07771 606009
          </a>
        </div>
      </div>
    </section>
  );
}
