import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
  X,
} from 'lucide-react';
import { focusAreas, programs, socialLinks, type FocusArea } from './data';
import Logo from './Logo';
import FocusDetail from './FocusDetail';
import PartnerForm from './PartnerForm';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDetail, setActiveDetail] = useState<FocusArea | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formInterest, setFormInterest] = useState('General partnership');

  const closeMenu = () => setMenuOpen(false);

  const openDetail = (area: FocusArea) => {
    setActiveDetail(area);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const closeDetail = () => {
    setActiveDetail(null);
  };

  const openForm = (interest: string = 'General partnership') => {
    setFormInterest(interest);
    setFormOpen(true);
    setMenuOpen(false);
  };

  const closeForm = () => setFormOpen(false);

  if (activeDetail) {
    return (
      <>
        <FocusDetail
          area={activeDetail}
          onBack={closeDetail}
          onOpenForm={openForm}
        />
        {formOpen && (
          <div className="form-overlay" onClick={closeForm}>
            <div className="form-modal" onClick={(e) => e.stopPropagation()}>
              <PartnerForm initialInterest={formInterest} onClose={closeForm} />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="CyberKids Africa home">
          <Logo size={35} />
          <span>CyberKids <b>Africa</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#focus" onClick={closeMenu}>Our focus</a>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#partnerships" onClick={closeMenu}>Partners</a>
          <button className="nav-cta" onClick={() => openForm()}>
            Get involved <ArrowUpRight size={16} />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> A brighter digital future for Africa</div>
            <h1>Building the<br /><em>future,</em> together.</h1>
            <p className="hero-intro">We equip Africa's young people and mission-driven organizations with the skills to thrive in a digital, sustainable, and AI-powered world.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#focus">Explore our programs <ArrowUpRight size={17} /></a>
              <button className="text-link" onClick={() => openForm()}>Partner with us <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration representing learning and progress">
            <div className="art-grid" />
            <div className="art-orb orb-one" />
            <div className="art-orb orb-two" />
            <div className="art-card">
              <span className="mini-label">The next generation</span>
              <strong>is already<br /><span>creating.</span></strong>
              <div className="card-line"><span /><small>Learn · Build · Lead</small></div>
            </div>
            <span className="art-note note-top">Curiosity is<br />our superpower.</span>
            <span className="art-note note-bottom">Made in Africa<br /><b>for the world.</b></span>
          </div>
          <div className="scroll-note"><span /> Scroll to explore</div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-kicker">01 / Who we are</div>
          <div className="about-content">
            <h2>Technology is a tool.<br /><span>Opportunity is the goal.</span></h2>
            <div className="about-text">
              <p>CyberKids Africa is more than an education initiative — it's a movement. We bring together technology, sustainability, and social impact to empower young Africans with the tools they need to lead in the 21st century.</p>
              <div className="vision-grid">
                <div><span>Our vision</span><p>A continent where every child and nonprofit can harness technology ethically and sustainably.</p></div>
                <div><span>Our mission</span><p>To deliver inclusive education in cybersecurity, green technology, and artificial intelligence literacy across Africa.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="focus-section section-wrap" id="focus">
          <div className="section-heading">
            <div><div className="section-kicker">02 / What we do</div><h2>Four ways we<br /><em>move forward.</em></h2></div>
            <p>Practical skills. Big ideas. Real-world impact. We make complex subjects accessible, exciting, and relevant to everyday life.</p>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  className={`focus-card ${area.color}`}
                  key={area.slug}
                  onClick={() => openDetail(area)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(area); } }}
                >
                  <div className="card-top"><span>{area.number}</span><Icon size={28} strokeWidth={1.6} /></div>
                  <h3>{area.title}</h3>
                  <p>{area.short}</p>
                  <a aria-label={`Learn more about ${area.title}`}><ArrowUpRight size={18} /></a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="programs-section" id="programs">
          <div className="section-wrap programs-inner">
            <div className="section-kicker light">03 / Learning in action</div>
            <div className="programs-heading"><h2>Where ideas become<br /><em>possibility.</em></h2><p>Our programs turn curiosity into confidence through workshops, clubs, and hands-on experiences.</p></div>
            <div className="program-list">
              {programs.map(([title, description], index) => (
                <button
                  className="program-row"
                  key={title}
                  onClick={() => openForm(title)}
                >
                  <span>0{index + 1}</span>
                  <strong>{title}</strong>
                  <small>{description}</small>
                  <ArrowUpRight size={20} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="partner-section section-wrap" id="partnerships">
          <div className="partner-copy"><div className="section-kicker">04 / Join the movement</div><h2>It takes a<br /><em>community.</em></h2></div>
          <div className="partner-text">
            <p>We collaborate with schools, nonprofits, tech companies, and innovation hubs to provide resources, access, and opportunity for Africa's next generation of innovators.</p>
            <button className="button button-primary" onClick={() => openForm()}>Become a partner <ArrowUpRight size={17} /></button>
          </div>
        </section>

        <section className="contact-strip" id="contact">
          <div>
            <div className="section-kicker light">Start a conversation</div>
            <h2>Let's build what<br /><em>comes next.</em></h2>
          </div>
          <button className="contact-email" onClick={() => openForm()}>
            Partner with us <ArrowUpRight size={22} />
          </button>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#home"><Logo size={35} /><span>CyberKids <b>Africa</b></span></a>
            <p>Building Africa's future through cybersecurity,<br />green innovation, and AI literacy.</p>
            <div className="social-links">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="CyberKids Africa on LinkedIn"><Linkedin size={18} /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="CyberKids Africa on Instagram"><Instagram size={18} /></a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="CyberKids Africa on Twitter"><Twitter size={18} /></a>
            </div>
          </div>
          <div className="footer-columns">
            <div className="footer-col">
              <span className="footer-col-title">Explore</span>
              <a href="#about">About</a>
              <a href="#focus">Our focus</a>
              <a href="#programs">Programs</a>
              <a href="#partnerships">Partners</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Contact</span>
              <a href="mailto:info@cyberkidsafrica.org">info@cyberkidsafrica.org</a>
              <span className="footer-location">Nairobi, Kenya</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 CyberKids Africa. Nairobi, Kenya.</span>
          <a className="back-top" href="#home"><ChevronDown size={16} /> Back to top</a>
        </div>
      </footer>

      {formOpen && (
        <div className="form-overlay" onClick={closeForm}>
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            <PartnerForm initialInterest={formInterest} onClose={closeForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
