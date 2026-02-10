function Header({ pageActuelle, setPage }) {
  const menuItems = [
    { id: "accueil", label: "Accueil" },
    { id: "projets", label: "Réalisations" },
    { id: "apropos", label: "À propos" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="main-header">
      <div className="logo" onClick={() => setPage("accueil")}>
        Eloise Robert
      </div>
      <nav>
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setPage(item.id)}
              className={
                pageActuelle === item.id ? "nav-item active" : "nav-item"
              }
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
