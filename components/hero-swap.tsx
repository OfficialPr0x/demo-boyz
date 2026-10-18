'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DemoBoyzActions } from '@/components/actions';

type Frame = {
  photo: string;
  mobilePhoto?: string;
  alt: string;
  kicker: string;
  line1: string;
  accent: string;
};

export function HeroSwap({
  frames,
  phone,
  requestHref,
}: {
  frames: readonly Frame[];
  phone: { display: string; href: string };
  requestHref: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (frames.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % frames.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [frames.length]);

  return (
    <section className="db-hero db-hero-swap" aria-label="Demo-Boyz">
      {frames.map((frame, frameIndex) => (
        <div key={frame.photo} className="db-slide" data-on={frameIndex === index} aria-hidden={frameIndex !== index}>
          <Image
            src={frame.photo}
            alt={frameIndex === index ? frame.alt : ''}
            fill
            priority={frameIndex === 0}
            sizes="100vw"
            className="db-hero-photo db-hero-desk"
          />
          <Image src={frame.mobilePhoto ?? frame.photo} alt="" fill sizes="100vw" className="db-hero-photo db-hero-mob" />
          <div className="db-hero-copy">
            <p className="db-kicker">{frame.kicker}</p>
            {frameIndex === index ? (
              <h1>
                {frame.line1}
                <br />
                <em>{frame.accent}</em>
              </h1>
            ) : (
              <p className="db-hero-title">
                {frame.line1}
                <br />
                <em>{frame.accent}</em>
              </p>
            )}
            <span className="db-rule" />
            <a className="db-phone" href={phone.href}>
              {phone.display}
            </a>
            <DemoBoyzActions phone={phone} requestHref={requestHref} />
          </div>
        </div>
      ))}
    </section>
  );
}
