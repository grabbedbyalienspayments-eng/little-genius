import { useEffect, useRef, useState } from 'react';

const galleryItems = [
  {
    src: 'https://readdy.ai/api/search-image?query=group%20of%20young%20primary%20school%20children%20collaborating%20with%20a%20teacher%20at%20a%20large%20wooden%20table%20covered%20with%20colorful%20learning%20materials%2C%20bright%20airy%20classroom%20with%20bookshelves%20and%20educational%20posters%20on%20walls%2C%20warm%20natural%20light%20streaming%20through%20large%20windows%2C%20children%20engaged%20and%20focused%2C%20professional%20educational%20photography%2C%20warm%20tones&width=900&height=560&seq=gal-01&orientation=landscape',
    alt: 'Activități colaborative în clasă',
    caption: 'Colaborare în clasă',
    height: 'h-[280px]',
    colSpan: 'md:col-span-2',
    delay: 100,
  },
  {
    src: 'https://readdy.ai/api/search-image?query=dedicated%20kind%20teacher%20sitting%20close%20to%20a%20single%20small%20child%20reading%20together%20an%20illustrated%20book%20in%20a%20cozy%20reading%20corner%20with%20soft%20cushions%20and%20bookshelves%2C%20intimate%20warm%20educational%20moment%2C%20soft%20natural%20light%2C%20professional%20photography%2C%20warm%20beige%20and%20amber%20tones%2C%20private%20school%20setting&width=560&height=560&seq=gal-02&orientation=portrait',
    alt: 'Lectură individualizată',
    caption: 'Lectură 1-la-1',
    height: 'h-[220px] md:h-auto md:min-h-[504px]',
    colSpan: 'md:col-span-1 md:row-span-2',
    delay: 180,
  },
  {
    src: 'https://readdy.ai/api/search-image?query=children%20doing%20arts%20and%20crafts%20at%20school%20with%20paints%20brushes%20and%20colorful%20paper%2C%20cheerful%20expressions%20of%20concentration%20and%20creativity%2C%20bright%20classroom%20background%20with%20colorful%20displays%20on%20the%20walls%2C%20candid%20educational%20photography%2C%20warm%20natural%20light%2C%20professional&width=700&height=440&seq=gal-03&orientation=landscape',
    alt: 'Activitate artistică — pictură',
    caption: 'Artă și creativitate',
    height: 'h-[220px]',
    colSpan: 'md:col-span-1',
    delay: 260,
  },
  {
    src: 'https://readdy.ai/api/search-image?query=children%20playing%20on%20a%20bright%20colorful%20outdoor%20playground%20with%20safe%20modern%20equipment%2C%20running%20and%20laughing%2C%20sunny%20warm%20day%2C%20green%20grass%2C%20private%20school%20playground%20setting%2C%20candid%20joyful%20childhood%20photography%2C%20professional&width=700&height=440&seq=gal-04&orientation=landscape',
    alt: 'Teren de joacă — recreere activă',
    caption: 'Recreere în aer liber',
    height: 'h-[220px]',
    colSpan: 'md:col-span-1',
    delay: 320,
  },
  {
    src: 'https://readdy.ai/api/search-image?query=cheerful%20kindergarten%20children%20during%20a%20musical%20circle%20time%20activity%20clapping%20hands%20and%20singing%20together%20with%20a%20smiling%20teacher%2C%20colorful%20classroom%2C%20warm%20natural%20light%2C%20candid%20joyful%20early%20childhood%20education%20photography%2C%20professional&width=600&height=400&seq=gal-05&orientation=landscape',
    alt: 'Activitate muzicală grădiniță',
    caption: 'Muzică și ritm',
    height: 'h-[200px]',
    colSpan: 'md:col-span-1',
    delay: 400,
  },
  {
    src: 'https://readdy.ai/api/search-image?query=small%20group%20of%20elementary%20school%20children%20eating%20a%20healthy%20balanced%20meal%20together%20at%20a%20clean%20bright%20school%20dining%20room%2C%20colorful%20plates%20with%20vegetables%20and%20protein%2C%20cheerful%20children%20chatting%2C%20warm%20light%2C%20professional%20educational%20photography&width=600&height=400&seq=gal-06&orientation=landscape',
    alt: 'Masă sănătoasă în sala de mese',
    caption: 'Masă echilibrată',
    height: 'h-[200px]',
    colSpan: 'md:col-span-1',
    delay: 460,
  },
  {
    src: 'https://readdy.ai/api/search-image?query=children%20doing%20ballet%20dance%20class%20in%20a%20bright%20studio%20with%20mirror%2C%20little%20girls%20in%20ballet%20practice%20clothes%20at%20barre%2C%20focused%20expressions%2C%20professional%20photography%2C%20warm%20natural%20tones%2C%20educational%20extra-curricular%20activity%20setting%2C%20beautiful%20composition&width=600&height=400&seq=gal-07&orientation=landscape',
    alt: 'Club de balet — activitate opțională',
    caption: 'Club balet',
    height: 'h-[200px]',
    colSpan: 'md:col-span-1',
    delay: 520,
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-stone-50 py-24 overflow-hidden" ref={ref}>

      {/* Subtle bg texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #1a2d4e 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Viața la Little Genius</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
              Momente reale din fiecare zi
            </h2>
          </div>
          <p className="text-base text-neutral-500 max-w-sm leading-relaxed">
            Activități, explorare, prietenie și bucuria copilăriei — reflectate în viața de zi cu zi.
          </p>
        </div>

        {/* Editorial masonry grid with hover depth */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-3.5 transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {galleryItems.map((item, idx) => (
            <div
              key={item.alt}
              className={`relative img-zoom-wrap rounded-2xl overflow-hidden group cursor-pointer ${item.height} ${item.colSpan} transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: `${item.delay}ms`,
                boxShadow: '0 4px 20px rgba(9,24,56,0.08)',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-top"
                loading={idx < 2 ? 'eager' : 'lazy'}
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-4">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-semibold leading-tight block">{item.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm text-neutral-400 italic">
            Imagini reprezentative din activitățile zilnice — creșă, grădiniță, școală, cluburi.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="whitespace-nowrap inline-flex items-center gap-2 text-navy-700 hover:text-navy-900 font-semibold text-sm border border-navy-200 hover:border-navy-400 px-6 py-2.5 rounded-full cursor-pointer transition-all duration-200 hover:bg-navy-50"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-calendar-check-line text-sm" />
            </div>
            Programează o vizită
          </a>
        </div>

      </div>
    </section>
  );
}
