import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { practiceAreas } from '../data/practiceAreas';

interface Slide {
  slug: string;
  headline: string;
  text: string;
  buttonLabel: string;
  buttonTo: string;
}

const slides: Slide[] = [
  {
    slug: 'litigation-adr',
    headline: 'Guiding Your Path To Freedom and Justice',
    text: 'A full service law firm serving local and international clients from Umuahia, Abia State.',
    buttonLabel: 'Book a Consultation',
    buttonTo: '/contact'
  },
  {
    slug: 'human-rights-criminal-justice',
    headline: 'Our Mission',
    text: 'To deliver pragmatic and bespoke legal services.',
    buttonLabel: 'Meet Our Team',
    buttonTo: '/team'
  },
  {
    slug: 'corporate-commercial',
    headline: 'Innovative, Solution Driven',
    text: 'Protecting the best interest of our clients in all corporate and commercial transactions.',
    buttonLabel: 'View Our Practice Areas',
    buttonTo: '/practice-areas'
  }
];

const SLIDE_DELAY = 3000;

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_DELAY);

    return () => clearTimeout(timer);
  }, [index, paused]);

  const goPrevious = () => setIndex((current) => (current - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((current) => (current + 1) % slides.length);

  return (
    <section
      className="relative h-[26rem] md:h-[32rem] overflow-hidden bg-maroon"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const image = practiceAreas.find((a) => a.slug === slide.slug)?.image ?? '';

        return (
          <div
            key={slide.slug}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-maroon/90 via-maroon/70 to-maroon/30" />

            <div className="relative h-full max-w-6xl mx-auto px-8 md:px-16 flex flex-col justify-center items-start text-white">
              <h2 className="font-serif text-3xl md:text-5xl font-bold max-w-2xl mb-4">
                {slide.headline}
              </h2>
              <p className="text-lg md:text-xl max-w-xl mb-8">{slide.text}</p>
              <Link
                to={slide.buttonTo}
                className="inline-block bg-cream text-maroon px-6 py-3 rounded font-semibold hover:opacity-90"
              >
                {slide.buttonLabel}
              </Link>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={goPrevious}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.slug}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;