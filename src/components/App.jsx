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

  /*const changeData = (nameProp, newValue) => {
    const cloneData = { ...data };

    cloneData[nameProp] = newValue;

    setData(cloneData);
  };*/

  const changeData = (fieldName, inputValue) => {
    setData({ ...data, [fieldName]: inputValue });
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
      <Create
        changeData={changeData}
        data={data}
        updateAvatarAuthor={updateAvatarAuthor}
        updateAvatarProject={updateAvatarProject}
      />
      <Footer />
    </div>
  );
}

export default App;
