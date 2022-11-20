import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex items-center">
      <section className="image-background flex flex-col items-center">
        <Header />
        <Main />
      </section>
    </div>
  );
}

export default App;
