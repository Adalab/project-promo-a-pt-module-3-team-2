import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import "../scss/Create.scss";
import PropTypes from "prop-types";

function Create({ data }) {
  return (
    <main className="main">
      <Hero />
      <Preview data={data} />
      <Form data={data} />
    </main>
  );
}

export default Create;
