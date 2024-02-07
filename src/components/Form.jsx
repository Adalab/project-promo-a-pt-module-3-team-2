import '../scss/Form.scss';

import PropTypes from 'prop-types';

import GetAvatar from './GetAvatar';

function Form({ changeData, data }) {

  const handleChange = (event) => {

    const newValue = event.currentTarget.value;
    const attrIdOfInput = event.currentTarget.id;

    changeData( attrIdOfInput, newValue );
  
  };

  const updatePhoto = (image) => {
      changeData('photo', image);
    };

  const updateImage = (image) => {
      changeData('image', image);
    }

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
            onChange={handleChange}
            value={data.name}
          />
          <input
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            onChange={handleChange}
            value={data.slogan}
          />
          <div className="addForm__2col">
            <input
              className="addForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
              onChange={handleChange}
              value={data.repo}
            />
            <input
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
              onChange={handleChange}
              value={data.demo}
            />
          </div>
          <input
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
            onChange={handleChange}
            value={data.technologies}
          />
          <textarea
            className="addForm__input"
            type="text"
            name="desc"
            id="desc"
            placeholder="Descripción"
            rows="5"
            onChange={handleChange}
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
            onChange={handleChange}
            value={data.author}
          />
          <input
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
            onChange={handleChange}
            value={data.job}
          />
        </fieldset>

        <fieldset className="addForm__group--upload">
          
          <GetAvatar updateAvatar={updateImage} text="Subir foto del proyecto"/>
          
          <GetAvatar updateAvatar={updatePhoto} text="Subir foto de la autora"/>
         
          <button className="button--large">Guardar proyecto</button>
        </fieldset>
      </form>
    </>
  );
}

Form.propTypes = {
  changeData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Form;
