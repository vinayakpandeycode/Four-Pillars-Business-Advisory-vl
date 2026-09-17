'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, X, MessageCircle, Send, Check } from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fourpillars-oMVenYUvIZUgkcVtA3MC1O2mwY1el1.jpeg'
const collaboration = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-12%20at%2018.39.51-kKE7J7DNBafbCO7xM3n58hWttbJHFq.jpeg'
const whatsapp = 'https://wa.me/918828586487?text=Hello%20Four%20Pillars%2C%20I%20would%20like%20to%20discuss%20a%20business%20opportunity.'

const services = [
  ['01', 'Strategic Consulting', 'Commercially focused advice to identify growth opportunities, refine strategy and create a clear pathway for expansion.'],
  ['02', 'Cross-Border Market Entry', 'Market insight, connections and strategic direction for entering the GCC, South Asia, Africa and Australia.'],
  ['03', 'Strategic Partnerships', 'Carefully selected partners, operators, developers, institutions, investors and decision-makers.'],
  ['04', 'Business Expansion & Scaling', 'The relationships, structure and strategy required for sustainable growth across new markets.'],
  ['05', 'Opportunity & Investment Advisory', 'Commercially viable opportunities connecting the right capital, businesses and projects.'],
  ['06', 'Network & Market Access', 'Relationships and opportunities that accelerate credibility, market entry and international presence.'],
]
const sectors = [
  ['Education', 'Connecting education providers, institutions, investors and strategic partners across international markets.'],
  ['Real Estate', 'Supporting developers, investors, agencies and businesses with market expansion and cross-border opportunities.'],
  ['Hospitality', 'Helping hospitality brands and operators identify new markets, strategic partners and opportunities for growth.'],
  ['Food & Consumer Products', 'Supporting brands seeking distribution, market entry, partnerships and expansion.'],
]

