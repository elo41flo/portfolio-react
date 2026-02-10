function ProjectCard({ projet }) {
  return (
    <div className="card">
      <img
        src={projet.image}
        alt={projet.titre}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/300x180?text=Image+Introuvable";
        }}
      />
      <h3 style={{ marginTop: "15px" }}>{projet.titre}</h3>
      <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0" }}>
        {projet.description}
      </p>
      <div style={{ marginBottom: "15px" }}>
        {projet.technos.map((t) => (
          <span key={t} className="skill-tag" style={{ fontSize: "0.7rem" }}>
            {t}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <a
          href={projet.lienSite}
          target="_blank"
          rel="noreferrer"
          className="btn-p"
          style={{
            fontSize: "0.8rem",
            padding: "8px 12px",
            textDecoration: "none",
          }}
        >
          Voir le site
        </a>
        {projet.lienGithub && (
          <a
            href={projet.lienGithub}
            target="_blank"
            rel="noreferrer"
            className="btn-s"
            style={{
              fontSize: "0.8rem",
              padding: "8px 12px",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
