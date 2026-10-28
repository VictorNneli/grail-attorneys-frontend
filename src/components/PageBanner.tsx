import { practiceAreas } from '../data/practiceAreas';

interface Props {
  title: string;
  subtitle?: string;
  imageSlug: string;
}

const PageBanner = ({ title, subtitle, imageSlug }: Props) => {
  const image = practiceAreas.find((a) => a.slug === imageSlug)?.image ?? '';

  return (
    <section className="relative h-64 md:h-80 overflow-hidden bg-maroon">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-maroon/90 via-maroon/70 to-maroon/40" />

      <div className="relative h-full max-w-4xl mx-auto px-8 flex flex-col items-center justify-center text-center text-white">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageBanner;