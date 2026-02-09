function ProjectCard({ projet }) {
  return (
    <div style={cardStyle}>
      {/* 1. Zone Image ou Figma */}
      <div style={mediaContainerStyle}>
        {projet.iframeFigma ? (
          <iframe
            style={{ border: "none", borderRadius: "4px 4px 0 0" }}
            width="100%"
            height="200"
            src={projet.iframeFigma}
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={projet.image}
            alt={projet.titre}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "4px 4px 0 0",
            }}
          />
        )}
      </div>

      {/* 2. Zone Contenu (Titre + Desc + Tags + Boutons) */}
      <div style={contentContainerStyle}>
        <div>
          <h3 style={{ marginTop: 0, fontSize: "1.1rem" }}>{projet.titre}</h3>
          <p style={{ fontSize: "0.85rem", color: "#666", minHeight: "40px" }}>
            {projet.description}
          </p>

          <div style={tagContainerStyle}>
            {projet.technos.map((tech) => (
              <span key={tech} style={tagStyle}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Zone Boutons (toujours collée en bas) */}
        <div style={buttonGroupStyle}>
          {projet.lienSite && (
            <a
              href={projet.lienSite}
              target="_blank"
              rel="noreferrer"
              style={btnPrimary}
            >
              Voir le site
            </a>
          )}
          {projet.lienGithub && (
            <a
              href={projet.lienGithub}
              target="_blank"
              rel="noreferrer"
              style={btnSecondary}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  height: "100%", // Obligatoire pour que toutes les cartes fassent la même taille
  overflow: "hidden",
};

const mediaContainerStyle = {
  width: "100%",
  height: "200px",
  backgroundColor: "#f4f4f4",
};

const contentContainerStyle = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // C'est CA qui pousse les boutons en bas !
  flexGrow: 1, // Permet au container de prendre toute la place restante
};

const tagContainerStyle = {
  display: "flex",
  gap: "5px",
  flexWrap: "wrap",
  marginBottom: "20px",
};

const tagStyle = {
  backgroundColor: "#eef2ff",
  color: "#646cff",
  padding: "4px 10px",
  borderRadius: "4px",
  fontSize: "0.75rem",
  fontWeight: "bold",
};

const buttonGroupStyle = {
  display: "flex",
  gap: "10px",
  marginTop: "auto", // Sécurité supplémentaire pour coller en bas
};

const btnPrimary = {
  flex: 1,
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#646cff",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px",
  fontSize: "0.9rem",
  fontWeight: "500",
};

const btnSecondary = {
  flex: 1,
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#333",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px",
  fontSize: "0.9rem",
  fontWeight: "500",
};

export default ProjectCard;
