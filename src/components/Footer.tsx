import { ScissorsIcon, PhoneIcon, MapPinIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-warm-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ScissorsIcon size={18} className="text-rose-300" />
              <span className="font-serif text-xl text-white tracking-wide">Hair at Woodmans</span>
            </div>
            <p className="font-lato text-sm text-white/60 font-light leading-relaxed">
              A friendly, experienced hairdressing salon serving Brentwood and the surrounding area.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-4">Visit Us</h4>
            <address className="not-italic font-lato text-sm text-white/70 leading-relaxed">
              1–3 Hanging Hill Lane<br />
              Brentwood<br />
              Essex, CM13 2DD
            </address>
            <a
              href="https://maps.google.com/?q=1-3+Hanging+Hill+Lane,+Brentwood,+Essex,+CM13+2DD"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-rose-300 text-xs tracking-wide uppercase font-lato hover:text-rose-200 transition-colors duration-200"
            >
              <MapPinIcon size={12} />
              Get Directions
            </a>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-4">Book an Appointment</h4>
            <p className="font-lato text-sm text-white/70 mb-4">
              To book, simply give us a call &mdash; we&rsquo;d love to hear from you.
            </p>
            <a
              href="tel:+447771606009"
              className="inline-flex items-center gap-2 text-white font-lato font-bold text-lg hover:text-rose-300 transition-colors duration-200"
            >
              <PhoneIcon size={17} />
              07771 606009
            </a>
            <p className="font-lato text-xs text-white/50 mt-2">
              Open Monday &ndash; Saturday
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-lato text-xs text-white/40">
            &copy; {year} Hair at Woodmans. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-white/20" />
            <ScissorsIcon size={13} className="text-white/30" />
            <div className="h-px w-8 bg-white/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
