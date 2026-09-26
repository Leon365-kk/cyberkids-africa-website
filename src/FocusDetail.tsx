import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import type { FocusArea } from './data';
import Logo from './Logo';

type Props = {
  area: FocusArea;
  onBack: () => void;
  onOpenForm: (interest: string) => void;
};

function FocusDetail({ area, onBack, onOpenForm }: Props) {
  const Icon = area.icon;

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          aria-label="CyberKids Africa home"
        >
          <Logo size={35} />
          <span>
            CyberKids <b>Africa</b>
          </span>
        </a>
        <a
          className="back-link-header"
          href="#focus"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          <ArrowLeft size={16} /> Back
        </a>
      </header>

      <main>
        <section className={`detail-hero ${area.color}`}>
          <div className="detail-hero-inner">
            <button className="detail-back" onClick={onBack}>
              <ArrowLeft size={18} /> All focus areas
            </button>
            <div className="detail-icon-row">
              <span className="detail-icon">
                <Icon size={32} strokeWidth={1.6} />
              </span>
              <span className="detail-number">{area.number}</span>
            </div>
            <h1>{area.title}</h1>
            <p className="detail-tagline">{area.tagline}</p>
          </div>
        </section>

        <section className="detail-body">
          <div className="detail-intro">
            <div className="section-kicker">Overview</div>
            <p>{area.intro}</p>
          </div>

          <div className="detail-sections">
            {area.sections.map((section, i) => (
              <div className="detail-section" key={section.heading}>
                <span className="detail-section-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="detail-outcomes">
            <div className="section-kicker">What students gain</div>
            <ul>
              {area.outcomes.map((outcome) => (
                <li key={outcome}>
                  <Check size={18} strokeWidth={2.5} />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-cta">
            <div>
              <h2>Want to bring this to your school or organization?</h2>
              <p>Get in touch and we'll find the right fit.</p>
            </div>
            <button
              className="button button-primary"
              onClick={() => onOpenForm(area.title)}
            >
              Get involved <ArrowUpRight size={17} />
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home" onClick={(e) => { e.preventDefault(); onBack(); }}>
            <Logo size={35} />
            <span>CyberKids <b>Africa</b></span>
          </a>
          <p>
            Building Africa's future through cybersecurity,
            <br />
            green innovation, and AI literacy.
          </p>
          <div className="footer-links">
            <a href="#about" onClick={(e) => { e.preventDefault(); onBack(); }}>About</a>
            <a href="#programs" onClick={(e) => { e.preventDefault(); onBack(); }}>Programs</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onBack(); }}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FocusDetail;
