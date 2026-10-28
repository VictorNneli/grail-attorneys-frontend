import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1DuHHv9n28/',
    icon: (
      <Icon>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </Icon>
    )
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/grail_attorneys',
    icon: (
      <Icon>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </Icon>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/grail-attorneys/',
    icon: (
      <Icon>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </Icon>
    )
  },
  {
    label: 'X',
    href: 'https://x.com/GrailAttorneys',
    icon: (
      <Icon>
        <path d="M4 4l16 16M20 4L4 20" />
      </Icon>
    )
  }
];

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
              <a href="mailto:grailattorneys@gmail.com" className="hover:underline">
                grailattorneys@gmail.com
              </a>
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="h-10 w-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-cream transition"
              >
                {social.icon}
              </a>
            ))}
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