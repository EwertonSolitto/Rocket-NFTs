import Content from "./components/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col items-center">
      <section className="image-background flex flex-col items-center">
        <Header />
        <Main />
      </section>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
