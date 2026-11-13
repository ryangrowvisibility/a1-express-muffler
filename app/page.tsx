const PHONE = "(916) 484-9900";
const TEL = "tel:+19164849900";
const ADDRESS = "1216 Arden Way Ste B, Sacramento, CA 95815";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=A1%20Express%20Muffler&query_place_id=ChIJTexFN9LamoAR703PgzypDZo";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=1216+Arden+Way+Sacramento+CA+95815";
const MAP_EMBED = "https://maps.google.com/maps?q=1216%20Arden%20Way%2C%20Sacramento%2C%20CA%2095815&output=embed";
const YELP = "https://www.yelp.com/biz/a-1-express-muffler-sacramento";
const FACEBOOK = "https://www.facebook.com/p/A-1-Express-Muffler-100057353354222/";
const BBB = "https://www.bbb.org/us/ca/sacramento/profile/auto-repair/a-1-express-muffler-1156-12001531";
const NAPA = "https://www.napaonline.com/en/autocare/?facilityId=630288";

type IconName = "phone" | "star" | "pin" | "wrench" | "pipe" | "flame" | "gauge" | "wave" | "cut" | "check" | "arrow" | "clock" | "shield" | "nav" | "user" | "thumb" | "bolt";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, React.ReactNode> = {
    phone: <path {...p} d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2Z" />,
    star: <path fill="currentColor" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />,
    pin: <><path {...p} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle {...p} cx="12" cy="10" r="3" /></>,
    wrench: <path {...p} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />,
    pipe: <><rect {...p} x="3" y="8" width="11" height="8" rx="4" /><path {...p} d="M14 12h4l3-2M18 12l3 2" /></>,
    flame: <path {...p} d="M12 22c4 0 7-2.7 7-7 0-4-3-6.5-4-10-2 1.5-3 3.5-3 5.5-1-1-1.5-2-1.5-3.5C7 9 5 11.8 5 15c0 4.3 3 7 7 7Z" />,
    gauge: <><path {...p} d="M4 18a8 8 0 1 1 16 0" /><path {...p} d="m12 14 4-5" /><circle {...p} cx="12" cy="14" r="1.2" /></>,
    wave: <path {...p} d="M2 12h3l2-6 3 12 3-9 2 6 2-3h5" />,
    cut: <><circle {...p} cx="6" cy="6" r="3" /><circle {...p} cx="6" cy="18" r="3" /><path {...p} d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" /></>,
    check: <path {...p} d="M20 6 9 17l-5-5" />,
    arrow: <path {...p} d="M5 12h14M13 6l6 6-6 6" />,
    clock: <><circle {...p} cx="12" cy="12" r="9" /><path {...p} d="M12 7v5l3 2" /></>,
    shield: <><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path {...p} d="m9 12 2 2 4-4" /></>,
    nav: <path {...p} d="m3 11 19-9-9 19-2-8-8-2Z" />,
    user: <><circle {...p} cx="12" cy="8" r="4" /><path {...p} d="M4 21a8 8 0 0 1 16 0" /></>,
    thumb: <path {...p} d="M7 10v11H4V10Zm0 0 4-8a2.5 2.5 0 0 1 3 2.5V9h5a2 2 0 0 1 2 2.3l-1.4 7.5a2 2 0 0 1-2 1.7H7" />,
    bolt: <path {...p} d="M13 2 4 14h7l-1 8 9-12h-7Z" />,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" className={className} />
      ))}
    </span>
  );
}

