import { teamMembers } from '../data/teamMembers';

const Team = () => {
  return (
    <div>
      <section className="bg-cream px-8 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-maroon mb-4">
          Our Legal Team
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Distinguished barristers, solicitors, and legal scholars dedicated to
          upholding justice with distinction across Nigerian jurisprudence.
        </p>
      </section>

      <section className="px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-serif font-bold text-maroon">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.title}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;