import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import "../scss/Create.scss";
import PropTypes from "prop-types";



function Create({data,changeData }) {
  return (
    <main className="main">
      <Hero />
      <Preview data={data} />
      <Form data={data} changeData={changeData} />
    </main>
  );
}

export default Create;

