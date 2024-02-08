import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import "../scss/Create.scss";

import PropTypes from "prop-types";



function Create({data, changeData }) {
  return (
    <main className="main">
      <Hero />
      <Preview data={data} />
      <Form changeData={changeData} data={data}/>
    </main>
  );
}

Create.propTypes = {
  changeData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

Create.propTypes = {
  changeData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Create;

