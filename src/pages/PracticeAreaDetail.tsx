import { useParams, Link } from 'react-router-dom';
import { practiceAreas } from '../data/practiceAreas';

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="p-8 text-center">
        <h1 className="font-serif text-2xl font-bold text-maroon mb-4">
          Practice area not found
        </h1>
        <Link to="/practice-areas" className="text-maroon underline">
          Back to Practice Areas
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Banner */}
      <section className="relative">
        <img src={area.image} alt={area.title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white text-center px-4">
            {area.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 py-16 max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg mb-8">{area.description}</p>

        <Link
          to="/contact"
          className="inline-block bg-maroon text-white px-6 py-3 rounded font-semibold hover:opacity-90"
        >
          Speak to an Attorney
        </Link>
      </section>
    </div>
  );
};

export default PracticeAreaDetail;