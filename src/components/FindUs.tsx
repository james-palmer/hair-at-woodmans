import { MapPinIcon, PhoneIcon, ClockIcon, ScissorsIcon } from './Icons';

const MAPS_URL =
  'https://maps.google.com/?q=1-3+Hanging+Hill+Lane,+Brentwood,+Essex,+CM13+2DD';

const hours = [
  { day: 'Monday', time: 'Open' },
  { day: 'Tuesday', time: 'Open' },
  { day: 'Wednesday', time: 'Open' },
  { day: 'Thursday', time: 'Open' },
  { day: 'Friday', time: 'Open' },
  { day: 'Saturday', time: 'Open' },
  { day: 'Sunday', time: 'Closed' },
];

export default function FindUs() {
  return (
    <section id="find-us" className="py-20 bg-cream-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase font-lato text-rose-700 mb-3">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-900 mb-4">
            Find Us
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-rose-300" />
            <ScissorsIcon size={18} className="text-rose-700" />
            <div className="h-px w-16 bg-rose-300" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 bg-rose-800 flex items-center justify-center">
                <MapPinIcon size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-warm-900 mb-1">Address</h3>
                <address className="not-italic font-lato text-warm-700 leading-relaxed">
                  1–3 Hanging Hill Lane<br />
                  Brentwood<br />
                  Essex<br />
                  CM13 2DD
                </address>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-rose-800 font-lato text-sm font-semibold tracking-wide uppercase hover:underline"
                >
                  <MapPinIcon size={14} />
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 bg-rose-800 flex items-center justify-center">
                <PhoneIcon size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-warm-900 mb-1">Telephone</h3>
                <a
                  href="tel:+447771606009"
                  className="font-lato text-lg text-warm-700 hover:text-rose-800 transition-colors duration-200"
                >
                  07771 606009
                </a>
                <p className="font-lato text-sm text-warm-700 mt-1">
                  Call us to book an appointment
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 bg-rose-800 flex items-center justify-center">
                <ClockIcon size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-warm-900 mb-3">Opening Hours</h3>
                <table className="font-lato text-sm text-warm-700 w-full">
                  <tbody>
                    {hours.map(({ day, time }) => (
                      <tr key={day} className="border-b border-rose-100 last:border-0">
                        <td className="py-1.5 pr-8 font-semibold text-warm-900">{day}</td>
                        <td
                          className={`py-1.5 ${
                            time === 'Closed' ? 'text-warm-700/50' : 'text-rose-800 font-medium'
                          }`}
                        >
                          {time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-warm-700/70 mt-3 font-lato italic">
                  Hours may vary. Call ahead to confirm availability.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden border border-rose-200 shadow-sm">
              <iframe
                title="Hair at Woodmans location"
                src="https://maps.google.com/maps?q=1-3+Hanging+Hill+Lane,+Brentwood,+Essex,+CM13+2DD&output=embed"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-rose-800 text-white py-3.5 text-sm tracking-wide uppercase font-lato font-semibold hover:bg-rose-900 transition-all duration-200 active:scale-95"
            >
              <MapPinIcon size={16} />
              Get Directions
            </a>

            <a
              href="tel:+447771606009"
              className="flex items-center justify-center gap-2 w-full border-2 border-rose-800 text-rose-800 py-3.5 text-sm tracking-wide uppercase font-lato font-semibold hover:bg-rose-800 hover:text-white transition-all duration-200 active:scale-95"
            >
              <PhoneIcon size={16} />
              Call: 07771 606009
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
