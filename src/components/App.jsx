import "../scss/App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import Form from "./Form";
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

  return (
    <div>
      <Header />

      <main className="main">
        <Hero />
        <Card />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
