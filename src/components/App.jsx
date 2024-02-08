import "../scss/App.scss";
import Header from "./Header";
import Create from "./Create";
import Footer from "./Footer";
import { useState } from "react";

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


  const updateAvatarAuthor = (image) => {
    const clonData = { ...data }; 
    clonData.photo = image;
    setData(clonData);
  };

  const updateAvatarProject = (image) => {
    const clonData = { ...data };
    clonData.image = image;
    setData(clonData);
  };

  return (
    <div>
      <Header />
      <Create changeData={changeData} data={data} />
      <Footer />
    </div>
  );
}

export default App;
