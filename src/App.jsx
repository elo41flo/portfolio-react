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
        {/* ACCUEIL */}
        {page === "accueil" && (
          <section className="hero">
            <div className="profile-container">
              <img
                src="/pdp.webp"
                alt="Eloise Robert"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerText = "ER";
                }}
              />
            </div>
            <h1>Eloise Robert</h1>
            <h2 style={{ color: "#646cff" }}>Développeuse Web Junior</h2>
            <p>19 ans • Blois • La Fabrique du Numérique du 41</p>
            <div className="hero-btns">
              <button className="btn-p" onClick={() => setPage("projets")}>
                Mes Projets
              </button>
              <a href="/public/cv-eloise.pdf" download className="btn-cv">
                Télécharger CV (.pdf)
              </a>
            </div>
          </section>
        )}

        {/* À PROPOS */}
        {page === "apropos" && (
          <section>
            <h2 style={{ margin: "20px 0" }}>À propos de moi</h2>
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
                  "Local",
                ].map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="card" style={{ marginTop: "30px" }}>
              <h3>🎓 Mon Parcours</h3>
              <p>
                <strong>2025 - Présent</strong> : La Fabrique du Numérique du 41
                (Blois)
              </p>
              <p>
                <strong>2025</strong> : McDo, Marie Blachère, Colissimo
              </p>
              <p>
                <strong>2021-2023</strong> : Bac Pro MRC (CNED)
              </p>
            </div>
          </section>
        )}

        {/* RÉALISATIONS */}
        {page === "projets" && (
          <section>
            <h2 style={{ margin: "20px 0" }}>Mes Réalisations</h2>
            <div className="grid-responsive">
              {listeProjets.map((p) => (
                <ProjectCard key={p.id} projet={p} />
              ))}
            </div>
          </section>
        )}

        {/* CONTACT */}
        {page === "contact" && (
          <section className="contact-wrapper">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Me contacter
            </h2>
            {formEnvoye ? (
              <div
                className="card"
                style={{ textAlign: "center", color: "green" }}
              >
                ✅ Message envoyé !
              </div>
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
                />
                <button type="submit" className="btn-p">
                  Envoyer
                </button>
              </form>
            )}
          </section>
        )}
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "40px 0",
          borderTop: "1px solid #eee",
          marginTop: "40px",
        }}
      >
        <p>© 2026 - Eloise Robert - Blois (41)</p>
      </footer>
    </div>
  );
}

export default App;
