import { Link } from 'react-router-dom';
import { practiceAreas } from '../data/practiceAreas';

const PracticeAreas = () => {
  return (
    <div>
      <section className="bg-cream px-8 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-maroon mb-4">
          Practice Areas
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Authoritative advocacy and strategic legal counsel across four core areas
          of practice, delivered by seasoned barristers and accredited advocates.
        </p>
      </section>

      <section className="px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/practice-areas/${area.slug}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={area.image} alt={area.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="font-serif text-xl font-bold text-maroon mb-2">
                  {area.title}
                </h2>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;