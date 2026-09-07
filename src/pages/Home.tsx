import { Link } from 'react-router-dom';
import { practiceAreas } from '../data/practiceAreas';

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream px-8 py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-maroon mb-4">
          Guiding Your Path To Freedom and Justice
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Grail Attorneys is a full-service law firm based in Umuahia, Abia State,
          committed to authoritative advocacy and unwavering client representation.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-maroon text-white px-6 py-3 rounded font-semibold hover:opacity-90"
        >
          Book a Consultation
        </Link>
      </section>

      {/* Practice Areas preview */}
      <section className="px-8 py-16">
        <h2 className="font-serif text-3xl font-bold text-center mb-10">
          Our Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/practice-areas/${area.slug}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={area.image} alt={area.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-serif font-bold text-maroon mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;