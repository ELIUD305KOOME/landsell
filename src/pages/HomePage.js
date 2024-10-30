import React from 'react';
import "./HomePage.css";

const HomePage = () => (
  <>
    <section
      className="hero has-bg-image"
      aria-label="home"
      style={{ backgroundImage: "url('/images/beautiful.jpg')" }} // Updated path
    >
      <div className="container">
        <div className="hero-content">
          <p className="section-subtitle dark">
            Find Your Perfect Piece of Land
          </p>
          <h1 className="h1 section-title">
           LandBridge & Sales
          </h1>
          <p className="section-text">
            We offer a wide variety of land options to suit your needs.
          </p>

          <a href="/properties" className="hero-btn">
            <span className="span">Browse Properties</span>
          </a>
        </div>

                <figure className="hero-banner">
                    <img
                        src="/images/landforsalekeys.jpg" // Corrected path
                        alt="land for sale"
                        className="move-anim"
                    />
                </figure>

      </div>
    </section>
  </>
);

export default HomePage;
