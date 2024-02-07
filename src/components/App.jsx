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
    photo: "",
    image: "",
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
      <Create changeData={changeData} data={data} />
      <Footer />
    </div>
  );
}

export default App;
