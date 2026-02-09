function ProjectCard({ projet }) {
  return (
    <div style={cardStyle} className="project-card">
      {/* 1. Zone Image ou Figma */}
      <div style={mediaContainerStyle}>
        {projet.iframeFigma ? (
          <iframe
            style={{ border: "none", width: "100%", height: "100%" }}
            src={projet.iframeFigma}
            allowFullScreen
          ></iframe>
        ) : (
          <img src={projet.image} alt={projet.titre} style={imageStyle} />
        )}
      </div>

      {/* 2. Zone Contenu */}
      <div style={contentContainerStyle}>
        <div>
          <h3 style={titleStyle}>{projet.titre}</h3>
          <p style={descriptionStyle}>{projet.description}</p>

          <div style={tagContainerStyle}>
            {projet.technos.map((tech) => (
              <span key={tech} style={tagStyle}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Zone Boutons (Alignés en bas) */}
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

// STYLES (Bien indentés pour VS Code)
const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "default",
};

const mediaContainerStyle = {
  width: "100%",
  height: "200px",
  backgroundColor: "#f0f0f0",
  overflow: "hidden",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
};

const contentContainerStyle = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
};

const titleStyle = {
  margin: "0 0 10px 0",
  fontSize: "1.15rem",
  color: "#1a1a1a",
};

const descriptionStyle = {
  fontSize: "0.9rem",
  color: "#555",
  lineHeight: "1.4",
  marginBottom: "15px",
};

const tagContainerStyle = {
  display: "flex",
  gap: "6px",
  flexWrap: "wrap",
  marginBottom: "20px",
};

const tagStyle = {
  backgroundColor: "#f0f2ff",
  color: "#646cff",
  padding: "4px 10px",
  borderRadius: "20px",
  fontSize: "0.7rem",
  fontWeight: "bold",
  border: "1px solid #dce1ff",
};

const buttonGroupStyle = {
  display: "flex",
  gap: "10px",
  marginTop: "auto",
};

const btnPrimary = {
  flex: 1,
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#646cff",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontSize: "0.85rem",
  fontWeight: "600",
  transition: "background 0.2s",
};

const btnSecondary = {
  flex: 1,
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#242424",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontSize: "0.85rem",
  fontWeight: "600",
  transition: "background 0.2s",
};

export default ProjectCard;
