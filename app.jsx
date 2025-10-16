import React, { useState } from 'react';

const EventManagementLanding = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: 'individual'
  });

  const features = [
    {
      icon: '📝',
      title: 'Dynamic Registration Forms',
      description: 'Create custom registration forms that adapt to different event types and requirements.'
    },
    {
      icon: '👥',
      title: 'Team & Individual Management',
      description: 'Handle both team-based and individual events with flexible participant structures.'
    },
    {
      icon: '📊',
      title: 'Automated Reporting',
      description: 'Generate attendance sheets, reports, and certificates automatically.'
    },
    {
      icon: '🔍',
      title: 'QR Code Check-in',
      description: 'Streamline event entry with QR-based verification and real-time attendance tracking.'
    }
  ];

  const eventTypes = [
    {
      name: 'Individual Events',
      description: 'Perfect for workshops, seminars, and solo competitions',
      features: ['Personal registration', 'Individual tracking', 'Custom forms']
    },
    {
      name: 'Team Events',
      description: 'Ideal for hackathons, group competitions, and team activities',
      features: ['Team management', 'Group registration', 'Team leader assignment']
    },
    {
      name: 'Mixed Events',
      description: 'For events with both individual and team participation',
      features: ['Flexible structure', 'Multiple registration types', 'Unified management']
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      eventType: 'individual'
    });
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>🎯</span>
            EventFlow
          </div>
          <div style={styles.navLinks}>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#solutions" style={styles.navLink}>Solutions</a>
            <a href="#demo" style={styles.navLink}>Demo</a>
            <button style={styles.ctaNavButton}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Smart Event Management
              <span style={styles.highlight}> Made Simple</span>
            </h1>
            <p style={styles.heroDescription}>
              Streamline your event registration and attendance workflow with our intelligent management system. 
              Say goodbye to manual spreadsheets and hello to automated efficiency.
            </p>
            <div style={styles.heroButtons}>
              <button style={styles.primaryButton}>Start Free Trial</button>
              <button style={styles.secondaryButton}>Watch Demo</button>
            </div>
            <div style={styles.stats}>
              <div style={styles.stat}>
                <span style={styles.statNumber}>85%</span>
                <span style={styles.statText}>Time Saved</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>99%</span>
                <span style={styles.statText}>Accuracy</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>1000+</span>
                <span style={styles.statText}>Events Managed</span>
              </div>
            </div>
          </div>
          <div style={styles.heroVisual}>
            <div style={styles.dashboardPreview}>
              <div style={styles.dashboardHeader}>
                <div style={styles.dashboardControls}>
                  <div style={styles.control}></div>
                  <div style={styles.control}></div>
                  <div style={styles.control}></div>
                </div>
              </div>
              <div style={styles.dashboardContent}>
                <div style={styles.chart}></div>
                <div style={styles.statsGrid}>
                  <div style={styles.miniStat}></div>
                  <div style={styles.miniStat}></div>
                  <div style={styles.miniStat}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>Powerful Features</h2>
          <p style={styles.sectionSubtitle}>
            Everything you need to manage events efficiently
          </p>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{
                  ...styles.featureCard,
                  ...(activeFeature === index ? styles.activeFeatureCard : {})
                }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" style={styles.solutions}>
        <div style={styles.sectionContainer}>
          <h2 style={styles.sectionTitle}>Event Type Solutions</h2>
          <p style={styles.sectionSubtitle}>
            Tailored solutions for every kind of event
          </p>
          <div style={styles.solutionsGrid}>
            {eventTypes.map((eventType, index) => (
              <div key={index} style={styles.solutionCard}>
                <h3 style={styles.solutionTitle}>{eventType.name}</h3>
                <p style={styles.solutionDescription}>{eventType.description}</p>
                <ul style={styles.featureList}>
                  {eventType.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureListItem}>
                      <span style={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button style={styles.solutionButton}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" style={styles.demo}>
        <div style={styles.sectionContainer}>
          <div style={styles.demoContent}>
            <div style={styles.demoText}>
              <h2 style={styles.sectionTitle}>See It In Action</h2>
              <p style={styles.demoDescription}>
                Experience how EventFlow transforms your event management process with 
                real-time analytics, automated reporting, and seamless attendee experiences.
              </p>
              <div style={styles.demoFeatures}>
                <div style={styles.demoFeature}>
                  <span style={styles.demoFeatureIcon}>⚡</span>
                  <span>Real-time attendance tracking</span>
                </div>
                <div style={styles.demoFeature}>
                  <span style={styles.demoFeatureIcon}>📱</span>
                  <span>Mobile-friendly check-in</span>
                </div>
                <div style={styles.demoFeature}>
                  <span style={styles.demoFeatureIcon}>📊</span>
                  <span>Automated report generation</span>
                </div>
              </div>
            </div>
            <div style={styles.demoVisual}>
              <div style={styles.phoneMockup}>
                <div style={styles.phoneScreen}>
                  <div style={styles.qrScanner}></div>
                  <div style={styles.attendeeInfo}>
                    <div style={styles.avatar}></div>
                    <div style={styles.attendeeDetails}>
                      <div style={styles.detailLine}></div>
                      <div style={styles.detailLine}></div>
                    </div>
                  </div>
                  <button style={styles.checkInButton}>Check In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Transform Your Event Management?</h2>
            <p style={styles.ctaDescription}>
              Join hundreds of organizations that trust EventFlow for their event management needs.
            </p>
            <form onSubmit={handleSubmit} style={styles.ctaForm}>
              <div style={styles.formGrid}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required
                />
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  style={styles.formInput}
                  required
                />
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  style={styles.formSelect}
                >
                  <option value="individual">Individual Events</option>
                  <option value="team">Team Events</option>
                  <option value="mixed">Mixed Events</option>
                </select>
              </div>
              <button type="submit" style={styles.submitButton}>
                Get Started Free
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <div style={styles.footerLogo}>
              <span style={styles.logoIcon}>🎯</span>
              EventFlow
            </div>
            <p style={styles.footerText}>
              Making event management simple, efficient, and accessible for everyone.
            </p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Product</h4>
            <a href="#" style={styles.footerLink}>Features</a>
            <a href="#" style={styles.footerLink}>Pricing</a>
            <a href="#" style={styles.footerLink}>Demo</a>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Company</h4>
            <a href="#" style={styles.footerLink}>About</a>
            <a href="#" style={styles.footerLink}>Blog</a>
            <a href="#" style={styles.footerLink}>Contact</a>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerHeading}>Support</h4>
            <a href="#" style={styles.footerLink}>Help Center</a>
            <a href="#" style={styles.footerLink}>Documentation</a>
            <a href="#" style={styles.footerLink}>Community</a>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2024 EventFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: '#333',
    lineHeight: 1.6,
  },
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '1rem 0',
    zIndex: 1000,
    borderBottom: '1px solid #e5e7eb'
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#7c3aed'
  },
  logoIcon: {
    fontSize: '1.75rem'
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  },
  navLink: {
    textDecoration: 'none',
    color: '#6b7280',
    fontWeight: '500',
    transition: 'color 0.3s'
  },
  ctaNavButton: {
    background: '#7c3aed',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s'
  },
  hero: {
    padding: '8rem 2rem 4rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: 1.2
  },
  highlight: {
    color: '#fbbf24'
  },
  heroDescription: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    opacity: 0.9
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3rem'
  },
  primaryButton: {
    background: '#fbbf24',
    color: '#1f2937',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.3s'
  },
  secondaryButton: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  stats: {
    display: 'flex',
    gap: '3rem'
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  statText: {
    fontSize: '0.875rem',
    opacity: 0.8
  },
  heroVisual: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dashboardPreview: {
    background: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    width: '300px',
    height: '200px'
  },
  dashboardHeader: {
    marginBottom: '1rem'
  },
  dashboardControls: {
    display: 'flex',
    gap: '0.5rem'
  },
  control: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#e5e7eb'
  },
  dashboardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  chart: {
    height: '60px',
    background: 'linear-gradient(90deg, #7c3aed, #ec4899)',
    borderRadius: '6px'
  },
  statsGrid: {
    display: 'flex',
    gap: '0.5rem'
  },
  miniStat: {
    flex: 1,
    height: '20px',
    background: '#e5e7eb',
    borderRadius: '4px'
  },
  features: {
    padding: '6rem 2rem',
    background: '#f8fafc'
  },
  sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#1f2937'
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: '4rem'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem'
  },
  featureCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  activeFeatureCard: {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    border: '2px solid #7c3aed'
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#1f2937'
  },
  featureDescription: {
    color: '#6b7280',
    lineHeight: 1.6
  },
  solutions: {
    padding: '6rem 2rem'
  },
  solutionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem'
  },
  solutionCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
    textAlign: 'center'
  },
  solutionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#1f2937'
  },
  solutionDescription: {
    color: '#6b7280',
    marginBottom: '2rem'
  },
  featureList: {
    listStyle: 'none',
    marginBottom: '2rem',
    textAlign: 'left'
  },
  featureListItem: {
    padding: '0.5rem 0',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  checkmark: {
    color: '#10b981',
    fontWeight: 'bold'
  },
  solutionButton: {
    background: 'transparent',
    color: '#7c3aed',
    border: '2px solid #7c3aed',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  demo: {
    padding: '6rem 2rem',
    background: '#1f2937',
    color: 'white'
  },
  demoContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center'
  },
  demoDescription: {
    fontSize: '1.125rem',
    marginBottom: '2rem',
    opacity: 0.9
  },
  demoFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  demoFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1.125rem'
  },
  demoFeatureIcon: {
    fontSize: '1.5rem'
  },
  demoVisual: {
    display: 'flex',
    justifyContent: 'center'
  },
  phoneMockup: {
    background: 'white',
    borderRadius: '24px',
    padding: '1rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
  },
  phoneScreen: {
    width: '250px',
    height: '450px',
    background: '#f8fafc',
    borderRadius: '16px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  qrScanner: {
    height: '150px',
    background: '#e5e7eb',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6b7280'
  },
  attendeeInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  avatar: {
    width: '50px',
    height: '50px',
    background: '#e5e7eb',
    borderRadius: '50%'
  },
  attendeeDetails: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  detailLine: {
    height: '12px',
    background: '#e5e7eb',
    borderRadius: '4px'
  },
  checkInButton: {
    background: '#7c3aed',
    color: 'white',
    border: 'none',
    padding: '1rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: 'auto'
  },
  ctaSection: {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    color: 'white'
  },
  ctaContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  ctaDescription: {
    fontSize: '1.125rem',
    marginBottom: '3rem',
    opacity: 0.9
  },
  ctaForm: {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '2rem'
  },
  formInput: {
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '1rem'
  },
  formSelect: {
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '1rem',
    background: 'white'
  },
  submitButton: {
    background: '#7c3aed',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    transition: 'background 0.3s'
  },
  footer: {
    background: '#111827',
    color: 'white',
    padding: '4rem 2rem 2rem'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '3rem',
    marginBottom: '3rem'
  },
  footerLogo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  footerText: {
    color: '#9ca3af',
    lineHeight: 1.6
  },
  footerHeading: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  footerLink: {
    display: 'block',
    color: '#9ca3af',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    transition: 'color 0.3s'
  },
  footerBottom: {
    borderTop: '1px solid #374151',
    paddingTop: '2rem',
    textAlign: 'center',
    color: '#9ca3af'
  }
};

export default EventManagementLanding;
