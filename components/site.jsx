"use client"

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Check,
  ChevronDown,
  GraduationCap,
  Menu,
  MessageCircle,
  Pause,
  Play,
  Send,
  SlidersHorizontal,
  Utensils,
  Volume2,
  VolumeX,
  X,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

/* =========================================================
   FOUR PILLARS BUSINESS SERVICES
   Company-focused single-page corporate website
========================================================= */

const LOGO =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fourpillars-oMVenYUvIZUgkcVtA3MC1O2mwY1el1.jpeg"

const COLLABORATION_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-12%20at%2018.39.51-kKE7J7DNBafbCO7xM3n58hWttbJHFq.jpeg"

const HERO_VIDEO =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compressed-Meraki_Walkthrough-NYKCghCmGeQDGTybKTIzpQidp73VVj.mp4"

const PHONE_NUMBER = "+91 88285 86487"
const PHONE_LINK = "tel:+918828586487"
const EMAIL = "info@fourpillars.co"
const BROCHURE_PDF = "/brochure/Nirvana%20Residences%20Brochure_compressed%282%29.pdf"

const WHATSAPP_URL =
  "https://wa.me/918828586487?text=Hello%20Four%20Pillars%2C%20I%20would%20like%20to%20discuss%20a%20business%20opportunity."

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/fourpillars232/",
  facebook: "https://www.facebook.com/share/1DWnpTWF1T/",
  linkedin: "https://www.linkedin.com/in/four-pillars-a95961437",
}

/* Only the requested company-navigation items */
const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Sectors", href: "#sectors" },
  { label: "Markets", href: "#markets" },
  { label: "Opportunities", href: "#opportunities" },
]

const SERVICES = [
  {
    number: "01",
    title: "Strategic Consulting",
    description:
      "Commercially focused advice to identify growth opportunities, refine strategy and create a clear pathway for expansion.",
  },
  {
    number: "02",
    title: "Cross-Border Market Entry",
    description:
      "Support for entering the GCC, South Asia, Africa and Australia through market insight, local connections and strategic direction.",
  },
  {
    number: "03",
    title: "Strategic Partnerships",
    description:
      "Connecting businesses with selected partners, operators, developers, institutions, investors and decision-makers.",
  },
  {
    number: "04",
    title: "Business Expansion & Scaling",
    description:
      "Developing the relationships, structure and strategy required for sustainable international growth.",
  },
  {
    number: "05",
    title: "Opportunity & Investment Advisory",
    description:
      "Identifying commercially viable opportunities and connecting relevant capital, businesses and projects.",
  },
  {
    number: "06",
    title: "Network & Market Access",
    description:
      "Opening doors to relationships and opportunities that can accelerate market entry and international presence.",
  },
]

const APPROACH = [
  {
    number: "01",
    title: "Targeted Ambition",
    description:
      "Understanding client vision, financial expectations and regional capabilities to map tailored growth pathways.",
  },
  {
    number: "02",
    title: "Market Intelligence",
    description:
      "Assessing economic dynamics, regulatory landscapes and demand drivers across our key markets.",
  },
  {
    number: "03",
    title: "Trusted Network",
    description:
      "Unlocking relationships with key stakeholders, institutional investors, government entities and operators.",
  },
  {
    number: "04",
    title: "Flawless Execution",
    description:
      "Guiding corporate structuring, strategic partnerships and hands-on operational scaling from concept to fruition.",
  },
]

const PILLARS = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Understanding where you want to go and creating the right roadmap.",
  },
  {
    number: "02",
    title: "Market Access",
    description:
      "Identifying the right markets and pathways to enter them.",
  },
  {
    number: "03",
    title: "Network",
    description:
      "Connecting you with the right people, partners and decision-makers.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Turning strategy and opportunities into tangible commercial outcomes.",
  },
]

const SECTORS = [
  {
    title: "Education",
    description:
      "Institutional expansion, transnational education partnerships and edtech market entry.",
    icon: GraduationCap,
  },
  {
    title: "Real Estate",
    description:
      "Cross-border real estate development, capital advisory and asset portfolio growth.",
    icon: Building2,
  },
  {
    title: "Hospitality",
    description:
      "Luxury hotel development, F&B brand scaling and regional operator agreements.",
    icon: Building2,
  },
  {
    title: "Food & Consumer Products",
    description:
      "FMCG distribution networks, supply chain establishment and retail franchise expansion.",
    icon: Utensils,
  },
]

