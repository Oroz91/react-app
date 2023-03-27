import Header from "./components/header";
import Navigation from "./components/navigation";
import "./styles/styles.scss";
import hamburger from "./assets/icon-hamburger.svg";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div>Hello World!</div>
    </div>
  );
};

export default App;
