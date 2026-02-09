import { useState } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { listeProjets } from "./data/projets";

function App() {
  const [page, setPage] = useState("accueil");
  const [filtre, setFiltre] = useState("Tous");

  const categories = [
    "Tous",
    "WordPress",
    "HTML",
    "JavaScript",
    "Node.js",
    "React",
  ];

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "0 20px",
        color: "#333",
      }}
    >
      <Header pageActuelle={page} setPage={setPage} />

      <main>
        {page === "accueil" && (
          <section style={{ textAlign: "center", padding: "50px 0" }}>
            <h1>Bienvenue sur mon Portfolio !</h1>
            <p style={{ fontSize: "1.2rem", color: "#666" }}>
              Moi c'est Elo, j'ai 19 ans. Je suis en formation de développeur
              web à Blois.
            </p>
          </section>
        )}

        {page === "projets" && (
          <section>
            <h2 style={{ marginBottom: "30px" }}>Mes Réalisations</h2>

            <div
              style={{
                marginBottom: "30px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFiltre(cat)}
                  style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    backgroundColor: filtre === cat ? "#646cff" : "#eee",
                    color: filtre === cat ? "white" : "#333",
                    border: "none",
                    borderRadius: "8px",
                    transition: "0.3s",
                    fontWeight: "bold",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {listeProjets
                .filter((p) => filtre === "Tous" || p.technos.includes(filtre))
                .map((p) => (
                  <ProjectCard key={p.id} projet={p} />
                ))}
            </div>
          </section>
        )}

        {page === "apropos" && (
          <section style={{ lineHeight: "1.6", color: "#333" }}>
            <h2>À propos</h2>
            <p>
              Je m'appelle <strong>Elo</strong>, j'ai 19 ans. Je suis
              actuellement en formation de
              <strong> développeur web et web mobile</strong> à la Fabrique du
              Numérique du 41 à Blois.
            </p>
            <p>
              Ma formation dure 18 mois, dont 12 mois d'alternance. J'ai
              commencé il y a 1 mois et je suis super motivée !
            </p>
          </section>
        )}

        {page === "contact" && (
          <section>
            <h2>Me contacter</h2>
            <p>📧 Email : elo@exemple.com</p>
            <p>📍 Ville : Blois, France</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
