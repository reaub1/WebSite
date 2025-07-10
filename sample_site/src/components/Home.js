import React from 'react';
import collection1 from '../assets/images/description.png';
import contactImage from '../assets/images/contact.png';
import '../assets/font/apollon.css';

const Home = () => {
  const handleCollectionClick = () => {
    window.location.href = '/collection-classique';
};

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Bienvenue sur Veinural</h1>
        <p style={styles.subtitle}>
          Découvrez notre collection unique de bustes inspirés de l'art classique et moderne.
        </p>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Nos catégories populaires</h2>
        <div style={styles.categories}>
          <div
            style={styles.categoryCard}
            onClick={handleCollectionClick}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={collection1} alt="Buste classique" style={styles.image} />
          </div>
        </div>
      </section>
      <footer style={styles.footer}>
        <p>&copy; 2025 Veinural. Tous droits réservés.</p>
      </footer>
      <div style={styles.contactBar}>
        <img src={contactImage} alt="Contact" style={styles.contactImage} />
        <div style={styles.contactInfo}>
          <h3>Contactez-nous</h3>
          <p>Email : contact@veinural.com</p>
          <p>Téléphone : +33 1 23 45 67 89</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Apollon, Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#0a1a27',
    color: '#f4e2d3',
  },
  header: {
    backgroundColor: '#f4e2d3',
    color: '#0a1a27',
    padding: '20px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '2.5em',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#0a1a27',
  },
  section: {
    marginTop: '30px',
  },
  sectionTitle: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#f4e2d3',
  },
  categories: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  categoryCard: {
    border: `1px solid #f4e2d3`,
    padding: '15px',
    borderRadius: '10px',
    width: '300px',
    backgroundColor: '#0a1a27',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#f4e2d3',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  footer: {
    marginTop: '50px',
    backgroundColor: '#f4e2d3',
    color: '#0a1a27',
    padding: '10px',
    borderRadius: '10px',
  },
  contactBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4e2d3',
    color: '#0a1a27',
    padding: '20px',
    marginTop: '20px',
    borderRadius: '10px',
  },
  contactImage: {
    width: '400px',
    height: 'auto',
    marginRight: '20px',
  },
  contactInfo: {
    textAlign: 'left',
  },
};

export default Home;