const services: { icon: IconName; title: string; body: string; wide?: boolean }[] = [
  {
    icon: "pipe",
    title: "Muffler repair & replacement",
    body: "Loud rumble, rattling under the car or a muffler hanging low? We swap worn or rusted mufflers and fix the hangers and clamps that hold them, usually while you wait on common jobs.",
  },
  {
    icon: "wave",
    title: "Exhaust system repair",
    body: "Leaks, cracked pipes and broken joints from the manifold back. We find the leak and repair the section that failed instead of replacing the whole system.",
  },
  {
    icon: "flame",
    title: "Catalytic converter repair",
    body: "Check engine light, a rotten-egg smell or a failed smog test can point to the converter. We inspect it and replace or repair it so the car runs clean again.",
  },
  {
    icon: "wrench",
    title: "Custom exhaust",
    body: "Pipes bent and fitted to your car, whether you are replacing an odd setup or building something new. Tell us the sound and look you want.",
  },
  {
    icon: "cut",
    title: "Resonator delete",
    body: "Want a deeper tone? Resonator deletes are a regular job here, and one customer had theirs done by our tech James in under an hour.",
  },
  {
    icon: "gauge",
    title: "Performance exhaust & Borla installs",
    body: "Cat-back systems, performance mufflers and Borla exhaust installed by a shop that does exhaust every day. Ask about the system that fits your car.",
  },
];

const reviews = [
  {
    quote: "One of the best muffler shops in Sacramento. Amazing customer service and quality work.",
    who: "Yelp reviewer",
    job: "Muffler service",
  },
  {
    quote: "James did my resonator delete in less than an hour. Quick, clean work and no runaround.",
    who: "Yelp reviewer",
    job: "Resonator delete",
  },
  {
    quote: "Great service and great prices. I highly recommend this shop.",
    who: "Yelp reviewer",
    job: "Exhaust work",
  },
];

const steps = [
  { title: "Call for a quote", body: `Ring ${PHONE} on a weekday, 9 to 5. Describe the noise or the exhaust work you want.` },
  { title: "Drive in to Arden Way", body: "Bring the car to 1216 Arden Way, Suite B. We put it on the lift and show you what is going on underneath." },
  { title: "Approve the job", body: "You get the price before we start. Many common muffler and resonator jobs are done the same visit." },
  { title: "Hear the difference", body: "Drive away quiet, or with the sound you asked for, and with a shop you can come back to." },
];

const faqs = [
  {
    q: "Do you only do exhaust work?",
    a: "Exhaust is our specialty. We focus on mufflers, exhaust pipes, catalytic converters, custom exhaust, resonator deletes and performance systems, so it is what we know best.",
  },
  {
    q: "How long does a muffler or resonator job take?",
    a: "Common jobs are quick. One customer’s resonator delete was finished in less than an hour. Call ahead and we will tell you what to expect for your car.",
  },
  {
    q: "Do you install Borla and other performance exhaust?",
    a: "Yes. We install performance exhaust, including Borla systems. Call to talk through which system fits your car and the sound you want.",
  },
  {
    q: "What are your hours?",
    a: "We’re open Monday through Friday, 9:00 AM to 5:00 PM. We’re closed Saturday and Sunday.",
  },
  {
    q: "Where are you located?",
    a: "1216 Arden Way, Suite B, Sacramento, CA 95815, in the Arden-Arcade area.",
  },
  {
    q: "Are you part of NAPA Auto Care?",
    a: "Yes. A1 Express Muffler is a NAPA Auto Care affiliate (facility ID 630288).",
  },
];