function Button({ children, href = '#consultation', light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return <a href={href} className={`button ${light ? 'button-light' : ''}`}>{children}<ArrowUpRight size={15} /></a>
}

export function Site() {
  const [menu, setMenu] = useState(false)
  const [chat, setChat] = useState(false)
  const [sent, setSent] = useState(false)
  const [openService, setOpenService] = useState(0)

  return <main>
    <header className="nav"><a href="#top" className="brand"><img src={logo} alt="Four Pillars Business Services" /><span>FOUR PILLARS</span></a><button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X /> : <Menu />}</button><nav className={menu ? 'open' : ''}>{['About', 'Services', 'Real Estate', 'Projects'].map(x => <a key={x} href={`#${x.toLowerCase().replace(' ', '-')}`} onClick={() => setMenu(false)}>{x}</a>)}<Button>Schedule a Consultation</Button></nav></header>

    <section className="hero" id="top"><div className="hero-glow" /><div className="hero-content"><p className="eyebrow">FOUR PILLARS BUSINESS SERVICES <span>◆</span> DUBAI · UAE</p><h1>Connecting Markets.<br />Creating <em>Opportunities.</em><br /><strong>Scaling Businesses.</strong></h1><p className="hero-copy">A Dubai-based cross-border consulting and business development firm helping companies, investors, institutions and entrepreneurs build sustainable international growth.</p><div className="hero-actions"><Button>Schedule a Consultation</Button><a className="text-link" href="#services">Explore our services <ArrowDownRight size={16} /></a></div><div className="hero-visual"><img src={logo} alt="Four Pillars gold emblem and wordmark" /><div className="hero-visual-glow" /></div></div><div className="scroll-note"><span /> Scroll to explore</div><div className="hero-mark">IV<br /><small>THE FOUR PILLARS</small></div></section>

    <section className="intro section" id="about"><div className="section-label">01 — THE BRIEF</div><div className="intro-grid"><div><p className="eyebrow">A GLOBAL PERSPECTIVE</p><h2>Building bridges<br /><em>across borders.</em></h2></div><div><p className="lead">At Four Pillars Business Services, we don't simply advise businesses on where opportunities exist—we help create the connections that make those opportunities possible.</p><p>Whether you are looking to expand into the GCC, access South Asian markets, explore Africa, enter Australia or build an international partnership, we bring together the strategic thinking and relationships required to take the next step.</p><p className="gold-copy">Your ambition may be global. Our role is to help you get there.</p></div></div><div className="route"><div className="route-line" /><span>DUBAI</span><span>GCC</span><span>SOUTH ASIA</span><span>AFRICA</span><span>AUSTRALIA</span></div></section>

    <section className="dark-section section" id="services"><div className="section-label">02 — CAPABILITIES</div><div className="section-heading"><div><p className="eyebrow">FROM POSSIBILITY TO PROGRESS</p><h2>What we <em>do.</em></h2></div><p>From market entry and business structuring to partnerships, distribution, investment opportunities and strategic introductions, we help businesses move from opportunity to execution.</p></div><div className="services">{services.map(([num, title, copy], i) => <button className={`service-row ${openService === i ? 'active' : ''}`} key={num} onClick={() => setOpenService(i)}><span>{num}</span><h3>{title}</h3><span className="service-copy">{copy}</span><ArrowUpRight className="service-arrow" /></button>)}</div></section>

    <section className="pillars section"><div className="section-label">03 — OUR ADVANTAGE</div><div className="section-heading"><div><p className="eyebrow">THE FOUNDATION</p><h2>Why Four<br /><em>Pillars?</em></h2></div><p>We believe successful international expansion is built on four fundamental pillars. Each one matters. Together, they move businesses forward.</p></div><div className="pillar-grid">{[['01','Strategy','Understanding where you want to go and creating the right roadmap.'],['02','Market Access','Identifying the right markets and pathways to enter them.'],['03','Network','Connecting you with the right people, partners and decision-makers.'],['04','Execution','Turning strategy and opportunities into tangible commercial outcomes.']].map(x => <article key={x[0]}><span>{x[0]}</span><div className="pillar-bar" /><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>

    <section className="sectors section" id="projects"><div className="section-label">04 — SECTORS</div><div className="section-heading"><div><p className="eyebrow">WHERE WE FOCUS</p><h2>Our <em>sectors.</em></h2></div><p>Our focus extends across key growth sectors where strategic relationships and market access create lasting value.</p></div><div className="sector-grid">{sectors.map(([title, copy], i) => <article key={title} className={`sector sector-${i + 1}`}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight /></article>)}</div></section>

    <section className="real-estate section" id="real-estate"><div className="real-estate-copy"><p className="eyebrow">A DISTINCTIVE VERTICAL</p><h2>Real<br /><em>Estate.</em></h2><p className="lead">Strategic access to property, development and investment opportunities across international markets.</p><p>Supporting developers, investors, agencies and businesses with market expansion, strategic partnerships and cross-border opportunities.</p><Button light>Explore Real Estate Opportunities</Button></div><div className="architectural"><div className="arch-sun" /><div className="arch-lines" /><div className="arch-caption">Dubai · Built for what comes next</div></div></section>

    <section className="collab section"><div className="section-label">05 — STRATEGIC COLLABORATION</div><div className="collab-grid"><img src={collaboration} alt="Meraki and Four Pillars strategic collaboration marks" /><div><p className="eyebrow">MERAKI × FOUR PILLARS</p><h2>Relationships<br />that <em>move markets.</em></h2><p>Four Pillars Business Services works across markets to connect businesses, partners and opportunities through strategic relationships and execution.</p><Button>Discuss a Partnership</Button><a className="email" href="mailto:info@fourpillars.co">info@fourpillars.co</a></div></div></section>

    <section className="consultation section" id="consultation"><div className="consult-copy"><p className="eyebrow">06 — BEGIN THE CONVERSATION</p><h2>Schedule a<br /><em>consultation.</em></h2><p className="lead">Tell us where you want to go. We'll help you understand the path to get there.</p><a className="whatsapp-link" href={whatsapp}><MessageCircle size={18} /> Continue on WhatsApp</a></div><form onSubmit={e => { e.preventDefault(); setSent(true) }}>{sent ? <div className="success"><Check size={26} /><h3>Thank you.</h3><p>Your request has been received. We will be in touch shortly.</p></div> : <><div className="form-grid"><input required placeholder="Full Name *" /><input required placeholder="Company Name *" /><input required type="email" placeholder="Email *" /><input placeholder="Phone" /><input placeholder="Country" /><select defaultValue=""><option value="" disabled>Service / Area of Interest</option>{services.map(x => <option key={x[1]}>{x[1]}</option>)}<option>Real Estate</option><option>Other</option></select></div><textarea required placeholder="Tell us about your ambition *" /><button className="button submit">Request Consultation <ArrowUpRight size={15} /></button></>}</form></section>

    <footer><div className="footer-top"><div><a href="#top" className="brand"><img src={logo} alt="Four Pillars" /><span>FOUR PILLARS</span></a><p>Connecting Markets.<br />Creating Opportunities.<br />Scaling Businesses.</p></div><div><span className="footer-title">Explore</span><a href="#about">About</a><a href="#services">Services</a><a href="#real-estate">Real Estate</a><a href="#projects">Projects</a></div><div><span className="footer-title">Contact</span><span>Dubai, UAE</span><a href="mailto:info@fourpillars.co">info@fourpillars.co</a><a href="tel:+918828586487">+91 88285 86487</a></div><div><span className="footer-title">Markets</span><span>GCC</span><span>South Asia</span><span>Africa</span><span>Australia</span></div></div><div className="footer-bottom"><span>© 2026 Four Pillars Business Services. All rights reserved.</span><span>Privacy Policy · Terms & Conditions</span></div></footer>

    <a className="wa-float" href={whatsapp} aria-label="Continue on WhatsApp"><MessageCircle size={21} /></a><button className="chat-toggle" onClick={() => setChat(!chat)} aria-label="Open Four Pillars AI Assistant">{chat ? <X /> : <MessageCircle />}</button>{chat && <div className="chat"><div className="chat-head"><div><span className="status" /> Four Pillars AI Assistant</div><button onClick={() => setChat(false)}><X size={16} /></button></div><div className="chat-body"><div className="bubble assistant">Welcome to Four Pillars Business Services. How can we help you explore your next market, partnership or growth opportunity?</div><div className="quick">{['What does Four Pillars do?', 'What markets do you operate in?', 'Tell me about Real Estate.'].map(q => <button key={q} onClick={() => {}}>{q}</button>)}</div></div><div className="chat-input"><input placeholder="Ask a question..." /><button aria-label="Send"><Send size={16} /></button></div></div>}
  </main>
}
