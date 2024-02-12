import "../scss/App.scss";
import Header from "./Header";
import Create from "./Create";
import Footer from "./Footer";

import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import FormPage from "./pages/FormPage";
import DetailPage from "./pages/DetailPage";

import { useState } from "react";

import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    photo: "", // Foto del proyecto
    image: "", // Foto de la autora
  });

  const [fetchResponse, setFetchResponse] = useState();

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
    clonData.image = image;
    setData(clonData);
  };

  const updateAvatarProject = (image) => {
    const clonData = { ...data };
    clonData.photo = image;
    setData(clonData);
  };

  const handleFetchPost = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        setFetchResponse(dataResponse);
      });
  };

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/form"
            element={<FormPage  
            changeData={changeData}
            data={data}
            updateAvatarAuthor={updateAvatarAuthor}
            updateAvatarProject={updateAvatarProject}
            onSubmit={handleFetchPost}
            fetchResponse={fetchResponse} />}
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>

        
      </main>
      <Footer />
    </div>
  );
}

export default App;
