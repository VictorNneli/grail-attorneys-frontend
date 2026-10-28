import { Link } from 'react-router-dom';
import { practiceAreas } from '../data/practiceAreas';
import HeroCarousel from '../components/HeroCarousel';

const Home = () => {
  return (
    <div>
      <HeroCarousel />

      {/* Practice Areas preview */}
      <section className="px-8 py-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-10">
          Our Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/practice-areas/${area.slug}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={area.image} alt={area.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-serif font-bold text-maroon mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;