import { Link } from "react-router-dom";

import "./blog.css";

import NavHeader from "../../ui/NavBar";
import Footer from "../../ui/Footer";

import { blogImages, species, ownerTips } from "./blogData";

export default function BlogDisplay() {
  return (
    <main className="blog-page">
      <div className="blog-container">
        <NavHeader
          logo="WAG!"
          options={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Blog", path: "/blog" },
            { label: "Help", path: "/about" },
          ]}
        />

        <section className="species-section">
          <h1>Species</h1>

          <div className="species-list">
            {species.map((item) => (
              <Link to={item.link} className="species-card" key={item.name}>
                <span>{item.name}</span>
                <img src={item.image} alt={item.name} />
              </Link>
            ))}
          </div>
        </section>

        <section className="petOwnersSection">
          <div className="petOwnersImage">
            <div className="blueCircle"></div>
            <img
              src={blogImages.catOwnerImg}
              alt="Pet owners cat"
              className="catOwnerImg"
            />
          </div>

          <div className="pet-owner-text">
            <h2>Pet Owners</h2>

            <p>
              The content shown here is designed to support pet owners in caring
              for their furry friends at home. The information is based on
              professional expertise and aims to provide clear, practical
              guidance for everyday pet care.
            </p>

            <p>
              While the information is developed by experts, we encourage you to
              consult your veterinarian when making decisions about your pet’s
              health and care.
            </p>
          </div>
        </section>

        <section className="first-time-section">
          <h2>First Time Pet Owners</h2>

          <p className="first-time-intro">
            New pet parent? We’re here to help you start this journey with
            confidence. Follow these essentials to give your pet the best
            beginning.
          </p>

          <div className="tips-list">
            {ownerTips.map((tip) => (
              <div className="tip-card" key={tip.title}>
                <div className="tip-icon">
                  <img src={tip.icon} alt="" />
                </div>

                <div>
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer
          logo="WAG!"
          options={["Home", "About", "Blog", "Help"]}
          socialMedia={["Instagram", "Facebook"]}
        />
      </div>
    </main>
  );
}



/* import "./blog.css";

import NavHeader from "../../ui/NavBar";
import Footer from "../../ui/Footer";

import { species, ownerTips } from "./blogData";
import catOwnerImg from "../../../assets/img/petOwnerCat2.png";

export default function BlogDisplay() {
  return (
    <main className="blog-page">
      <div className="blog-container">
        <NavHeader
          logo="WAG!"
          options={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Blog", path: "/blog" },
            { label: "Help", path: "/about" },
          ]}
        />

        <section className="species-section">
          <h1>Species</h1>

          <div className="species-list">
            {species.map((item) => (
              <a href={item.link} className="species-card" key={item.name}>
                <span>{item.name}</span>
                <img src={item.image} alt={item.name} />
              </a>
            ))}
          </div>
        </section>

        <section className="petOwnersSection">
          <div className="petOwnersImage">
            <div className="blueCircle"></div>
            <img
              src={catOwnerImg}
              alt="Pet owners cat"
              className="catOwnerImg"
            />
          </div>

          <div className="pet-owner-text">
            <h2>Pet Owners</h2>

            <p>
              The content shown here is designed to support pet owners in caring
              for their furry friends at home. The information is based on
              professional expertise and aims to provide clear, practical
              guidance for everyday pet care.
            </p>

            <p>
              While the information is developed by experts, we encourage you to
              consult your veterinarian when making decisions about your pet’s
              health and care.
            </p>
          </div>
        </section>

        <section className="first-time-section">
          <h2>First Time Pet Owners</h2>

          <p className="first-time-intro">
            New pet parent? We’re here to help you start this journey with
            confidence. Follow these essentials to give your pet the best
            beginning.
          </p>

          <div className="tips-list">
            {ownerTips.map((tip) => (
              <div className="tip-card" key={tip.title}>
                <div className="tip-icon">
                  <img src={tip.icon} alt="" />
                </div>

                <div>
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer
          logo="WAG!"
          options={["Home", "About", "Blog", "Help"]}
          socialMedia={["Instagram", "Facebook"]}
        />
      </div>
    </main>
  );
} */