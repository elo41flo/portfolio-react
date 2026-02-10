import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { listeProjets } from "./data/projets";

function App() {
  const [page, setPage] = useState("accueil");
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [formEnvoye, setFormEnvoye] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // L'URL sur laquelle on s'était mis d'accord
    const response = await fetch("https://formspree.io/f/xpqjwbbb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormEnvoye(true);
      setFormData({ nom: "", email: "", message: "" });
      setTimeout(() => setFormEnvoye(false), 5000);
    }
  };

  return (
    <div className="app-wrapper">
      <Header pageActuelle={page} setPage={setPage} />

      <main className="fade-in">
        {page === "accueil" && (
          <section className="hero">
            <div className="profile-avatar-container">
              {/* On tente de charger l'image, sinon on affiche ER */}
              <img
                src="/src/assets/pdp.webp"
                alt="Eloise Robert"
                onError={(e) => {
                  e.target.style.display = "none"; // Cache l'image si elle bug
                  e.target.parentNode.innerText = "ER"; // Affiche les initiales à la place
                }}
              />
            </div>
            <h1>Eloise Robert</h1>
            <h2 className="text-purple" style={{ color: "#646cff" }}>
              Développeuse Web Junior
            </h2>
            <p style={{ marginTop: "10px" }}>
              19 ans • Blois • La Fabrique du Numérique
            </p>
            <div className="hero-btns">
              <button className="btn-p" onClick={() => setPage("projets")}>
                Mes Projets
              </button>
              <button className="btn-s" onClick={() => setPage("contact")}>
                Me Contacter
              </button>
            </div>
          </section>
        )}
        {page === "apropos" && (
          <section>
            <h2 className="title-section">À propos de moi</h2>
            <div className="grid-responsive">
              <div className="card">
                <h3>🛠️ Hard Skills</h3>
                {["HTML/CSS", "JavaScript", "React", "Node", "WordPress"].map(
                  (s) => (
                    <span key={s} className="skill-tag">
                      {s}
                    </span>
                  ),
                )}
              </div>
              <div className="card">
                <h3>🌟 Soft Skills</h3>
                {["Gestion Stress", "Équipe", "Polyvalence", "Rigueur"].map(
                  (s) => (
                    <span key={s} className="skill-tag">
                      {s}
                    </span>
                  ),
                )}
              </div>
              <div className="card">
                <h3>📋 Méthodologies</h3>
                {["MERISE", "AGILE"].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
              <div className="card">
                <h3>💻 Logiciels</h3>
                {[
                  "VS Code",
                  "Figma",
                  "Postman",
                  "XAMPP",
                  "Looping",
                  "Canva",
                  "Local",
                ].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="card parcours-card">
              <h3>🎓 Mon Parcours</h3>
              <p>
                <strong>2025 - Présent</strong> : La Fabrique du Numérique
                (Blois)
              </p>
              <p>
                <strong>2025</strong> : McDo, Marie Blachère, Colissimo
              </p>
              <p>
                <strong>2021-2023</strong> : Bac Pro MRC (CNED) & Stages Josnes
              </p>
            </div>
          </section>
        )}
        {page === "projets" && (
          <section>
            <h2 className="title-section">Mes Réalisations</h2>
            <div className="grid-responsive">
              {listeProjets.map((p) => (
                <ProjectCard key={p.id} projet={p} />
              ))}
            </div>
          </section>
        )}
        {page === "contact" && (
          <section className="contact-wrapper">
            <h2 className="title-section center">Me contacter</h2>
            {formEnvoye ? (
              <div className="success-msg">✅ Message envoyé avec succès !</div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  name="nom"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="btn-p">
                  Envoyer le message
                </button>
              </form>
            )}
          </section>
        )}
      </main>

      <footer className="footer-site">
        <p>© 2026 - Eloise Robert - Blois (41)</p>
      </footer>
    </div>
  );
}

export default App;
