import PropTypes from "prop-types";
import Card from "./Card";
import "../scss/Preview.scss";

function Preview(data) {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <Card data={data} />
    </section>
  );
}

export default Preview;