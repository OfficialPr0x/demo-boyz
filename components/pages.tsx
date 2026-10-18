import Link from 'next/link';
import Image from 'next/image';
import { path } from '@/lib/paths';
import { RequestForm } from '@/components/form';
import { DemoBoyzActions } from '@/components/actions';
import { Reveal } from '@/components/reveal';
import type { PosterArea, PosterService, PosterSite } from '@/lib/types';

export function DemoBoyzServicesIndex({ site }: { site: PosterSite }) {
  return (
    <section className="db-section">
      <div className="db-wrap">
        <Reveal>
          <p className="db-kicker">{site.servicesIntro.kicker}</p>
          <h2>{site.servicesIntro.title}</h2>
        </Reveal>
        <div className="db-work" style={{ marginTop: '1.6rem' }}>
          {site.services.map((service) => (
            <Link key={service.slug} href={path(service.href)} className="db-tile">
              <Image src={service.photo} alt="" fill sizes="(max-width: 860px) 100vw, 40vw" />
              <span>
                <strong>{service.nav}</strong>
                <em>{service.lede}</em>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoBoyzServicePage({ site, service }: { site: PosterSite; service: PosterService }) {
  const others = site.services.filter((item) => item.slug !== service.slug);
  return (
    <>
      <section className="db-hero db-hero-page">
        {service.mobilePhoto ? (
          <>
            <Image src={service.photo} alt="" fill priority sizes="100vw" className="db-hero-photo db-hero-desk" />
            <Image src={service.mobilePhoto} alt="" fill sizes="100vw" className="db-hero-photo db-hero-mob" />
          </>
        ) : (
          <Image src={service.photo} alt="" fill priority sizes="100vw" className="db-hero-photo" />
        )}
        <div className="db-hero-copy">
          <p className="db-kicker">{service.eyebrow}</p>
          <h1>
            {service.nav}
            <br />
            <em>{site.city}.</em>
          </h1>
          <span className="db-rule" />
          <a className="db-phone" href={site.phone.href}>
            {site.phone.display}
          </a>
          <DemoBoyzActions phone={site.phone} requestHref={path('/contact')} />
        </div>
      </section>
      <section className="db-section">
        <div className="db-wrap db-ask">
          <Reveal>
            <h2>{service.headline}</h2>
            <p>{service.lede}</p>
            <div className="db-page" style={{ display: 'grid' }}>
              {service.points.map((point) => (
                <article key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <div>
            <p className="db-kicker">{site.serviceFormTitle}</p>
            <p>{site.serviceFormIntro}</p>
            <RequestForm site={site} />
          </div>
        </div>
      </section>
      <section className="db-section" style={{ paddingTop: 0 }}>
        <div className="db-wrap">
          <p className="db-kicker">More of the work</p>
          <div className="db-work">
            {others.slice(0, 4).map((item) => (
              <Link key={item.slug} href={path(item.href)} className="db-tile" style={{ minHeight: '18rem' }}>
                <Image src={item.photo} alt="" fill sizes="40vw" />
                <span>
                  <strong>{item.nav}</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function DemoBoyzAreaPage({ site, area }: { site: PosterSite; area: PosterArea }) {
  return (
    <>
      <section className="db-hero db-hero-page">
        <Image src={area.photo} alt="" fill priority sizes="100vw" className="db-hero-photo" />
        <div className="db-hero-copy">
          <p className="db-kicker">{site.placeLabel}</p>
          <h1>
            {area.name}
            <br />
            <em>B.C.</em>
          </h1>
          <span className="db-rule" />
          <a className="db-phone" href={site.phone.href}>
            {site.phone.display}
          </a>
          <DemoBoyzActions phone={site.phone} requestHref={path('/contact')} />
        </div>
      </section>
      <section className="db-section">
        <div className="db-wrap db-ask">
          <Reveal>
            <h2>{area.headline}</h2>
            <p>{area.lede}</p>
            {area.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="db-page">
              {area.jobs.map((job) => (
                <article key={job}>
                  <h3>{job}</h3>
                </article>
              ))}
            </div>
          </Reveal>
          <div>
            <p className="db-kicker">Request service in {area.name}.</p>
            <p>{site.areaFormIntro}</p>
            <RequestForm site={site} town={area.name} />
          </div>
        </div>
      </section>
    </>
  );
}

export function DemoBoyzAbout({ site }: { site: PosterSite }) {
  return (
    <>
      <section className="db-hero db-hero-page">
        <Image
          src={site.about.hero.photo}
          alt={site.about.hero.alt}
          fill
          priority
          sizes="100vw"
          className="db-hero-photo"
        />
        <img className="db-ghost" src={site.favicon} alt="" />
        <div className="db-hero-copy">
          <p className="db-kicker">{site.about.hero.kicker}</p>
          <h1>
            {site.about.hero.line1}
            <br />
            <em>{site.about.hero.accent}</em>
          </h1>
          <span className="db-rule" />
          <a className="db-phone" href={site.phone.href}>
            {site.phone.display}
          </a>
          <DemoBoyzActions phone={site.phone} requestHref={path('/contact')} />
        </div>
      </section>
      <section className="db-split db-split-poster">
        <figure className="db-poster">
          <Image src={site.about.still.photo} alt={site.about.still.alt} width={2368} height={1776} />
        </figure>
        <div className="db-split-copy">
          <Reveal>
            <p className="db-kicker">{site.about.still.kicker}</p>
            <h2>{site.about.still.title}</h2>
            <p>{site.about.lede}</p>
            <p>{site.about.intro}</p>
          </Reveal>
        </div>
      </section>
      <section className="db-section">
        <div className="db-wrap db-page">
          {site.about.points.map((point) => (
            <article key={point.title}>
              <small>{point.title}</small>
              <h3>
                {point.href ? <a href={point.href}>{point.body}</a> : point.body}
              </h3>
            </article>
          ))}
        </div>
      </section>
      <section className="db-section" style={{ paddingTop: 0 }}>
        <div className="db-wrap">
          <Reveal>
            <p className="db-kicker">{site.about.photoNote.kicker}</p>
            <h2>{site.about.photoNote.title}</h2>
            <p>{site.about.photoNote.body}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function DemoBoyzContact({ site }: { site: PosterSite }) {
  return (
    <section className="db-section">
      <div className="db-wrap db-ask">
        <Reveal>
          <p className="db-kicker">{site.contact.kicker}</p>
          <h2>{site.contact.title}</h2>
          {site.contact.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="db-phone" href={site.phone.href}>
            {site.phone.display}
          </a>
        </Reveal>
        <RequestForm site={site} />
      </div>
    </section>
  );
}
