import React from 'react';
import statueImage1 from '../assets/images/image1.jpg';
import statueImage2 from '../assets/images/image2.jpg';
import statueImage3 from '../assets/images/image3.jpg';

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Bienvenue sur notre boutique de bustes de statues</h1>
        <p style={styles.subtitle}>
          Découvrez notre collection unique de bustes inspirés de l'art classique et moderne.
        </p>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Nos catégories populaires</h2>
        <div style={styles.categories}>
          <div style={styles.categoryCard}>
            <img src={statueImage1} alt="Buste classique" style={styles.image} />
            <h3>Bustes classiques</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
          </div>
          <div style={styles.categoryCard}>
            <img src={statueImage2} alt="Buste moderne" style={styles.image} />
            <h3>Bustes modernes</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div style={styles.categoryCard}>
            <img src={statueImage3} alt="Buste personnalisé" style={styles.image} />
            <h3>Bustes personnalisés</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>
      </section>
      <footer style={styles.footer}>
        <p>&copy; 2025 Votre Boutique de Bustes. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '2.5em',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#555',
  },
  section: {
    marginTop: '30px',
  },
  sectionTitle: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  categories: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  categoryCard: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '10px',
    width: '200px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  footer: {
    marginTop: '50px',
    backgroundColor: '#f8f9fa',
    padding: '10px',
    borderRadius: '10px',
  },
};

export default Home;