'use client';

import { useRef, useState, type FormEvent } from 'react';
import { PhoneText } from '@/components/actions';
import type { PosterSite } from '@/lib/types';

type Status = 'idle' | 'submitting' | 'success' | 'error';

function splitName(value: string) {
  const parts = value.trim().split(/\s+/);
  return { firstName: parts[0] ?? '', lastName: parts.slice(1).join(' ') };
}

export function RequestForm({ site, town }: { site: PosterSite; town?: string }) {
  const mountedAt = useRef(Date.now());
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const towns = [...site.areas.map((area) => area.name), site.otherPlace];
  const defaultTown = town && towns.includes(town) ? town : site.city;
  const { jobs, timings, prompts, stepLabels } = site.form;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;
    const data = new FormData(event.currentTarget);
    const { firstName, lastName } = splitName(String(data.get('fullName') ?? ''));
    if (!lastName) {
      setNameError(site.form.nameError);
      setFormError(null);
      setStep(2);
      return;
    }

    setStatus('submitting');
    setNameError(null);
    setFormError(null);

    try {
      const response = await fetch('/api/request', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: String(data.get('email') ?? ''),
          phone: String(data.get('phone') ?? ''),
          town: String(data.get('town') ?? '').trim(),
          job: String(data.get('job') ?? '').trim(),
          timing: String(data.get('timing') ?? '').trim(),
          notes: String(data.get('notes') ?? '').trim(),
          company: String(data.get('company') ?? ''),
          elapsedMs: Date.now() - mountedAt.current,
        }),
      });
      const body: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const parsed = body as { error?: string } | null;
        setFormError(parsed?.error ?? 'Check the fields and try again.');
        setStatus('error');
        setStep(2);
        return;
      }
      setStatus('success');
    } catch {
      setFormError(`The form did not send. Call ${site.phone.display}.`);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rp-form rp-success" role="status">
        <h3>{site.form.successTitle}</h3>
        <p>{site.form.successBody}</p>
        <a className="rp-btn rp-btn-navy" href={site.phone.href}>
          Call {site.phone.button}
        </a>
      </div>
    );
  }

  return (
    <form className="rp-form" onSubmit={onSubmit} noValidate>
      <ol className="rp-step-rail" aria-label="Request steps">
        {stepLabels.map((label, index) => (
          <li key={label} data-state={index === step ? 'now' : index < step ? 'done' : 'later'}>
            <button type="button" onClick={() => index < step && setStep(index)} disabled={index > step}>
              {label}
            </button>
          </li>
        ))}
      </ol>
      <h3>{prompts[step]}</h3>
      <input className="rp-sr" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div hidden={step !== 0}>
        <p className="rp-note">{site.form.townNote}</p>
        <fieldset className="rp-choices">
          <legend className="rp-sr">Town</legend>
          {towns.map((name) => (
            <label key={name} className="rp-choice">
              <input type="radio" name="town" value={name} defaultChecked={name === defaultTown} required />
              <strong>{name}</strong>
            </label>
          ))}
        </fieldset>
      </div>

      <div hidden={step !== 1}>
        <p className="rp-note">{site.form.jobNote}</p>
        <fieldset className="rp-choices">
          <legend className="rp-sr">What you need</legend>
          {jobs.map((job, index) => (
            <label key={job.value} className="rp-choice">
              <input type="radio" name="job" value={job.value} defaultChecked={index === 0} required />
              <strong>{job.title}</strong>
              {job.detail ? <em>{job.detail}</em> : null}
            </label>
          ))}
        </fieldset>
        <fieldset className="rp-choices rp-choices-3">
          <legend className="rp-sr">How soon</legend>
          {timings.map((item) => (
            <label key={item.value} className="rp-choice">
              <input
                type="radio"
                name="timing"
                value={item.value}
                defaultChecked={item.value === (timings[1]?.value ?? timings[0]?.value)}
                required
              />
              <strong>{item.title}</strong>
            </label>
          ))}
        </fieldset>
      </div>

      <div hidden={step !== 2}>
        <p className="rp-note">{site.form.contactNote}</p>
        <div className="rp-fields">
          <label>
            Name
            <input name="fullName" autoComplete="name" placeholder="First and last name" required={step === 2} />
            {nameError ? <span className="rp-error">{nameError}</span> : null}
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" placeholder="(250) 555-0100" required={step === 2} />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" placeholder="you@email.com" required={step === 2} />
          </label>
          <label>
            Anything else
            <textarea name="notes" placeholder={site.form.notesPlaceholder} />
          </label>
        </div>
        {formError ? (
          <p className="rp-error">
            <PhoneText text={formError} phone={site.phone} />
          </p>
        ) : null}
        <p>
          Or email <a href={site.email.href}>{site.email.display}</a>.
        </p>
      </div>

      <div className="rp-talk-nav">
        {step > 0 ? (
          <button type="button" className="rp-btn rp-btn-ghost" onClick={() => setStep((current) => current - 1)}>
            Back
          </button>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <button type="button" className="rp-btn rp-btn-navy" onClick={() => setStep((current) => current + 1)}>
            Continue
          </button>
        ) : (
          <button className="rp-btn rp-btn-navy" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : site.form.submitLabel}
          </button>
        )}
      </div>
    </form>
  );
}