const areas = ["Arden-Arcade", "Arden Way corridor", "Sacramento"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "A1 Express Muffler",
  telephone: "+1-916-484-9900",
  address: { "@type": "PostalAddress", streetAddress: "1216 Arden Way Ste B", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95815", addressCountry: "US" },
  openingHours: "Mo-Fr 09:00-17:00",
  foundingDate: "2001",
  areaServed: "Sacramento, CA",
  hasMap: MAPS_URL,
  sameAs: [YELP, FACEBOOK, BBB, NAPA],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>

      {/* Utility strip */}
      <div className="hidden bg-brand text-[0.95rem] text-white/85 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="inline-flex items-center gap-2"><Icon name="clock" className="h-4 w-4 text-cta" /> Mon–Fri 9:00 AM – 5:00 PM</span>
          <span className="inline-flex items-center gap-2"><Icon name="shield" className="h-4 w-4 text-cta" /> NAPA Auto Care affiliate · Since 2001</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="A1 Express Muffler home">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-cta text-ink"><Icon name="pipe" className="h-6 w-6" /></span>
            <span className="font-head text-2xl font-bold text-ink">A1 Express Muffler</span>
          </a>
          <nav className="hidden items-center gap-7 text-[1rem] font-semibold text-ink/80 lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#reviews" className="hover:text-accent">Reviews</a>
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#area" className="hover:text-accent">Location</a>
            <a href="#faq" className="hover:text-accent">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden text-lg font-bold text-ink md:inline">{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-12 items-center gap-2 rounded-lg bg-cta px-5 font-bold text-ink shadow-sm hover:bg-cta-hover md:inline-flex">
              <Icon name="phone" className="h-5 w-5" /> Call Now
            </a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-lg bg-cta text-ink md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top" className="bg-bg">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="rise text-[1.05rem] font-semibold text-accent">Sam &amp; Awad’s shop on Arden Way, since 2001</p>
              <h1 className="rise rise-2 mt-3 font-head text-[clamp(2.5rem,5.4vw,4.1rem)] font-bold text-ink">
                Muffler &amp; Exhaust Repair in Sacramento
              </h1>
              <p className="rise rise-3 mt-6 max-w-[37rem] text-[1.2rem] leading-relaxed text-muted">
                Mufflers, exhaust leaks, catalytic converters, custom exhaust, resonator deletes and Borla installs. Exhaust is all we do, and we’ve done it on Arden Way for about 25 years.
              </p>
              <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-cta px-7 text-lg font-bold text-ink shadow-[0_12px_24px_-12px_oklch(0.7_0.17_90/0.9)] hover:bg-cta-hover">
                  <Icon name="phone" className="h-5 w-5" /> Call {PHONE}
                </a>
                <a href="#services" className="btn inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border-2 border-ink px-7 text-lg font-bold text-ink hover:bg-brand-soft">
                  See our services <Icon name="arrow" className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[1rem] font-semibold text-ink/85">
                <span className="inline-flex items-center gap-2"><Icon name="thumb" className="h-5 w-5 text-accent" /> 94% recommend us on Facebook</span>
                <span className="hidden h-4 w-px bg-line sm:block" />
                <span>70 Yelp reviews</span>
                <span className="hidden h-4 w-px bg-line sm:block" />
                <span>Since 2001</span>
              </div>
            </div>

            {/* Featured review / quick facts */}
            <div className="rounded-[1.75rem] bg-brand-soft p-2">
              <div className="rounded-[1.4rem] bg-white p-7 md:p-8">
                <Stars className="h-6 w-6" />
                <blockquote className="mt-4 font-head text-[1.55rem] font-semibold leading-snug text-ink">
                  “One of the best muffler shops in Sacramento. Amazing customer service and quality work.”
                </blockquote>
                <p className="mt-3 text-[0.98rem] text-muted">Yelp reviewer · muffler service</p>
                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-6 text-[0.98rem]">
                  <div><dt className="font-semibold text-ink">Hours</dt><dd className="text-muted">Mon–Fri, 9–5</dd></div>
                  <div><dt className="font-semibold text-ink">Shop</dt><dd className="text-muted">1216 Arden Way, Ste B</dd></div>
                  <div><dt className="font-semibold text-ink">Specialty</dt><dd className="text-muted">Exhaust only</dd></div>
                  <div><dt className="font-semibold text-ink">Network</dt><dd className="text-muted">NAPA Auto Care</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why drivers choose A1 Express Muffler" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "thumb" as IconName, t: "94% recommend", s: "Facebook reviews" },
              { icon: "clock" as IconName, t: "Since 2001", s: "About 25 years on Arden Way" },
              { icon: "shield" as IconName, t: "NAPA Auto Care", s: "Facility ID 630288" },
              { icon: "bolt" as IconName, t: "Quick turnaround", s: "Many jobs same visit" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cta text-ink"><Icon name={x.icon} className="h-6 w-6" /></span>
                <div>
                  <p className="font-head text-xl font-bold leading-tight">{x.t}</p>
                  <p className="text-[0.95rem] text-white/75">{x.s}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[42rem]">
              <h2 className="font-head text-[clamp(2.1rem,3.8vw,3rem)] font-bold text-ink">Mufflers, exhaust and everything in between</h2>
              <p className="mt-4 text-[1.1rem] text-muted">
                A single-specialty shop: every car that comes in is here for exhaust work, so the techs see the same problems every day and fix them fast.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className={`reveal lift flex flex-col rounded-2xl border border-line bg-white p-7 ${s.wide ? "md:col-span-2" : ""}`}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-cta/30 text-ink"><Icon name={s.icon} /></span>
                  <h3 className="mt-5 font-head text-[1.45rem] font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 max-w-[60ch] flex-1 text-[1.05rem] leading-relaxed text-muted">{s.body}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
                    Call about this <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-[40rem]">
                <h2 className="font-head text-[clamp(2.1rem,3.8vw,3rem)] font-bold text-ink">94% of Facebook reviewers recommend us</h2>
                <p className="mt-4 text-[1.1rem] text-muted">Plus 70 reviews on Yelp. Customers mention the service, the quality of the work and how quickly it gets done.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={YELP} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 items-center gap-2 rounded-lg bg-ink px-5 font-bold text-white hover:bg-brand">Read reviews on Yelp</a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-ink px-5 font-bold text-ink hover:bg-white">Google Maps</a>
              </div>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.quote} className="reveal flex flex-col rounded-2xl bg-white p-7">
                  <Stars className="h-5 w-5" />
                  <blockquote className="mt-4 flex-1 font-head text-[1.3rem] font-semibold leading-snug text-ink">“{r.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4 text-[0.98rem]">
                    <span className="block font-semibold text-ink">{r.who}</span>
                    <span className="block text-muted">{r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-bg py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="font-head text-[clamp(2.1rem,3.8vw,3rem)] font-bold text-ink">An exhaust shop, and nothing else</h2>
              <div className="mt-6 max-w-[62ch] space-y-5 text-[1.12rem] leading-relaxed text-ink/90">
                <p>
                  A1 Express Muffler has been at 1216 Arden Way since 2001. Owners Sam Falm and Awad Salmouneh built it around one specialty: mufflers and exhaust. No oil changes, no tune-ups, just the system under your car, done well.
                </p>
                <p>
                  That focus is why the shop is quick. Common muffler swaps and resonator deletes are routine, and tech James has a reputation for turning them around fast. It’s also why drivers bring their custom and performance builds here, including Borla installs.
                </p>
                <p>
                  The shop is a NAPA Auto Care affiliate, and 94% of Facebook reviewers recommend it. Call Sam, Awad or James and you’ll get a straight answer on what your car needs.
                </p>
              </div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "pipe" as IconName, t: "Exhaust specialists", s: "One job, done every day for about 25 years." },
                { icon: "bolt" as IconName, t: "Fast on common jobs", s: "Resonator deletes in under an hour." },
                { icon: "user" as IconName, t: "Owners in the shop", s: "Sam and Awad still run it." },
                { icon: "shield" as IconName, t: "NAPA Auto Care", s: "Part of the NAPA Auto Care network." },
              ].map((x) => (
                <div key={x.t} className="reveal rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-cta"><Icon name={x.icon} /></span>
                  <h3 className="mt-4 font-head text-[1.25rem] font-bold text-ink">{x.t}</h3>
                  <p className="mt-1.5 text-[1.02rem] text-muted">{x.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2 className="font-head text-[clamp(2.1rem,3.8vw,3rem)] font-bold text-ink">How it works</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal relative rounded-2xl bg-white p-7 pt-9">
                  <span className="absolute -top-4 left-7 grid h-10 w-10 place-items-center rounded-full bg-cta font-head text-xl font-bold text-ink">{i + 1}</span>
                  <h3 className="font-head text-[1.35rem] font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[1.03rem] leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-bg py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="font-head text-[clamp(2.1rem,3.8vw,3rem)] font-bold text-ink">On Arden Way in Sacramento</h2>
              <p className="mt-4 text-[1.1rem] text-muted">Pull in at 1216 Arden Way, Suite B. Drivers come to us from Arden-Arcade and all over Sacramento.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold text-ink">
                    <Icon name="pin" className="h-4 w-4 text-accent" /> {a}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 text-[1.05rem]">
                <p className="flex items-start gap-3"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {ADDRESS}</p>
                <p className="flex items-start gap-3"><Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> Mon–Fri 9:00 AM – 5:00 PM · Sat &amp; Sun closed</p>
              </div>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn mt-7 inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-ink px-5 font-bold text-ink hover:bg-brand-soft">
                <Icon name="nav" className="h-5 w-5" /> Get directions
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of A1 Express Muffler, 1216 Arden Way, Sacramento" src={MAP_EMBED} className="h-[380px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[880px] px-5 md:px-6">
            <h2 className="font-head text-[clamp(2.1rem,3.8vw,3rem)] font-bold text-ink">Questions about exhaust work</h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="py-5">
                  <summary className="flex items-center justify-between gap-4 font-head text-[1.3rem] font-bold text-ink">
                    {f.q}
                    <span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cta text-xl leading-none text-ink" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-[1.05rem] leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-brand py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 md:px-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-head text-[clamp(2.2rem,4.4vw,3.4rem)] font-bold">Loud exhaust? Call {PHONE}.</h2>
              <p className="mt-3 text-[1.15rem] text-white/80">Talk to Sam, Awad or James. Mon–Fri 9 AM to 5 PM at 1216 Arden Way, Ste B.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-cta px-7 text-lg font-bold text-ink hover:bg-cta-hover">
                <Icon name="phone" className="h-5 w-5" /> Call {PHONE}
              </a>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-7 text-lg font-bold text-white hover:bg-white/10">
                <Icon name="nav" className="h-5 w-5" /> Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-head text-2xl font-bold text-ink">A1 Express Muffler</p>
            <p className="mt-3 max-w-[24rem] text-muted">Sacramento’s muffler and exhaust specialists since 2001. Owned by Sam Falm and Awad Salmouneh.</p>
            <div className="mt-5 space-y-2 text-[1.02rem]">
              <p><a href={TEL} className="font-semibold text-ink hover:text-accent">{PHONE}</a></p>
              <p className="text-ink/85">{ADDRESS}</p>
              <p className="text-ink/85">Mon–Fri 9:00 AM – 5:00 PM</p>
              <p className="text-[0.95rem] text-muted">NAPA Auto Care affiliate (facility ID 630288)</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { l: "Facebook", h: FACEBOOK },
                { l: "Yelp", h: YELP },
                { l: "BBB", h: BBB },
                { l: "NAPA Auto Care", h: NAPA },
              ].map((x) => (
                <a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-line px-3 py-2 text-[0.95rem] font-semibold text-ink hover:border-ink">{x.l}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-head text-lg font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-2 text-[1.02rem] text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-accent">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="font-head text-lg font-bold text-ink">Service area</p>
            <ul className="mt-3 space-y-2 text-[1.02rem] text-muted">
              {areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-[1200px] px-5 py-5 text-[0.95rem] text-muted md:px-6">© {new Date().getFullYear()} A1 Express Muffler. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2.5 md:hidden">
        <a href={TEL} className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta font-bold text-ink">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand font-bold text-white">
          <Icon name="nav" className="h-5 w-5" /> Directions
        </a>
      </div>
    </>
  );
}
