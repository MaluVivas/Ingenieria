import { useState } from "react";
import "./about.css";

import HappyCostumersCards from "./HappyCopstumersCards";
import ContactForms from "./ContactForms";
import { aboutImages, services, happyCustomers } from "./aboutData";

import NavHeader from "../../ui/NavBar";
import Footer from "../../ui/Footer";


export default function AboutDisplay() {
  const [activeReviewPage, setActiveReviewPage] = useState(0);

  const reviewsPerPage = 2;

  const reviewPages: (typeof happyCustomers)[] = [];

  for (let i = 0; i < happyCustomers.length; i += reviewsPerPage) {
    reviewPages.push(happyCustomers.slice(i, i + reviewsPerPage));
  }

  const totalReviewPages = reviewPages.length;

  return (
    <main className="about-page">
      <div className="about-container">

<NavHeader logo="WAG!" />

        <section className="about-hero" id="home">
          <div className="about-hero-image">
            <img src={aboutImages.dogHero} alt="Dog using laptop" />
          </div>

          <div className="about-hero-text">
            <span>WAG!</span>

            <h1>
              <strong>Learn more</strong>
              <br />
              about us
            </h1>

            <p>
              We are a digital platform dedicated to helping pet owners care for
              their animals. We provide resources and services to make pet
              ownership simpler and safer.
            </p>
          </div>
        </section>

        <section className="mission-section" id="about">
          <div className="mission-text">
            <h2>Our Mission</h2>

            <p>
              Our mission is to make pet care easier, friendlier and more
              accessible, connecting people with spaces and services that improve
              the lives of their pets.
            </p>
          </div>

          <img src={aboutImages.catMission} alt="Cat" className="mission-cat" />
        </section>

        <section className="services-section" id="services">
          <h2>What Can You Do</h2>
          <p>Find Here?</p>

          <div className="services-list">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                 <div className="service-icon-circle">
                   <img src={service.image} alt={service.title} />
               </div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
  ))}
</div>
        </section>

        <section
          className="happy-section"
          style={{
            backgroundImage: `url(${aboutImages.confetiNaranja})`,
          }}
        >
          <h2>
            Happy
            <br />
            Customers
          </h2>

          <div className="happy-carousel">
            <div className="happy-slider">
              <div
                className="happy-track"
                style={{
                  transform: `translateX(-${activeReviewPage * 100}%)`,
                }}
              >
                {reviewPages.map((page, pageIndex) => (
                  <div className="happy-slide" key={pageIndex}>
                    {page.map((customer) => (
                      <HappyCostumersCards
                        key={customer.name}
                        image={customer.image}
                        name={customer.name}
                        description={customer.description}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="happy-dots">
              {Array.from({ length: totalReviewPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`happy-dot ${
                    activeReviewPage === index ? "happy-dot-active" : ""
                  }`}
                  onClick={() => setActiveReviewPage(index)}
                  aria-label={`Go to review page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-text">
            <h2>Contact Us</h2>

            <p>
              Need help or want to tell us something? Send us a message and we
              will be happy to contact you.
            </p>

            <img src={aboutImages.dogContact} alt="Dog and cat contact" />
          </div>

          <ContactForms
            title="Contact Form"
            description="Write your message below."
          />
        </section>

        <Footer logo="WAG!" socialMedia={[]} />
      </div>
    </main>
  );
}