import React from "react";
import { faker } from "@faker-js/faker";

function Featured() {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      desc: "React OR Vue",
      author: faker.person.firstName(),
      rating: 5,
      image: faker.image.urlPicsumPhotos(300, 200)
    },
    {
      id: 2,
      title: "Article 2",
      desc: "NodeJS",
      author: faker.person.firstName(),
      rating: 5,
      image: faker.image.urlPicsumPhotos(300, 200)
    },
    {
      id: 3,
      title: "Article 3",
      desc: "React Hooks",
      author: faker.person.firstName(),
      rating: 5,
      image: faker.image.urlPicsumPhotos(300, 200)
    }
  ];

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Featured Articles</h2>
      <div 
        style={{  display: "flex",  justifyContent: "center", gap: "20px", flexWrap: "wrap" 
        }}
      >
        {articles.map(article => (
          <div
            key={article.id}
            style={{
              border: "1px solid #ccc",borderRadius: "8px",
              width: "220px",padding: "10px",
              background: "#fff", textAlign: "left"
            }}
          >
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: "100%", borderRadius: "6px",
                height: "140px"
              }}
            />
            <h3 style={{ fontSize: "16px", margin: "10px 0 5px" }}>
              {article.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
              {article.desc}
            </p>
            <p style={{ fontSize: "14px" }}>
              ⭐ {article.rating} <b>{article.author}</b>
            </p>
          </div>
        ))}
      </div>

      <button 
        style={{marginTop: "20px",padding: "10px 20px",
          border: "none", borderRadius: "5px",
          background: "lightgray", cursor: "pointer"
        }}
      >
        See all articles
      </button>
    </section>
  );
}

export default Featured;
