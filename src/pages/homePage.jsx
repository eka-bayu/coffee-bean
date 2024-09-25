import React from "react";
import Navbar from "../components/navbarNav";
import CustomerRating from "../components/customerRating";
import ImageCarousel from "../components/imageCarousel";
import Footer from "../components/footer";
import "../styles/homePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <section className="carousel-section">
        <ImageCarousel />
      </section>
      <section className="hero-section">
        <div className="hero-content">
          <img src="/images/coffee.png" alt="coffee" />
          <p>Coffee</p>
        </div>
        <div className="hero-content">
          <img src="/images/cappuccino.png" alt="cappuccino" />
          <p>Non-Coffee</p>
        </div>
        <div className="hero-content">
          <img src="/images/croissant.png" alt="croissant bakery" />
          <p>F&B</p>
        </div>
        <div className="hero-content">
          <img src="/images/tea.png" alt="tea" />
          <p>Seasonal</p>
        </div>
      </section>
      <section className="aboutUs-section">
        <div className="aboutUs-content">
          <h5>About Us</h5>
          <h3>At Coffee Bean's, every cup is an experience.</h3>
          <p>
            At Coffee Bean's, we believe that coffee is more than just a
            beverage - it's an experience. Nestled in the heart of our
            community, we are dedicated to serving the finest coffee crafted
            from hand-selected beans sourced from the best farms around the
            world. Our commitment to quality means that every cup is brewed to
            perfection, ensuring a rich, flavorful experience with every sip.
          </p>
        </div>
        <img src="/images/aboutUs2.jpg" alt="about us" />
      </section>
      <section className="meetTeam-section">
        <div className="meetTeam-content">
          <h5>Meet Our Team</h5>
          <h3>
            Meet the Coffee Bean's family, people who with passionate about
            brewing the perfect cup and sharing their love for coffee with you.
          </h3>
          <p>
            At Coffee Bean's, we are a family of passionate individuals who live
            and breathe coffee. Our baristas are certified professionals,
            trained to not only brew the perfect cup but also to share their
            love for coffee with you. Say Hallo and meet our team.
          </p>
        </div>
        <div className="card-container">
          <div class="cards">
            <img src="/images/barista2.png" alt="barista" />
            <div className="card-item">
              <p className="card-name">Ananda Michelle</p>
              <p className="card-caption">Head Barista</p>
            </div>
          </div>
          <div class="cards">
            <img src="/images/coffee-specialist.png" alt="barista" />
            <div className="card-item">
              <p className="card-name">Anita Santoso</p>
              <p className="card-caption">Coffee Specialist</p>
            </div>
          </div>
          <div class="cards">
            <img src="/images/customer-relations2.png" alt="barista" />
            <div className="card-item">
              <p className="card-name">Ananta Monela</p>
              <p className="card-caption">Customer Relations</p>
            </div>
          </div>
        </div>
      </section>
      <CustomerRating />
      <Footer />
    </div>
  );
}

export default HomePage;
