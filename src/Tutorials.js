import React from "react";
import "./Tutorials.css";
import { faker } from "@faker-js/faker";

function Tutorials() {
  const tutorials = [
    { id: 1, title: "Tutorial 1", desc: "React Basics", author: faker.person.firstName(), rating: 5, image: faker.image.urlPicsumPhotos(300, 200) },
    { id: 2, title: "Tutorial 2", desc: "NodeJS", author: faker.person.firstName(), rating: 4, image: faker.image.urlPicsumPhotos(300, 200) },
    { id: 3, title: "Tutorial 3", desc: "React Hooks", author: faker.person.firstName(), rating: 5, image: faker.image.urlPicsumPhotos(300, 200) },
  ];

  return (
    <section className="tutorials">
      <h2>Featured Tutorials</h2>
      <div className="tutorial-list">
        {tutorials.map(t => (
          <div key={t.id} className="tutorial-card">
            <img src={t.image} alt={t.title} />
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
            <p>⭐ {t.rating} <b>{t.author}</b></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tutorials;
