import "../scss/App.scss";
import Header from "./Header";
import Create from "./Create";
import Footer from "./Footer";
import { useState } from "react";
import { cloneElement } from "react";
import PropTypes from "prop-types";

function App() {
  const [data, setData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    author: "",
    job: "",
    photo: "",
    image: "",
  });

  const cloneData = {...data};
  const changeData = (nameProp , newValue) => {
    cloneData[nameProp] = newValue;
    console.log(cloneData)
    setData(cloneData);
  }

  return (
    <div>
      <Header />
      <Create cloneData={cloneData} changeData={changeData} />
      <Footer />
    </div>
  );
}
App.propTypes={
  cloneData : PropTypes.object,
  changeData : PropTypes.func,
}

export default App;
