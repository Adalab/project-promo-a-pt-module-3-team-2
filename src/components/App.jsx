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

  const changeData = (nameProp , newValue) => {
    const cloneData = {...data};
    cloneData[nameProp] = newValue;
    setData(cloneData);
  }

  return (
    <div>
      <Header />
      <Create data={data} changeData={changeData} />
      <Footer />
    </div>
  );
}

export default App;
