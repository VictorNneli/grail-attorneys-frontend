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
          Authoritative advocacy and strategic legal counsel across our areas of
          practice, delivered by seasoned barristers and accredited advocates.
        </p>
      </section>

      <section className="px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/practice-areas/${area.slug}`}
              className="flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={area.image} alt={area.title} className="w-full h-44 object-cover" />
              <div className="flex flex-col flex-1 p-5">
                <h2 className="font-serif text-lg font-bold text-maroon mb-2">
                  {area.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{area.description}</p>
                <span className="mt-auto text-maroon text-sm font-semibold">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;