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
    photo: "", // Foto de la autora
    image: "", // Foto del proyecto
  });


  const changeData = (nameProp, newValue) => {
    const clonData = { ...data };

    clonData[nameProp] = newValue;
    // clonData.slogan = newValue;

    setData(clonData);
  };

  return (
    <div>
      <Header />
      <Create changeData={changeData} cloneData={cloneData} changeData={changeData} />
      <Footer />
    </div>
  );
}
App.propTypes={
  cloneData : PropTypes.object,
  changeData : PropTypes.func,
}

export default App;
