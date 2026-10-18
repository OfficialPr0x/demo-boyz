import Link from 'next/link';
import Image from 'next/image';
import { path } from '@/lib/paths';
import { RequestForm } from '@/components/form';
import { HeroSwap } from '@/components/hero-swap';
import { Reveal } from '@/components/reveal';
import type { PosterSite } from '@/lib/types';

const fromPage = [
  ['from-page-hero.jpg', 'Kitchen'],
  ['from-page-kitchen.jpg', 'The island'],
  ['from-page-framing.jpg', 'Framing'],
  ['from-page-rough.jpg', 'Rough-in'],
  ['open-door.jpg', 'The opening'],
  ['open-room.jpg', 'The room'],
  ['lake-opening.jpg', 'The patio'],
  ['wrapped-door.jpg', 'The doorway'],
] as const;

export function DemoBoyzHome({ site }: { site: PosterSite }) {
  const loop = [...site.services, ...site.services];

  return (
    <>
      <HeroSwap
        phone={site.phone}
        requestHref={path('/contact')}
        frames={[
          {
            photo: site.hero.photo,
            mobilePhoto: site.hero.mobilePhoto,
            alt: site.hero.alt,
            kicker: site.hero.kicker,
            line1: site.hero.line1,
            accent: site.hero.accent,
          },
          ...(site.secondHero
            ? [
                {
                  photo: site.secondHero.photo,
                  mobilePhoto: site.secondHero.mobilePhoto,
                  alt: site.secondHero.alt,
                  kicker: site.secondHero.kicker,
                  line1: site.secondHero.line1,
                  accent: site.secondHero.accent,
                },
              ]
            : []),
        ]}
      />

      <div className="db-marquee" aria-hidden="true">
        <div className="db-marquee-track">
          {loop.map((service, index) => (
            <span key={`${service.slug}-${index}`}>
              <b>{service.nav}</b> · Kelowna
            </span>
          ))}
        </div>
      </div>

      <section className="db-section">
        <div className="db-wrap">
          <Reveal>
            <p className="db-kicker">{site.servicesIntro.kicker}</p>
            <h2>{site.servicesIntro.title}</h2>
          </Reveal>
          <div className="db-work" style={{ marginTop: '1.6rem' }}>
            {site.services.map((service) => (
              <Link key={service.slug} href={path(service.href)} className="db-tile">
                <Image src={service.photo} alt="" fill sizes="(max-width: 860px) 100vw, 50vw" />
                <span>
                  <strong>{service.nav}</strong>
                  <em>{service.filmLine}</em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="db-split db-split-poster">
        <figure className="db-poster">
          <Image src={site.ownerPanel.photo} alt={site.ownerPanel.alt} width={2368} height={1776} priority />
        </figure>
        <div className="db-split-copy">
          <Reveal>
            <p className="db-kicker">{site.ownerPanel.kicker}</p>
            <h2>{site.ownerPanel.title}</h2>
            {site.ownerPanel.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="db-actions">
              <a className="db-btn" href={site.phone.href}>
                {site.ownerPanel.callLabel}
              </a>
              <Link className="db-btn db-btn-line" href={path('/about')}>
                {site.ownerPanel.aboutLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="db-section">
        <div className="db-wrap">
          <Reveal>
            <p className="db-kicker">{site.faq.kicker}</p>
            <h2>{site.faq.title}</h2>
            <div className="db-faq" style={{ marginTop: '1.4rem' }}>
              {site.faq.items.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="db-section" style={{ paddingTop: 0 }}>
        <div className="db-wrap">
          <p className="db-kicker">On site</p>
          <div className="db-strip">
            {fromPage.map(([file, label]) => (
              <figure key={file}>
                <Image src={`/${file}`} alt={`${label} posted by Demo-Boyz`} fill sizes="25vw" />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="db-section">
        <div className="db-wrap db-ask">
          <Reveal>
            <p className="db-kicker">{site.request.kicker}</p>
            <h2>{site.request.title}</h2>
            <p>{site.request.intro}</p>
            <a className="db-phone" href={site.phone.href}>
              {site.phone.display}
            </a>
          </Reveal>
          <RequestForm site={site} />
        </div>
      </section>
    </>
  );
}
