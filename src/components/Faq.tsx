import { ScissorsIcon } from './Icons';
import { SITE } from '../config/site';

const items: { question: string; answer: string }[] = [
  {
    question: 'Where is Hair at Woodmans?',
    answer: `${SITE.name} is at ${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.addressRegion} ${SITE.address.postalCode}. We serve Brentwood and nearby areas.`,
  },
  {
    question: 'How do I book an appointment?',
    answer: `Call us on ${SITE.phoneDisplay}. We take bookings by phone so we can find a time that suits you and discuss what you would like done.`,
  },
  {
    question: 'What hairdressing services do you offer?',
    answer:
      'We offer cuts and blow dries, colour and tinting, highlights and lowlights, perms and sets, styling for special occasions, and conditioning treatments. If you are unsure what you need, we are happy to advise.',
  },
  {
    question: 'When are you open?',
    answer:
      'We are open Monday to Saturday and closed on Sunday. Opening times can vary — please call ahead to confirm we can see you.',
  },
  {
    question: 'Who runs the salon?',
    answer:
      'The salon is run by Linda Kirby, an experienced hairdresser, with a small friendly team. We focus on personal service and taking time with each client.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-cream-50 border-t border-rose-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase font-lato text-rose-700 mb-3">
            Questions
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-900 mb-4">
            Common questions
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-rose-300" />
            <ScissorsIcon size={18} className="text-rose-700" />
            <div className="h-px w-16 bg-rose-300" />
          </div>
        </div>

        <dl className="space-y-8">
          {items.map(({ question, answer }) => (
            <div key={question}>
              <dt className="font-serif text-xl text-warm-900 mb-2">{question}</dt>
              <dd className="font-lato text-warm-700 leading-relaxed font-light border-l-4 border-rose-200 pl-4">
                {answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
