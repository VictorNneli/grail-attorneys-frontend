import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-maroon text-white mt-12">
      <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo.png"
              alt="Grail Attorneys logo"
              className="h-16 w-16 object-contain"
            />
            <p className="font-serif text-2xl font-bold">
              Grail<span className="text-cream">Attorneys</span>
            </p>
          </div>

          <address className="not-italic text-sm text-white/90 space-y-1">
            <p>1st floor Nmabuiro/Akumere Plaza Upstair line World Bank,</p>
            <p>Umuahia, Abia State</p>
          </address>

          <div className="mt-4 text-sm space-y-1">
            <p>
              <a href="tel:+2348147758121" className="hover:underline">
                (+234) 814-775-8121
              </a>
            </p>
            <p>
              <a href="mailto:info@grailattorneys.com" className="hover:underline">
                info@grailattorneys.com
              </a>
            </p>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm content-start md:justify-items-end">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          <Link to="/practice-areas" className="hover:underline">Practice Areas</Link>
          <Link to="/team" className="hover:underline">Our Team</Link>
        </nav>
      </div>

      <div className="bg-black/30 text-center text-sm py-4 px-8">
        © {new Date().getFullYear()} Grail Attorneys. All rights reserved. | Phone: (+234) 814-775-8121
      </div>
    </footer>
  );
};

export default Footer;