import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import "../scss/Create.scss";
import PropTypes from "prop-types";



function Create({data,cloneData,changeData }) {
  return (
    <main className="main">
      <Hero />
      <Preview data={data} />
      <Form cloneData={cloneData} changeData={changeData} />
    </main>
  );
}

Create.PropTypes={
  cloneData : PropTypes.object,
  changeData : PropTypes.func,
}
export default Create;

