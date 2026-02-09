import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { listeProjets } from "./data/projets";

function App() {
  const [page, setPage] = useState("accueil");
  const [filtre, setFiltre] = useState("Tous");

  // State pour le formulaire de contact
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [formEnvoye, setFormEnvoye] = useState(false);

  const categories = [
    "Tous",
    "WordPress",
    "HTML",
    "JavaScript",
    "Node.js",
    "React",
  ];

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour gérer l'envoi
  // Dans ton App.jsx, modifie uniquement la fonction handleSubmit :

  const handleSubmit = async (e) => {
    e.preventDefault();

    // On envoie les données à Formspree
    const response = await fetch("https://formspree.io/f/xpqjwbbb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormEnvoye(true);
      setFormData({ nom: "", email: "", message: "" });

      // On cache le message de succès après 5 secondes
      setTimeout(() => {
        setFormEnvoye(false);
      }, 5000);
    } else {
      alert("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <div style={appContainerStyle}>
      <Header pageActuelle={page} setPage={setPage} />

      <main>
        {/* --- PAGE ACCUEIL --- */}
        {page === "accueil" && (
          <section className="fade-in" style={heroSectionStyle}>
            <h1 style={bigTitleStyle}>Eloise Robert</h1>
            <h2 style={subTitleStyle}>Développeuse Web & Web Mobile</h2>
            <p style={heroDescriptionStyle}>
              Actuellement en formation à la{" "}
              <strong>Fabrique du Numérique du 41</strong> à Blois. Je prépare
              un titre professionnel sur 18 mois, incluant 12 mois d'alternance.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <button onClick={() => setPage("projets")} style={btnPrimary}>
                Voir mes réalisations
              </button>
              <a
                href="/src/assets/cv-eloise.pdf"
                download
                style={btnSecondaryOutlined}
              >
                Mon CV (.pdf)
              </a>
            </div>
          </section>
        )}

        {/* --- PAGE RÉALISATIONS --- */}
        {page === "projets" && (
          <section className="fade-in">
            <h2 style={{ marginBottom: "30px" }}>Mes Réalisations</h2>
            <div style={filterBarStyle}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFiltre(cat)}
                  style={{
                    ...filterBtnStyle,
                    backgroundColor: filtre === cat ? "#646cff" : "#eee",
                    color: filtre === cat ? "white" : "#333",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div style={gridStyle}>
              {listeProjets
                .filter((p) => filtre === "Tous" || p.technos.includes(filtre))
                .map((p) => (
                  <ProjectCard key={p.id} projet={p} />
                ))}
            </div>
          </section>
        )}

        {/* --- PAGE À PROPOS --- */}
        {page === "apropos" && (
          <section className="fade-in" style={textContentStyle}>
            <h2>À propos</h2>
            <p>
              J'ai 19 ans et j'ai rejoint la Fabrique du Numérique il y a
              maintenant 4 mois.
            </p>
            <p>
              Passionnée par le développement, je construis ce portfolio pour
              présenter mon évolution et trouver l'entreprise qui m'accompagnera
              durant mon alternance de 12 mois.
            </p>
          </section>
        )}

        {/* --- PAGE CONTACT --- */}
        {page === "contact" && (
          <section className="fade-in">
            <h2>Me contacter</h2>
            {formEnvoye ? (
              <div className="success-message">
                ✅ Merci {formData.nom} ! Votre message a bien été envoyé
                (simulé).
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" style={btnPrimary}>
                  Envoyer le message
                </button>
              </form>
            )}
            <div
              style={{ marginTop: "30px", fontSize: "0.9rem", color: "#666" }}
            >
              <p>📍 Localisation : Blois (41)</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

// STYLES (Inchangés pour garder la cohérence)
const appContainerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px",
  fontFamily: "system-ui, sans-serif",
  color: "#333",
};
const heroSectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "70vh",
  textAlign: "center",
};
const bigTitleStyle = { fontSize: "3.5rem", margin: "0" };
const subTitleStyle = {
  color: "#646cff",
  fontSize: "1.5rem",
  marginTop: "10px",
};
const heroDescriptionStyle = {
  maxWidth: "650px",
  fontSize: "1.1rem",
  color: "#666",
  lineHeight: "1.6",
};
const filterBarStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "30px",
};
const filterBtnStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
  paddingBottom: "50px",
};
const textContentStyle = { lineHeight: "1.8", maxWidth: "800px" };
const btnPrimary = {
  padding: "12px 24px",
  backgroundColor: "#646cff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};
const btnSecondaryOutlined = {
  padding: "12px 24px",
  border: "2px solid #646cff",
  color: "#646cff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};

export default App;
