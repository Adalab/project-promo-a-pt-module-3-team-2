import '../scss/App.scss';
import Card from './Card';
import Form from './Form';

function App() {
  return (
    <div>
      <Card />
      <header className="header">
      <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
        <img className="header__companyLogo" src="./images/laptop-code-solid.svg" alt="Logo proyectos molones" />
        <h1 className="header__title">Proyectos molones</h1>
      </a>
      <img className="logoSponsor" src="./images/adalab.png" alt="Logo Adalab" />
    </header>

    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <a className="button--link" href="./">Ver proyectos</a>
      </section>

      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" />
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" />
          <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" />
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" />
          </div>
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" />
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción"
            rows="5"></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" />
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" />
        </fieldset>

        <fieldset className="addForm__group--upload">
          <label htmlFor="image" className="button">Subir foto del proyecto </label>
          <input className="addForm__hidden" type="file" name="image" id="image" />
          <label htmlFor="photo" className="button">Subir foto de la autora</label>
          <input className="addForm__hidden" type="file" name="photo" id="photo" />
          <button className="button--large">Guardar proyecto</button>
        </fieldset>

      </form>
    </main>

    <footer className="footer">
      <img className="logoSponsor" src="./images/adalab.png" alt="Logo Adalab" />
    </footer>
    </div>
  );
}

export default App;
