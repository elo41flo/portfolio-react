function Header({ pageActuelle, setPage }) {
  const menuItems = [
    { id: "accueil", label: "Accueil" },
    { id: "projets", label: "Réalisations" },
    { id: "apropos", label: "À propos" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Eloise Robert</div>
      <nav>
        <ul style={ulStyle}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setPage(item.id)}
              style={{
                ...liStyle,
                color: pageActuelle === item.id ? "#646cff" : "#333",
                borderBottom:
                  pageActuelle === item.id ? "2px solid #646cff" : "none",
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 0",
  marginBottom: "40px",
  borderBottom: "1px solid #eee",
};

const logoStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#646cff",
};

const ulStyle = {
  display: "flex",
  gap: "20px",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const liStyle = {
  cursor: "pointer",
  fontWeight: "500",
  transition: "0.3s",
  paddingBottom: "5px",
};

export default Header;
