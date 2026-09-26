import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Loader2, X } from 'lucide-react';
import { supabase } from './supabaseClient';

type Props = {
  initialInterest?: string;
  onClose?: () => void;
};

const interestOptions = [
  'Cybersecurity education',
  'EV & green technology',
  'AI for nonprofits',
  'AI literacy in schools',
  'CyberKids Bootcamps',
  'Green Tech Labs',
  'AI for Impact',
  'School AI Clubs',
  'General partnership',
];

export default function PartnerForm({ initialInterest = 'General partnership', onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('');
  const [interest, setInterest] = useState(initialInterest);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('partner_submissions').insert({
      name: name.trim(),
      email: email.trim(),
      organization: organization.trim() || null,
      role: role.trim() || null,
      interest,
      message: message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong on our end. Please try again in a moment.');
      return;
    }

    setStatus('success');
  };

  const reset = () => {
    setStatus('idle');
    setName('');
    setEmail('');
    setOrganization('');
    setRole('');
    setInterest('General partnership');
    setMessage('');
    setErrorMsg('');
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <Check size={32} strokeWidth={2.5} />
        </div>
        <h3>Thank you{organization ? `, ${organization}` : ''}!</h3>
        <p>
          We've received your message and our team will get back to you at{' '}
          <strong>{email}</strong> within 2–3 business days.
        </p>
        <div className="form-success-actions">
          <button className="button button-primary" onClick={reset}>
            Send another message
          </button>
          {onClose && (
            <button className="text-link" onClick={onClose}>
              Close <X size={16} />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form className="partner-form" onSubmit={handleSubmit}>
      {onClose && (
        <button type="button" className="form-close" onClick={onClose} aria-label="Close form">
          <X size={20} />
        </button>
      )}
      <div className="form-header">
        <div className="section-kicker">Partner with CyberKids Africa</div>
        <h3>Let's build something together.</h3>
        <p>Tell us about your organization and how you'd like to collaborate. We'll be in touch shortly.</p>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>Full name *</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Jane Doe"
          />
        </label>
        <label className="form-field">
          <span>Email address *</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="jane@organization.org"
          />
        </label>
        <label className="form-field">
          <span>Organization</span>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="School, nonprofit, company"
          />
        </label>
        <label className="form-field">
          <span>Your role</span>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Teacher, director, program lead"
          />
        </label>
        <label className="form-field form-field-full">
          <span>What are you interested in? *</span>
          <select value={interest} onChange={(e) => setInterest(e.target.value)}>
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <label className="form-field form-field-full">
          <span>Message *</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            placeholder="Tell us how you'd like to partner — workshops, programs, sponsorships, collaborations…"
          />
        </label>
      </div>

      {status === 'error' && (
        <div className="form-error">{errorMsg}</div>
      )}

      <button
        type="submit"
        className="button button-primary form-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={17} className="spin" /> Sending…
          </>
        ) : (
          <>
            Submit <ArrowUpRight size={17} />
          </>
        )}
      </button>
    </form>
  );
}