const MARKETS = [
  {
    number: "01",
    title: "GCC",
    description:
      "High-growth capital hub, government partnerships, sovereign networks and regional enterprise access.",
  },
  {
    number: "02",
    title: "South Asia",
    description:
      "Rapidly scaling consumer markets, technology sectors, manufacturing and institutional partnerships.",
  },
  {
    number: "03",
    title: "Africa",
    description:
      "High-potential trade corridors, infrastructure, hospitality and FMCG expansion.",
  },
  {
    number: "04",
    title: "Australia",
    description:
      "Cross-border real estate investment, transnational education and institutional capital trade.",
  },
]

const CHAT_SUGGESTIONS = [
  "What does Four Pillars do?",
  "Which markets do you cover?",
  "How can you help with market entry?",
  "I want to discuss a business opportunity.",
]

const BRIGHTNESS_OPTIONS = [
  { value: "dark", label: "Dark", opacity: 0.78 },
  { value: "medium", label: "Medium", opacity: 0.58 },
  { value: "high", label: "High", opacity: 0.38 },
]

export function Site() {
  const videoRef = useRef(null)

  const [menuOpen, setMenuOpen] = useState(false)

  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVideoMuted, setIsVideoMuted] = useState(true)
  const [brightness, setBrightness] = useState("medium")
  const [brightnessOpen, setBrightnessOpen] = useState(false)

  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState("")

  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [chatAnswer, setChatAnswer] = useState("")
  const [chatLoading, setChatLoading] = useState(false)
  const [chatError, setChatError] = useState("")

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.loop = true
    video.playsInline = true

    const handlePlay = () => setIsVideoPlaying(true)
    const handlePause = () => setIsVideoPlaying(false)
    const handleVolumeChange = () => setIsVideoMuted(video.muted)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("volumechange", handleVolumeChange)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("volumechange", handleVolumeChange)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) setMenuOpen(false)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleVideoPlayPause = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (video.paused) {
        await video.play()
        setIsVideoPlaying(true)
      } else {
        video.pause()
        setIsVideoPlaying(false)
      }
    } catch (error) {
      console.error("Video play/pause error:", error)
    }
  }

  const handleVideoSound = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      video.muted = !video.muted
      setIsVideoMuted(video.muted)

      if (!video.muted && video.paused) {
        await video.play()
        setIsVideoPlaying(true)
      }
    } catch (error) {
      console.error("Video sound error:", error)
    }
  }

  const selectedBrightness =
    BRIGHTNESS_OPTIONS.find((option) => option.value === brightness) ||
    BRIGHTNESS_OPTIONS[1]

  const heroOverlayStyle = {
    background: `
      linear-gradient(
        90deg,
        rgba(1, 26, 21, ${selectedBrightness.opacity}) 0%,
        rgba(1, 26, 21, ${selectedBrightness.opacity * 0.78}) 38%,
        rgba(1, 26, 21, ${selectedBrightness.opacity * 0.52}) 70%,
        rgba(1, 26, 21, ${selectedBrightness.opacity * 0.72}) 100%
      ),
      linear-gradient(
        180deg,
        rgba(1, 26, 21, ${selectedBrightness.opacity * 0.7}) 0%,
        rgba(1, 26, 21, 0.05) 45%,
        rgba(1, 26, 21, ${selectedBrightness.opacity}) 100%
      )
    `,
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()

    setFormSubmitting(true)
    setFormError("")
    setFormSubmitted(false)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      interest: String(formData.get("interest") || "").trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Unable to submit your enquiry."
        )
      }

      setFormSubmitted(true)
      form.reset()

      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } catch (error) {
      console.error("Contact form error:", error)
      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setFormSubmitting(false)
    }
  }

  const askAI = async (question) => {
    const message =
      typeof question === "string" ? question.trim() : chatMessage.trim()

    if (!message || chatLoading) return

    setChatLoading(true)
    setChatError("")
    setChatAnswer("")

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(
          data.error || "AI assistant is currently unavailable."
        )
      }

      if (!data.answer || typeof data.answer !== "string") {
        throw new Error("AI assistant returned an empty response.")
      }

      setChatAnswer(data.answer.trim())
      setChatMessage("")
    } catch (error) {
      console.error("AI chat error:", error)
      setChatError(
        error instanceof Error
          ? error.message
          : "Unable to connect to the AI assistant."
      )
    } finally {
      setChatLoading(false)
    }
  }

  const handleChatSubmit = (event) => {
    event.preventDefault()
    void askAI()
  }

  return (
    <main className="site-shell">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="hero-home" id="top">
        <video
          ref={videoRef}
          className="hero-home-video"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />

        <div
          className="hero-home-overlay"
          style={heroOverlayStyle}
          aria-hidden="true"
        />

        {/* NAVIGATION */}
        <header className="hero-home-nav">
          <a
            href="#top"
            className="hero-home-brand"
            aria-label="Four Pillars Business Services home"
          >
            <img src={LOGO} alt="Four Pillars Business Services" />
            <span className="hero-home-brand-text">
              <strong>FOUR PILLARS</strong>
              <small>BUSINESS SERVICES</small>
            </span>
          </a>

          <nav className="hero-home-links" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hero-home-nav-cta">
            START A CONVERSATION
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className="hero-mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </header>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav className="hero-mobile-nav" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowRight size={15} />
              </a>
            ))}
          </nav>
        )}

        {/* HERO CONTENT */}
        <div className="hero-home-content">
          <div className="hero-home-left">
            <div className="hero-home-eyebrow">
              <span />
              DUBAI · GCC · SOUTH ASIA · AFRICA · AUSTRALIA
            </div>

            <h1>
              <span>Connecting Markets.</span>
              <span className="hero-home-gold">
                <em>Creating Opportunities.</em>
              </span>
              <span>Scaling Businesses.</span>
            </h1>

            <p className="hero-home-description">
              Four Pillars Business Services is a Dubai-based cross-border
              consulting and business development firm helping companies,
              investors, institutions and entrepreneurs identify opportunities,
              enter new markets and build sustainable international growth.
            </p>

            <div className="hero-home-actions">
              <a href="#contact" className="hero-home-primary">
                CONTACT US
                <ArrowRight size={17} />
              </a>

              <a href="#approach" className="hero-home-secondary">
                OUR APPROACH
                <ChevronDown size={17} />
              </a>
            </div>
          </div>

          <div className="hero-home-card">
            <div className="hero-home-card-header">
              <span>DUBAI HEADQUARTERS</span>
              <Building2 size={21} strokeWidth={1.5} />
            </div>

            <div className="hero-home-logo-frame">
              <img src={LOGO} alt="Four Pillars Business Services" />
            </div>

            <div className="hero-home-card-line" />

            <div className="hero-home-card-footer">
              <span>Headquartered in Dubai</span>
              <strong>GCC &amp; Global</strong>
            </div>
          </div>
        </div>

        {/* VIDEO CONTROLS */}
        <div className="hero-home-controls">
          <button
            type="button"
            onClick={handleVideoPlayPause}
            aria-label={isVideoPlaying ? "Pause background video" : "Play background video"}
          >
            {isVideoPlaying ? <Pause size={15} /> : <Play size={15} />}
            <span>{isVideoPlaying ? "Pause" : "Play"}</span>
          </button>

          <button
            type="button"
            onClick={handleVideoSound}
            aria-label={isVideoMuted ? "Turn video sound on" : "Turn video sound off"}
          >
            {isVideoMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span>{isVideoMuted ? "Sound Off" : "Sound On"}</span>
          </button>

          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <button
              type="button"
              onClick={() => setBrightnessOpen((value) => !value)}
              aria-label="Change video brightness"
              aria-expanded={brightnessOpen}
            >
              <SlidersHorizontal size={15} />
              <span>{selectedBrightness.label}</span>
            </button>

            {brightnessOpen && (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "calc(100% + 9px)",
                  transform: "translateX(-50%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  padding: "6px",
                  minWidth: "105px",
                  border: "1px solid rgba(216,182,106,.28)",
                  background: "rgba(1,26,21,.96)",
                  backdropFilter: "blur(14px)",
                  borderRadius: "7px",
                  boxShadow: "0 18px 40px rgba(0,0,0,.28)",
                }}
              >
                {BRIGHTNESS_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setBrightness(option.value)
                      setBrightnessOpen(false)
                    }}
                    style={{
                      justifyContent: "flex-start",
                      width: "100%",
                      color:
                        brightness === option.value
                          ? "#d8b66a"
                          : "rgba(255,255,255,.72)",
                      background:
                        brightness === option.value
                          ? "rgba(216,182,106,.09)"
                          : "transparent",
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <a href="#about" className="hero-home-scroll">
          <span>Scroll to explore</span>
          <ArrowDownRight size={16} />
        </a>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section className="section intro-section" id="about">
        <div className="container">
          <div className="section-kicker">
            <span>01</span>
            THE BRIEF
          </div>

          <div className="intro-layout">
            <h2>
              International growth
              <br />
              requires more than
              <br />
              <em>good intentions.</em>
            </h2>

            <div className="intro-content">
              <p>
                Four Pillars Business Services is a Dubai-based cross-border
                consulting and business development firm helping companies,
                investors, institutions and entrepreneurs identify opportunities,
                enter new markets and build sustainable international growth.
              </p>

              <p>
                We operate at the intersection of strategy, market access,
                trusted relationships and execution, connecting businesses with
                the right people, partners, investors and opportunities across
                South Asia, Africa, the GCC and Australia.
              </p>

              <p>
                Our focus extends across Education, Real Estate, Hospitality and
                Food &amp; Consumer Products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}
      <section className="section dark-section approach-section" id="approach">
        <div className="container">
          <div className="section-kicker light">
            <span>02</span>
            OUR APPROACH
          </div>

          <h2>
            Expanding internationally requires
            <br />
            more than a good product or service.
            <br />
            <em>
              It requires the right strategy, the right
              market and the right network.
            </em>
          </h2>

          <div className="approach-divider" />

          <div className="approach-intro-grid">
            <p>
              At Four Pillars, we work closely with our clients to understand
              their ambitions, assess opportunities and develop practical
              strategies designed around their specific goals.
            </p>

            <p>
              From market entry and business structuring to partnerships,
              distribution, investment opportunities and strategic introductions,
              we help businesses move from opportunity to execution.
            </p>
          </div>

          <div className="approach-grid">
            {APPROACH.map((item) => (
              <article className="approach-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ArrowUpRight className="card-arrow" size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-kicker">
            <span>03</span>
            WHAT WE DO
          </div>

          <div className="section-heading-row">
            <h2>
              End-to-End International
              <br />
              Growth &amp; Strategic <em>Advisory.</em>
            </h2>

            <p>
              Practical, commercially focused support for businesses looking to
              enter markets, develop partnerships, scale operations and unlock
              international opportunities.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ArrowUpRight className="service-arrow" size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY FOUR PILLARS
      ===================================================== */}
      <section className="section pillars-section" id="pillars">
        <div className="container">
          <div className="section-kicker light">
            <span>04</span>
            WHY FOUR PILLARS
          </div>

          <div className="section-heading-row">
            <h2>
              Four fundamentals.
              <br />
              One <em>growth pathway.</em>
            </h2>

            <p>
              Successful international expansion is built on four fundamental
              pillars: Strategy, Market Access, Network and Execution.
            </p>
          </div>

          <div className="pillars-grid">
            {PILLARS.map((pillar) => (
              <article className="pillar-card" key={pillar.number}>
                <span className="card-number">{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="pillar-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTORS
      ===================================================== */}
      <section className="section sectors-section" id="sectors">
        <div className="container">
          <div className="section-kicker light">
            <span>05</span>
            KEY SECTOR FOCUS
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 3.6vw, 58px)",
              lineHeight: 1.08,
              maxWidth: "1200px",
            }}
          >
            Our focus extends across key growth sectors
            <br />
            where we help businesses unlock new markets,
            <br />
            develop strategic partnerships and expand their
            <br />
            international footprint.
          </h2>

          <div className="sectors-grid">
            {SECTORS.map((sector) => {
              const Icon = sector.icon

              return (
                <article className="sector-card" key={sector.title}>
                  <div className="sector-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                  <ArrowUpRight className="sector-arrow" size={17} />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKETS
      ===================================================== */}
      <section className="section markets-section" id="markets">
        <div className="container">
          <div className="section-kicker">
            <span>06</span>
            OUR GLOBAL FOOTPRINT
          </div>

          <div className="markets-heading">
            <h2>
              One base.
              <br />
              Multiple <em>markets.</em>
            </h2>

            <p>
              From our base in Dubai, we work across strategically important
              markets including the GCC, South Asia, Africa and Australia.
            </p>
          </div>

          <div className="markets-grid">
            {MARKETS.map((market) => (
              <article className="market-card" key={market.number}>
                <span>{market.number}</span>
                <h3>{market.title}</h3>
                <p>{market.description}</p>
                <ArrowUpRight className="market-arrow" size={17} />
              </article>
            ))}
          </div>

          <div className="markets-footer">
            <span>Dubai · United Arab Emirates</span>
            <span>GCC · South Asia · Africa · Australia</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          REAL ESTATE
      ===================================================== */}
      <section className="section property-section" id="real-estate">
        <div className="container">
          <div className="section-kicker">
            <span>07</span>
            REAL ESTATE
          </div>

          <div className="property-layout">
            <div className="property-copy">
              <h2>
                Connecting capital
                <br />
                with <em>opportunity.</em>
              </h2>

              <p>
                Supporting developers, investors, agencies and businesses with
                market expansion, strategic partnerships and cross-border
                opportunities.
              </p>

              <p>
                We bring together market insight, relationships and commercial
                pathways to help real estate opportunities move forward.
              </p>

              <a href="#contact" className="button button-primary">
                Discuss a Real Estate Opportunity
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="property-panel">
              <div className="property-panel-top">
                <span>FOUR PILLARS</span>
                <span>DUBAI · UAE</span>
              </div>

              <div className="property-panel-center">
                <Building2 size={52} strokeWidth={1} />
                <span>REAL ESTATE · MARKET ACCESS</span>
                <strong>
                  Strategic Cross-Border
                  <br />
                  Opportunities
                </strong>
              </div>

              <div className="property-panel-bottom">
                <span>Developers</span>
                <span>Investors</span>
                <span>Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS OPPORTUNITIES / BROCHURE
      ===================================================== */}
      <section
        className="section opportunities-section"
        id="opportunities"
        style={{
          background: "#F3EBDD",
          color: "#02271F",
        }}
      >
        <div className="container">
          <div className="section-kicker">
            <span>08</span>
            BUSINESS OPPORTUNITIES
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, .85fr)",
              gap: "clamp(28px, 5vw, 76px)",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                padding: "clamp(26px, 4vw, 54px)",
                border: "1px solid rgba(6,59,45,.16)",
                background: "rgba(255,255,255,.45)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  marginBottom: "18px",
                  fontSize: "11px",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "#A77A32",
                  fontWeight: 700,
                }}
              >
                FEATURED REAL ESTATE OPPORTUNITY
              </span>

              <h2
                style={{
                  margin: 0,
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(42px, 5.2vw, 76px)",
                  lineHeight: .92,
                  fontWeight: 500,
                  letterSpacing: "-.035em",
                }}
              >
                Nirvana Residences I
                <br />
                <em style={{ color: "#A77A32" }}>Me&apos;aisem, Dubai.</em>
              </h2>

              <p
                style={{
                  maxWidth: "650px",
                  margin: "28px 0 0",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "rgba(2,39,31,.72)",
                }}
              >
                A 22-storey residential tower in Me&apos;aisem, offering 392
                residences across studios, one-, two- and three-bedroom homes.
                The project combines residential living with fitness, wellness,
                leisure and community amenities distributed across the building.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "1px",
                  marginTop: "34px",
                  border: "1px solid rgba(6,59,45,.14)",
                  background: "rgba(6,59,45,.14)",
                }}
              >
                {[
                  ["392", "Residences"],
                  ["22", "Storeys"],
                  ["52,085.92", "Plot Sq.Ft."],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    style={{
                      padding: "20px 16px",
                      background: "#F3EBDD",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "30px",
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </strong>
                    <span
                      style={{
                        display: "block",
                        marginTop: "4px",
                        fontSize: "10px",
                        letterSpacing: ".13em",
                        textTransform: "uppercase",
                        color: "#7B6B5A",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginTop: "30px",
                }}
              >
                <a
                  href={BROCHURE_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                  aria-label="Open the Nirvana Residences I detailed brochure PDF"
                >
                  VIEW DETAILED BROCHURE
                  <ArrowUpRight size={15} />
                </a>

                <a href="#contact" className="button button-secondary">
                  DISCUSS THIS OPPORTUNITY
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div
              style={{
                minHeight: "100%",
                padding: "clamp(26px, 4vw, 48px)",
                background: "#063B2D",
                color: "#F8F5EC",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "radial-gradient(circle at 85% 15%, rgba(201,163,90,.22), transparent 34%), linear-gradient(145deg, rgba(255,255,255,.02), transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "#D8B66A",
                    fontWeight: 700,
                  }}
                >
                  DETAILED PROJECT BROCHURE
                </span>

                <h3
                  style={{
                    margin: "24px 0 18px",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "clamp(34px, 4vw, 52px)",
                    lineHeight: .98,
                    fontWeight: 500,
                  }}
                >
                  Explore the
                  <br />
                  <em style={{ color: "#D8B66A" }}>full opportunity.</em>
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "rgba(248,245,236,.72)",
                    lineHeight: 1.8,
                    fontSize: "14px",
                  }}
                >
                  Open the complete Nirvana Residences I brochure for project
                  details, location, amenities, residences and visual material.
                </p>
              </div>

              <div style={{ position: "relative", zIndex: 1, marginTop: "44px" }}>
                <div
                  style={{
                    padding: "16px 0",
                    borderTop: "1px solid rgba(216,182,106,.25)",
                    borderBottom: "1px solid rgba(216,182,106,.25)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "18px",
                    fontSize: "11px",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "rgba(248,245,236,.7)",
                  }}
                >
                  <span>Me&apos;aisem · Dubai</span>
                  <span>Residential</span>
                </div>

                <a
                  href={BROCHURE_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "24px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#D8B66A",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  View Detailed Brochure
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS / COLLABORATION
      ===================================================== */}
      <section className="section collaboration-section" id="projects">
        <div className="container">
          <div className="section-kicker light">
            <span>08</span>
            COLLABORATION
          </div>

          <div className="collaboration-layout">
            <div
              className="collaboration-image"
              style={{
                border: "1px solid rgba(201,163,90,.28)",
                background: "#02271F",
                overflow: "hidden",
                minHeight: "520px",
              }}
            >
              <img
                src={COLLABORATION_IMAGE}
                alt="Meraki × Four Pillars collaboration"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "contain",
                  objectPosition: "center",
                  background: "#02271F",
                }}
              />
            </div>

            <div className="collaboration-copy">
              <span className="collaboration-label">
                MERAKI × FOUR PILLARS
              </span>

              <h2>
                Building partnerships
                <br />
                that create
                <br />
                <em>new possibilities.</em>
              </h2>

              <p>
                Four Pillars works with businesses, institutions and strategic
                partners to create meaningful cross-border opportunities.
              </p>

              <p>
                Through targeted introductions, market access and commercial
                collaboration, we help turn relationships into pathways for
                growth.
              </p>

              <a href="#contact" className="text-link light-link">
                Explore a Collaboration
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}
      <section className="closing-section">
        <div className="container closing-inner">
          <div className="section-kicker light">
            <span>09</span>
            BUILDING BRIDGES ACROSS BORDERS
          </div>

          <h2>
            Your ambition may be
            <br />
            <em>global.</em>
            <br />
            Our role is to help
            <br />
            you get there.
          </h2>

          <p>
            Whether you are looking to expand into the GCC, access South Asian
            markets, explore Africa, enter Australia or build an international
            partnership, we bring together the strategic thinking and
            relationships required to take the next step.
          </p>

          <a href="#contact" className="button button-primary">
            Contact Us
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* =====================================================
          CONTACT — CONCISE CONSULTATION
      ===================================================== */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="section-kicker">
            <span>10</span>
            CONTACT US
          </div>

          <div className="contact-layout">
            <div className="contact-copy">
              <h2>
                Let&apos;s explore
                <br />
                what&apos;s
                <br />
                <em>possible.</em>
              </h2>

              <p>
                Tell us briefly about your business, market or opportunity.
                Our Dubai advisory team will review your enquiry and connect
                with you.
              </p>

              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>

                <div>
                  <span>Phone</span>
                  <a href={PHONE_LINK}>{PHONE_NUMBER}</a>
                </div>

                <div>
                  <span>Base</span>
                  <strong>Dubai, United Arab Emirates</strong>
                </div>

                <div>
                  <span>Markets</span>
                  <strong>GCC · South Asia · Africa · Australia</strong>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div
                className="contact-socials"
                aria-label="Four Pillars social media"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "28px",
                }}
              >
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  style={socialIconStyle}
                >
                  <InstagramIcon />
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  style={socialIconStyle}
                >
                  <LinkedinIcon />
                </a>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  style={socialIconStyle}
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>

            <div className="contact-form-wrap">
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <Check size={22} />
                  </div>

                  <span>ENQUIRY RECEIVED</span>

                  <h3>Thank you for reaching out.</h3>

                  <p>
                    Your enquiry has been submitted successfully. The Four
                    Pillars team will review your message and get back to you.
                  </p>

                  <button
                    type="button"
                    className="button button-primary"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="form-row">
                    <label>
                      <span>Full Name *</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        required
                        autoComplete="name"
                      />
                    </label>

                    <label>
                      <span>Email *</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                        autoComplete="email"
                      />
                    </label>
                  </div>

                  <label>
                    <span>How Can We Help? *</span>
                    <div className="select-wrap">
                      <select name="interest" required defaultValue="">
                        <option value="" disabled>
                          Select an area
                        </option>
                        <option value="Strategic Consulting">Strategic Consulting</option>
                        <option value="Cross-Border Market Entry">Cross-Border Market Entry</option>
                        <option value="Strategic Partnerships">Strategic Partnerships</option>
                        <option value="Business Expansion & Scaling">Business Expansion &amp; Scaling</option>
                        <option value="Opportunity & Investment Advisory">Opportunity &amp; Investment Advisory</option>
                        <option value="Network & Market Access">Network &amp; Market Access</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Education">Education</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Food & Consumer Products">Food &amp; Consumer Products</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown size={16} />
                    </div>
                  </label>

                  {formError && <div className="form-error">{formError}</div>}

                  <p className="form-note">
                    By submitting this form, you are requesting a business
                    consultation from Four Pillars Business Services.
                  </p>

                  <button
                    type="submit"
                    className="button button-primary form-submit"
                    disabled={formSubmitting}
                  >
                    {formSubmitting ? "Sending..." : "Submit Enquiry"}
                    {!formSubmitting && <Send size={14} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#top" className="footer-logo">
                <img src={LOGO} alt="Four Pillars Business Services" />
              </a>

              <p>
                Connecting Markets.
                <br />
                Creating Opportunities.
                <br />
                Scaling Businesses.
              </p>
            </div>

            <div className="footer-navigation">
              <div>
                <span>Explore</span>
                <a href="#about">About</a>
                <a href="#approach">Approach</a>
                <a href="#sectors">Sectors</a>
                <a href="#markets">Markets</a>
                <a href="#opportunities">Opportunities</a>
              </div>
            </div>

            <div className="footer-navigation">
              <div>
                <span>Business</span>
                <a href="#services">Services</a>
                <a href="#real-estate">Real Estate</a>
                <a href="#projects">Projects</a>
                <a href={BROCHURE_PDF} target="_blank" rel="noopener noreferrer">Detailed Brochure</a>
                <a href="#contact">Start a Conversation</a>
              </div>
            </div>

            <div className="footer-navigation">
              <div>
                <span>Connect</span>

                <a href={PHONE_LINK}>{PHONE_NUMBER}</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    marginTop: "8px",
                  }}
                >
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    style={footerSocialStyle}
                  >
                    <InstagramIcon size={16} />
                  </a>

                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    style={footerSocialStyle}
                  >
                    <LinkedinIcon size={16} />
                  </a>

                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                    style={footerSocialStyle}
                  >
                    <FacebookIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Four Pillars Business Services. All
              rights reserved.
            </span>

            <span>Dubai · United Arab Emirates</span>
          </div>
        </div>
      </footer>

      {/* =====================================================
          WHATSAPP
      ===================================================== */}
      <a
        href={WHATSAPP_URL}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Four Pillars on WhatsApp"
        title="Chat with Four Pillars on WhatsApp"
      >
        <MessageCircle size={23} />
      </a>

      {/* =====================================================
          AI CHAT BUTTON
      ===================================================== */}
      <button
        type="button"
        className="chat-float-button"
        onClick={() => setChatOpen((value) => !value)}
        aria-label={
          chatOpen
            ? "Close Four Pillars AI assistant"
            : "Open Four Pillars AI assistant"
        }
        title="Four Pillars AI Assistant"
      >
        {chatOpen ? <X size={21} /> : <Bot size={21} />}
      </button>

      {/* =====================================================
          AI CHAT PANEL
      ===================================================== */}
      {chatOpen && (
        <aside
          className="chat-panel"
          aria-label="Four Pillars AI Business Assistant"
        >
          <div className="chat-header">
            <div>
              <span>FOUR PILLARS</span>
              <strong>AI BUSINESS ASSISTANT</strong>
            </div>

            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close AI assistant"
            >
              <X size={17} />
            </button>
          </div>

          <div className="chat-body">
            <p className="chat-intro">
              Welcome to Four Pillars. Ask about our services, markets,
              sectors, partnerships, market entry or business opportunities.
            </p>

            <div className="chat-suggestions">
              {CHAT_SUGGESTIONS.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  disabled={chatLoading}
                  onClick={() => void askAI(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {chatLoading && (
              <div className="chat-loading" aria-label="AI is thinking">
                <span />
                <span />
                <span />
              </div>
            )}

            {chatError && (
              <div className="chat-answer chat-error">{chatError}</div>
            )}

            {chatAnswer && !chatError && (
              <div className="chat-answer">{chatAnswer}</div>
            )}
          </div>

          <form className="chat-form" onSubmit={handleChatSubmit}>
            <input
              type="text"
              value={chatMessage}
              onChange={(event) => setChatMessage(event.target.value)}
              placeholder="Ask something..."
              disabled={chatLoading}
              aria-label="Ask the Four Pillars AI assistant"
            />

            <button
              type="submit"
              disabled={chatLoading || !chatMessage.trim()}
              aria-label="Send message"
            >
              <Send size={17} />
            </button>
          </form>
        </aside>
      )}
    </main>
  )
}

/* =========================================================
   SOCIAL ICONS
   Inline SVGs are used instead of lucide-react social icons
   because the installed lucide-react version does not export
   Facebook / Instagram / Linkedin.
========================================================= */

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4.1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.4" cy="6.7" r="1.05" fill="currentColor" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5.2 8.4H2.7V21h2.5V8.4ZM4 3C3.15 3 2.5 3.65 2.5 4.5S3.15 6 4 6s1.5-.65 1.5-1.5S4.85 3 4 3ZM8.1 8.4V21h2.5v-6.25c0-1.65.3-3.25 2.35-3.25 2.02 0 2.05 1.9 2.05 3.36V21h2.5v-6.8c0-3.34-.72-5.9-4.62-5.9-1.87 0-3.1 1.03-3.61 2.01h-.04V8.4H8.1Z" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V3.95c-.29-.04-1.28-.13-2.43-.13-2.4 0-4.05 1.46-4.05 4.15V10H8.2v3h2.22v8h3.28Z" />
    </svg>
  )
}

/* =========================================================
   SOCIAL ICON STYLES
========================================================= */

const socialIconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "42px",
  height: "42px",
  border: "1px solid rgba(6,59,45,.22)",
  borderRadius: "50%",
  color: "#063B2D",
  background: "rgba(255,255,255,.32)",
  transition: "all .25s ease",
}

const footerSocialStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "34px",
  height: "34px",
  border: "1px solid rgba(216,182,106,.35)",
  borderRadius: "50%",
  color: "#D8B66A",
  background: "rgba(255,255,255,.03)",
}
