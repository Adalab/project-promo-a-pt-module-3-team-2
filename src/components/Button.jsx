import "../scss/Header.scss";

function Button() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <img
          className="header__companyLogo"
          src="./images/laptop-code-solid.svg"
          alt="Logo proyectos molones"
        />
        <h1 className="header__title">Proyectos molones</h1>
      </a>
      <img
        className="logoSponsor"
        src="./images/adalab.png"
        alt="Logo Adalab"
      />
    </header>
  );
}

export default Button;
