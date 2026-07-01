import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import NavHeader from "../../ui/NavBar";
import Footer from "../../ui/Footer";

import { articles, speciesHeroImages } from "./blogData";
import "./blog.css";

const articlesPerPage = 5;

export default function SpeciesArticles() {
  const { species } = useParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");

  const filteredArticles = articles.filter((article) => {
    const belongsToSpecies = article.species === species;

    const matchesSearch =
      article.title.toLowerCase().includes(searchText.toLowerCase()) ||
      article.description.toLowerCase().includes(searchText.toLowerCase());

    return belongsToSpecies && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const visibleArticles = filteredArticles.slice(
    currentPage * articlesPerPage,
    currentPage * articlesPerPage + articlesPerPage
  );

  const title =
    species === "dog" ? "Dog" : species === "cat" ? "Cat" : "Others Pets";

  const heroImage =
    species === "dog"
      ? speciesHeroImages.dog
      : species === "cat"
      ? speciesHeroImages.cat
      : speciesHeroImages.others;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setCurrentPage(0);
  };

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

        <section className="species-articles-section">
          <h1>{title}</h1>

          <div className="species-hero-image">
            <img src={heroImage} alt={`${title} hero`} />
          </div>

          <p className="species-articles-intro">
            Our wide range of pet-related articles is designed to provide clear
            and practical guidance. Whether you are starting your journey as a
            pet owner or looking to learn more about specific care needs, you
            will find valuable and reliable information here.
          </p>

          <div className="article-search-row">
            <div className="article-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search articles..."
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className="article-list">
            {visibleArticles.length > 0 ? (
              visibleArticles.map((article) => (
                <Link
                  to={`/article/${article.slug}`}
                  className="article-card"
                  key={article.slug}
                >
                  <img src={article.image} alt={article.title} />

                  <div>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="no-articles-message">
                No articles found with that search.
              </p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="article-pagination">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`article-dot ${
                    currentPage === index ? "article-dot-active" : ""
                  }`}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
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