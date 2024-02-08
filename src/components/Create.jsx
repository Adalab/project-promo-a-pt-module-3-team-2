import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import "../scss/Create.scss";

import PropTypes from "prop-types";

function Create({ changeData, data, updateAvatarAuthor, updateAvatarProject }) {
  return (
    <main className="main">
      <Hero />
      <Preview data={data} />
      <Form 
        changeData={changeData} 
        data={data} 
        updateAvatarAuthor={updateAvatarAuthor} 
        updateAvatarProject={updateAvatarProject} 
      />
    </main>
  );
}

Create.propTypes = {
  changeData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  updateAvatarAuthor: PropTypes.func.isRequired,
  updateAvatarProject: PropTypes.func.isRequired,
};

export default Create;
