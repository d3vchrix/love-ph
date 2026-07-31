import { useEffect, useState } from 'react'
import './App.css'

const destinations = [
  {
    title: 'Ala Eh, Batangas',
    location: 'Beachside culture and island hopping',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Breathtaking Batanes',
    location: 'Rolling hills and Ivatan heritage',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Coron Escape',
    location: 'Limestone cliffs, reefs and island days',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80',
  },
]

const offers = [
  {
    title: 'Smart eSIM',
    copy: 'Stay connected the moment you touch down.',
  },
  {
    title: 'Local Tours',
    copy: 'Guided adventures designed around your pace.',
  },
  {
    title: 'Wellness Stays',
    copy: 'Recharge with spa, farm and nature escapes.',
  },
]

function App() {
  const [isBackVisible, setIsBackVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsBackVisible(window.scrollY > 360)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <img
            className="brand-mark brand-mark-image"
            src="assets/pep-tech-logo.png"
            alt="PEP media logo"
          />
          <span>
            <strong>Positive Technologies</strong>
            <small>LovePH experience</small>
          </span>
        </a>

        <nav className="top-nav padding-side-2" aria-label="Section navigation">
          <a href="#experiences">Experiences</a>
          <a href="#highlights">Highlights</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Positive Technologies Inc. • Travel innovation</p>
            <h1>Discover the Philippines with a fresh sense of wonder.</h1>
            <p>
              Reimagined for modern travelers, this one-page experience brings together
              scenic escapes, local culture, and curated essentials in a beautifully
              responsive layout.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#experiences">
                Explore journeys
              </a>
              <a className="btn btn-secondary" href="#offers">
                View offers
              </a>
            </div>
            <div className="hero-pills">
              <span>Island adventures</span>
              <span>Culture-rich routes</span>
              <span>Seamless planning</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured destinations">
            <div className="hero-card hero-card-main">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80"
                alt="A tropical beach and clear water"
              />
            </div>
            <div className="hero-card hero-card-side">
              <h3>Curated for every kind of traveler</h3>
              <p>From heritage tours to island weekends, every journey feels effortless.</p>
            </div>
          </div>
        </section>

        <section id="experiences" className="section">
          <div className="section-heading">
            <p className="eyebrow">Regional experiences</p>
            <h2>Iconic destinations across the archipelago</h2>
          </div>

          <div className="card-grid">
            {destinations.map((destination) => (
              <article className="destination-card" key={destination.title}>
                <img src={destination.image} alt={destination.title} loading="lazy" />
                <div className="destination-copy">
                  <h3>{destination.title}</h3>
                  <p>{destination.location}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="highlights" className="section section-grid">
          <div className="info-panel">
            <p className="eyebrow">Why travelers love it</p>
            <h2>Everything in one flow, from discovery to booking.</h2>
            <ul>
              <li>Accessible experience that feels calm and modern.</li>
              <li>Animated transitions that keep the journey feeling alive.</li>
              <li>Made to work beautifully from mobile to desktop.</li>
            </ul>
          </div>

          <div className="info-panel accent-panel">
            <p className="eyebrow">What is new</p>
            <h2>Fresh routes for your next weekend or long holiday.</h2>
            <p>
              Explore scenic coasts, heritage districts, and relaxing retreats designed to
              delight every mood and travel style.
            </p>
          </div>
        </section>

        <section id="offers" className="section">
          <div className="section-heading">
            <p className="eyebrow">LovePH exclusives</p>
            <h2>Small details that make every trip smoother</h2>
          </div>

          <div className="offer-grid">
            {offers.map((offer) => (
              <article className="offer-card" key={offer.title}>
                <h3>{offer.title}</h3>
                <p>{offer.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section cta-section">
          <h2>Ready to explore the Philippines?</h2>
          <p>Start your journey with a destination that feels polished, personal, and easy.</p>
          <a className="btn btn-primary" href="#home">
            Back to top
          </a>
        </section>
      </main>

      {isBackVisible ? (
        <button type="button" className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      ) : null}
    </div>
  )
}

export default App
