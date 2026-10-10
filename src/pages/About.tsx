import { Link } from 'react-router-dom';

const paragraphs = [
  `Grail Attorneys is a full service law firm serving a pool of both local and international clients with it’s office located in the south eastern part of Nigeria; Umuahia, Abia State.`,
  `At Grail Attorneys we have a team of diligent, competent and vibrant lawyers who apply their varied and combined experiences in initiative thinking to develop pragmatic and bespoke solutions to the problems of our esteemed clients.`,
  `Over the years, we have acquired a reputation of rendering pragmatic, bespoke and efficient legal services that suits the need of each client. Thus, making us a law firm of choice for clients and lawyers alike.`,
  `We take pride in our capacity building programme that has made us a law firm of lawyers abreast with the most recent case laws and statues in different sectors of our practice areas; Our intellectual depth at providing practical real time answers to our esteemed clients is top notch.`
];

const About = () => {
  return (
    <section className="px-8 py-16">
      <div className="max-w-2xl mx-auto">
        {/* About */}
        <h1 className="text-center text-2xl font-bold uppercase text-maroon mb-6">
          About Grail Attorneys
        </h1>

        <div className="space-y-5 text-justify text-gray-800 text-lg leading-relaxed">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Our Mission */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold uppercase text-maroon mb-6">
            Our Mission
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed">
            At Grail Attorneys our mission is to deliver pragmatic and bespoke legal services.
          </p>

          <blockquote className="border-l-4 border-maroon pl-5 my-5 font-serif text-2xl text-maroon">
            Guiding the path of our clients to Freedom and Justice.
          </blockquote>

          <p className="text-gray-800 text-lg leading-relaxed">
            We are dedicated to innovative thinking which ensures client satisfaction through our
            expertise, team work and professionalism. Integrity and efficiency is our watch word as
            we walk by your side every step of the way.
          </p>
        </div>

        <Link to="/contact" className="inline-block mt-8 text-maroon underline">
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default About;