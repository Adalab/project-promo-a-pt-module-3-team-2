import '../scss/Form.scss';
import PropTypes from "prop-types";

function Form({ changeData, data}) {

  const handleChange = (event) => {

    const newValue = event.currentTarget.value;
    const attrIdOfInput = event.currentTarget.id;
    
    changeData( attrIdOfInput, newValue );
  
  };

  return (
    <>
      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">
            Cuéntanos sobre el proyecto
          </legend>
          <input
            className="addForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
            onInput={handleChange}
            value={data.name}
          />
          <input
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            onInput={handleChange}
            value={data.slogan}
          />
          <input
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
            onInput={handleChange}
            value={data.technologies}
            
          />
          <div className="addForm__2col">
            <input
              className="addForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
              onInput={handleChange}
              value={data.repo}
            />
            <input
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
              onInput={handleChange}
              value={data.demo}
              
            />
          </div>
          <input
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
            onInput={handleChange}
            value={data.technologies}
          />
          <textarea
            className="addForm__input"
            type="text"
            name="desc"
            id="desc"
            placeholder="Descripción"
            rows="5"
            onInput={handleChange}
            value={data.desc}
            
          ></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input
            className="addForm__input"
            type="text"
            name="author"
            id="author"
            placeholder="Nombre"
            onInput={handleChange}
            value={data.author}
            
          />
          <input
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
            onInput={handleChange}
            value={data.job}
            
          />
        </fieldset>

        <fieldset className="addForm__group--upload">
          <label htmlFor="image" className="button">
            Subir foto del proyecto
          </label>
          <input
            className="addForm__hidden"
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
          />
          <input
            className="addForm__hidden"
            type="file"
            name="image"
            id="image"
            accept="image/*"
          />
          <label htmlFor="photo" className="button">
            Subir foto de la autora
          </label>
         
          <button className="button--large">Guardar proyecto</button>
        </fieldset>
      </form>
    </>
  );
}

Form.propTypes={
  changeData: PropTypes.func.isRequired,
  data: PropTypes.object,
  name : PropTypes.string.isRequired,
  slogan : PropTypes.string.isRequired,
  technologies : PropTypes.string.isRequired,
  repo : PropTypes.string.isRequired,
  demo : PropTypes.string.isRequired,
  desc : PropTypes.string.isRequired,
  author : PropTypes.string.isRequired,
  job : PropTypes.string.isRequired,
}
export default Form;
