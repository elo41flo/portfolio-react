function ProjectCard({ projet }) {
  return (
    <div style={cardStyle} className="project-card">
      <div style={mediaContainerStyle}>
        <img src={projet.image} alt={projet.titre} style={imageStyle} />
      </div>

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
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
};
const mediaContainerStyle = {
  width: "100%",
  height: "200px",
  overflow: "hidden",
};
const imageStyle = { width: "100%", height: "100%", objectFit: "cover" };
const contentContainerStyle = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
};
const titleStyle = { margin: "0 0 10px 0", fontSize: "1.1rem" };
const descriptionStyle = {
  fontSize: "0.85rem",
  color: "#666",
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
};
const buttonGroupStyle = { display: "flex", gap: "10px", marginTop: "auto" };
const btnPrimary = {
  flex: 1,
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#646cff",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontSize: "0.85rem",
};
const btnSecondary = {
  flex: 1,
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#333",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontSize: "0.85rem",
};

export default ProjectCard;
