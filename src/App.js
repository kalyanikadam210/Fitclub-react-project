import "./App.css";
import Footer from "./compoents/Footer/Footer";
import Hero from "./compoents/Hero/Hero";
import Join from "./compoents/Join/Join";
import Plan from "./compoents/Plan/Plan";
import Programs from "./compoents/Program/Programs";
import Reasons from "./compoents/Reasons/Reasons";
import Testimonials from "./compoents/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
