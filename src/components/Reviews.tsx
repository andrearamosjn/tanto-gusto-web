const locationRatings = [
  {
    name: "Sitges",
    rating: 4.8,
    count: 933,
    reviewsUrl: "https://www.google.com/maps/search/Tanto+Gusto+Sitges",
  },
  {
    name: "Castelldefels",
    rating: 4.8,
    count: 113,
    reviewsUrl: "https://www.google.com/maps/search/Tanto+Gusto+Castelldefels",
  },
  {
    name: "Vielha",
    rating: 4.6,
    count: 421,
    reviewsUrl: "https://www.google.com/maps/search/Tanto+Gusto+Vielha",
  },
];

const totalReviews = locationRatings.reduce((sum, l) => sum + l.count, 0);
const avgRating = (
  locationRatings.reduce((sum, l) => sum + l.rating * l.count, 0) / totalReviews
).toFixed(1);

const reviews = [
  {
    author: "María G.",
    rating: 5,
    text: "Las mejores empanadas que he probado fuera de Argentina. El trato es increíble, siempre con una sonrisa. Repetiré seguro!",
    location: "Sitges",
    timeAgo: "hace 2 semanas",
  },
  {
    author: "Jordi P.",
    rating: 5,
    text: "Descubrimos Tanto Gusto por casualidad y ahora es nuestro sitio favorito. Las medialunas están espectaculares y el café riquísimo.",
    location: "Castelldefels",
    timeAgo: "hace 1 mes",
  },
  {
    author: "Laura S.",
    rating: 5,
    text: "Pedimos para llevar y todo llegó perfecto. Las empanadas de carne cortada a cuchillo son una maravilla. 100% recomendable.",
    location: "Sitges",
    timeAgo: "hace 3 semanas",
  },
  {
    author: "Carlos M.",
    rating: 5,
    text: "El mejor brunch de Vielha sin duda. Todo casero, porciones generosas y un ambiente muy acogedor. Volveremos cada vez que subamos.",
    location: "Vielha",
    timeAgo: "hace 1 mes",
  },
  {
    author: "Ana R.",
    rating: 5,
    text: "Increíble relación calidad-precio. Los alfajores de maicena son adictivos. El personal súper amable y atento.",
    location: "Castelldefels",
    timeAgo: "hace 2 semanas",
  },
  {
    author: "Pablo D.",
    rating: 4,
    text: "Muy buena experiencia. Empanadas riquísimas y el mate con facturas un planazo. El local es pequeño pero con mucho encanto.",
    location: "Sitges",
    timeAgo: "hace 1 mes",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-star" : "text-border-subtle"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="resenas"
      className="bg-white py-20 lg:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex rounded-full bg-green-light px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-green">
            Reseñas
          </span>
          <h2
            id="reviews-heading"
            className="text-3xl font-bold tracking-tight text-text-primary lg:text-[42px]"
          >
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex flex-col items-center gap-3 mt-1">
            <div className="flex items-center gap-1.5">
              <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-2xl font-bold text-text-primary">{avgRating}</span>
              <Stars count={Math.round(Number(avgRating))} />
              <span className="text-sm text-text-tertiary">
                {totalReviews.toLocaleString("es-ES")}+ reseñas en Google
              </span>
            </div>
            <div className="flex gap-6">
              {locationRatings.map((loc) => (
                <a
                  key={loc.name}
                  href={loc.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-text-tertiary transition-colors hover:text-green"
                >
                  <span className="font-semibold text-text-secondary">{loc.name}</span>
                  <span className="text-star">★</span> {loc.rating} ({loc.count})
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.author}
              className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-warm p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-light text-sm font-bold text-green">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {review.author}
                    </p>
                    <p className="text-xs text-text-tertiary">
                      {review.location} · {review.timeAgo}
                    </p>
                  </div>
                </div>
                <svg className="h-5 w-5 text-text-tertiary" viewBox="0 0 24 24" aria-label="Reseña de Google">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              <Stars count={review.rating} />
              <p className="text-sm leading-relaxed text-text-secondary">
                &ldquo;{review.text}&rdquo;
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.google.com/search?q=%22Tanto+Gusto+comida+con+amor%22+opiniones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white px-6 py-3 text-sm font-semibold text-text-primary shadow-sm transition-all hover:border-green hover:text-green"
          >
            Ver todas las reseñas en Google
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
