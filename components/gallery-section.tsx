import Image from 'next/image';
import { SectionReveal } from './section-reveal';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    alt: 'Elegant couple standing under warm evening light',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Hands holding wedding florals in a refined portrait',
    className: ''
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Soft candlelit wedding table setting',
    className: ''
  }
];

export function GallerySection() {
  return (
    <SectionReveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Moments imagined</p>
        <h2 className="mt-5 font-serif text-4xl md:text-5xl">A quiet gallery of atmosphere.</h2>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {galleryImages.map((image) => (
          <div
            key={image.src}
            className={`group relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-white/80 shadow-soft ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
