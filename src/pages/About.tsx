const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream px-8 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-maroon mb-4">
          About Grail Attorneys
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Founded on the bedrock of integrity, tireless advocacy, and institutional
          reputation, Grail Attorneys has provided authoritative legal counsel across
          Abia State and beyond.
        </p>
      </section>

      {/* Mission */}
      <section className="px-8 py-16 max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl font-bold text-maroon mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-8">
          To provide accessible, rigorous, and ethical legal representation to
          individuals, businesses, and institutions across Eastern Nigeria — upholding
          the rule of law with unwavering diligence.
        </p>

        <h2 className="font-serif text-2xl font-bold text-maroon mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Integrity in every client relationship and courtroom appearance</li>
          <li>Efficiency without compromising the quality of legal counsel</li>
          <li>A client-first approach to every matter, regardless of scale</li>
        </ul>
      </section>

      {/* Founder spotlight */}
      <section className="bg-cream px-8 py-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src="/images/founder.jpg"
            alt="Founding Partner"
            className="w-48 h-48 object-cover rounded-full"
          />
          <div>
            <h3 className="font-serif text-xl font-bold text-maroon mb-1">
              Chief Nnamdi Okonkwo
            </h3>
            <p className="text-sm text-gray-500 mb-3">Founding & Managing Partner</p>
            <p className="text-gray-700 italic">
              "Every brief contains a human story that demands our highest
              intellectual and moral devotion."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;